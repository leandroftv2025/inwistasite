# 🚀 Guia de Deploy - inwistasite

## 📋 Resumo das Alterações Implementadas

✅ **Cor primária**: Alterada para #103549 (HSL 200 65% 18%)
✅ **Chat Botpress**: Integrado no site com scripts carregados
✅ **Menu ajustado**:
  - "Plataforma" → navega para seção "Por que Inwista?" (Benefícios)
  - "Cartão Internacional" → navega para seção do cartão premium (Plataforma)
✅ **Botões interativos**: Todos botões "Saiba Mais" e "Obter Cartão" abrem o chat Botpress
✅ **Docker**: Dockerfile multi-stage com Nginx Alpine criado
✅ **Nginx**: Configuração para SPA routing e health checks

---

## 🔧 Deploy no Servidor (192.168.1.15)

### Opção A: Deploy Automático (Recomendado)

```bash
# 1. SSH no servidor
ssh user@192.168.1.15

# 2. Navegar para o diretório (criar se não existir)
cd /home/user/inwistasite || git clone https://github.com/leandroftv2025/inwistasite.git /home/user/inwistasite
cd /home/user/inwistasite

# 3. Executar script de deploy
chmod +x deploy.sh
./deploy.sh
```

O script `deploy.sh` faz automaticamente:
- Pull das atualizações do GitHub
- npm install e build
- Build da imagem Docker
- Stop/remove container antigo
- Start do novo container
- Verificação de health check

---

### Opção B: Deploy Manual

```bash
# 1. Clone ou pull do repositório
cd /home/user
git clone https://github.com/leandroftv2025/inwistasite.git
# ou, se já existe:
cd inwistasite && git pull origin main

# 2. Instalar dependências e build
npm ci
npm run build

# 3. Build Docker
docker build -t inwistasite:latest .

# 4. Stop container antigo (se existir)
docker stop inwistasite 2>/dev/null || true
docker rm inwistasite 2>/dev/null || true

# 5. Run novo container
docker run -d \
  --name inwistasite \
  --restart unless-stopped \
  -p 8080:8080 \
  inwistasite:latest

# 6. Verificar status
docker ps | grep inwistasite
curl http://localhost:8080/healthz
```

---

## 🌐 Configurar Nginx Reverse Proxy

Para que o site fique acessível em `http://192.168.1.15/` (porta 80), configure o Nginx:

### 1. Criar arquivo de configuração

```bash
sudo nano /etc/nginx/sites-available/inwistasite
```

**Conteúdo:**

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name 192.168.1.15 inwista.local;

    # Logs
    access_log /var/log/nginx/inwistasite_access.log;
    error_log /var/log/nginx/inwistasite_error.log;

    # Proxy para container Docker
    location / {
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Health check
    location /healthz {
        proxy_pass http://localhost:8080/healthz;
        access_log off;
    }
}
```

### 2. Ativar site e recarregar Nginx

```bash
# Criar symlink
sudo ln -s /etc/nginx/sites-available/inwistasite /etc/nginx/sites-enabled/

# Testar configuração
sudo nginx -t

# Recarregar Nginx
sudo systemctl reload nginx
```

---

## 🔍 Verificar Deploy

Após o deploy, verifique:

```bash
# 1. Container rodando
docker ps | grep inwistasite

# 2. Health check direto
curl http://localhost:8080/healthz

# 3. Acesso via Nginx
curl http://192.168.1.15/

# 4. Ver logs do container
docker logs inwistasite -f

# 5. Ver logs do Nginx
sudo tail -f /var/log/nginx/inwistasite_access.log
```

---

## ✅ Checklist de Testes

Acesse `http://192.168.1.15/` e verifique:

- [ ] Site carrega corretamente
- [ ] **Cor azul escuro** (#103549) visível no header, botões e elementos
- [ ] **Chat Botpress** aparece no canto inferior direito
- [ ] Menu "Plataforma" leva para seção "Por que Inwista?"
- [ ] Menu "Cartão Internacional" leva para seção do cartão premium
- [ ] Botão "Saiba Mais" (Hero) abre o chat
- [ ] Botão "Saiba Mais" (Investments) abre o chat
- [ ] Botão "Obter Cartão" (Platform) abre o chat
- [ ] Dark mode funciona (toggle no header)
- [ ] Responsividade funciona (testar em mobile)

---

## 🔄 Atualizações Futuras

Para fazer updates no futuro:

```bash
cd /home/user/inwistasite
./deploy.sh
```

Ou manualmente:

```bash
git pull origin main
docker build -t inwistasite:latest .
docker stop inwistasite && docker rm inwistasite
docker run -d --name inwistasite --restart unless-stopped -p 8080:8080 inwistasite:latest
```

---

## 🚨 Troubleshooting

### Container não inicia

```bash
# Ver logs detalhados
docker logs inwistasite

# Verificar se porta 8080 está livre
sudo netstat -tlnp | grep 8080
```

### Site não carrega via Nginx

```bash
# Testar diretamente no container
curl http://localhost:8080/

# Ver logs do Nginx
sudo tail -f /var/log/nginx/inwistasite_error.log

# Verificar configuração Nginx
sudo nginx -t
```

### Chat Botpress não aparece

1. Abrir DevTools (F12) no navegador
2. Verificar Console para erros de carregamento
3. Verificar se os scripts Botpress estão no HTML:
   ```bash
   curl http://localhost:8080/ | grep botpress
   ```

### Cor não mudou

1. Limpar cache do navegador (Ctrl+Shift+R)
2. Verificar se o build incluiu as mudanças:
   ```bash
   docker exec inwistasite cat /usr/share/nginx/html/assets/*.css | grep "200 65% 18"
   ```

---

## 📞 Suporte

Se encontrar problemas:

1. Verifique os logs: `docker logs inwistasite -f`
2. Verifique o health check: `curl http://localhost:8080/healthz`
3. Reconstrua sem cache: `docker build --no-cache -t inwistasite:latest .`

---

**Última atualização**: 2025-11-07

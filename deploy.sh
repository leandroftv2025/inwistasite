#!/bin/bash
# ====================================
# INWISTA SITE - DEPLOYMENT SCRIPT
# ====================================
# Script para fazer deploy do inwistasite com Docker

set -e

# Cores
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

log_info() { echo -e "${BLUE}[INFO]${NC} $1"; }
log_success() { echo -e "${GREEN}[OK]${NC} $1"; }
log_warning() { echo -e "${YELLOW}[WARN]${NC} $1"; }
log_error() { echo -e "${RED}[ERROR]${NC} $1"; }

# Verificar Docker
if ! command -v docker &> /dev/null; then
    log_error "Docker não está instalado!"
    exit 1
fi

log_info "======================================"
log_info "  DEPLOY INWISTASITE"
log_info "======================================"
echo ""

# 1. Pull das atualizações
log_info "1. Baixando atualizações do repositório..."
git pull origin main

# 2. Build da aplicação
log_info "2. Instalando dependências e compilando..."
npm ci
npm run build

# 3. Parar container existente
log_info "3. Parando container existente..."
docker stop inwistasite 2>/dev/null || true
docker rm inwistasite 2>/dev/null || true

# 4. Build da imagem Docker
log_info "4. Construindo imagem Docker..."
docker build -t inwistasite:latest .

# 5. Executar container
log_info "5. Iniciando container..."
docker run -d \
  --name inwistasite \
  --restart unless-stopped \
  -p 8080:8080 \
  inwistasite:latest

# 6. Verificar saúde
log_info "6. Verificando health check..."
sleep 5
if curl -sf http://localhost:8080/healthz > /dev/null; then
    log_success "======================================"
    log_success "  DEPLOY CONCLUÍDO COM SUCESSO!"
    log_success "======================================"
    echo ""
    log_info "🌐 Serviço rodando em: http://localhost:8080"
    log_info "📊 Status: $(docker ps --filter name=inwistasite --format '{{.Status}}')"
    echo ""
else
    log_error "Health check falhou!"
    log_info "Verificando logs:"
    docker logs inwistasite --tail 50
    exit 1
fi

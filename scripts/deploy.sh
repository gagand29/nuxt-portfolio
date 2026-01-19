#!/bin/bash

# Deploy script for Vercel
# Usage: ./scripts/deploy.sh [preview|production]

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Default to preview deployment
ENVIRONMENT=${1:-preview}

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}  Gagan Portfolio - Vercel Deployment   ${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo -e "${YELLOW}Installing Vercel CLI...${NC}"
    npm install -g vercel
fi

# Check for required environment variables
if [ -z "$VERCEL_TOKEN" ]; then
    echo -e "${RED}Error: VERCEL_TOKEN not set${NC}"
    echo "Set it with: export VERCEL_TOKEN=your_token"
    echo "Get your token from: https://vercel.com/account/tokens"
    exit 1
fi

echo -e "${GREEN}Environment: ${ENVIRONMENT}${NC}"
echo ""

# Pull environment info
echo -e "${YELLOW}Pulling Vercel environment...${NC}"
vercel pull --yes --environment=$ENVIRONMENT --token=$VERCEL_TOKEN

# Build the project
echo ""
echo -e "${YELLOW}Building project...${NC}"
if [ "$ENVIRONMENT" = "production" ]; then
    vercel build --prod --token=$VERCEL_TOKEN
else
    vercel build --token=$VERCEL_TOKEN
fi

# Deploy
echo ""
echo -e "${YELLOW}Deploying to Vercel...${NC}"
if [ "$ENVIRONMENT" = "production" ]; then
    URL=$(vercel deploy --prebuilt --prod --token=$VERCEL_TOKEN)
    echo ""
    echo -e "${GREEN}========================================${NC}"
    echo -e "${GREEN}  Production deployment complete!       ${NC}"
    echo -e "${GREEN}========================================${NC}"
else
    URL=$(vercel deploy --prebuilt --token=$VERCEL_TOKEN)
    echo ""
    echo -e "${GREEN}========================================${NC}"
    echo -e "${GREEN}  Preview deployment complete!          ${NC}"
    echo -e "${GREEN}========================================${NC}"
fi

echo ""
echo -e "${BLUE}Deployed URL: ${URL}${NC}"
echo ""

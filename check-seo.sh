#!/bin/bash

# Скрипт для проверки SEO файлов на Vercel
# Использование: ./check-seo.sh YOUR_DOMAIN.vercel.app

if [ -z "$1" ]; then
    echo "Использование: ./check-seo.sh YOUR_DOMAIN.vercel.app"
    echo "Пример: ./check-seo.sh my-project.vercel.app"
    exit 1
fi

DOMAIN=$1
echo "🔍 Проверка SEO для: https://$DOMAIN"
echo ""

echo "1️⃣ Проверка robots.txt:"
curl -s "https://$DOMAIN/robots.txt" | head -10
echo ""
echo ""

echo "2️⃣ Проверка sitemap.xml:"
curl -s "https://$DOMAIN/sitemap.xml" | head -20
echo ""
echo ""

echo "3️⃣ Проверка manifest.json:"
curl -s "https://$DOMAIN/manifest.json" | head -10
echo ""
echo ""

echo "4️⃣ Проверка мета-тегов на главной странице:"
curl -s "https://$DOMAIN" | grep -E "<title>|<meta name=\"description\"|<meta property=\"og:" | head -10
echo ""
echo ""

echo "5️⃣ Проверка структурированных данных:"
curl -s "https://$DOMAIN" | grep -A 5 "application/ld+json" | head -10
echo ""
echo ""

echo "✅ Проверка завершена!"
echo ""
echo "📋 Следующие шаги:"
echo "1. Проверьте результаты выше"
echo "2. Используйте онлайн инструменты:"
echo "   - Google Rich Results: https://search.google.com/test/rich-results"
echo "   - Facebook Debugger: https://developers.facebook.com/tools/debug/"
echo "   - PageSpeed Insights: https://pagespeed.web.dev/"


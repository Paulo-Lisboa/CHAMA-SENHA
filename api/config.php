<?php
define('JWT_SECRET_KEY', '9X2$aK7#pL3^qR5*zT6&mN1@vB4!');
define('JWT_EXPIRATION_TIME', 3600); // 1 hora
define('JWT_ALGORITHM', 'HS256');

// Recomendações de segurança
error_reporting(0); // Desabilita mensagens de erro em produção
ini_set('display_errors', 0);
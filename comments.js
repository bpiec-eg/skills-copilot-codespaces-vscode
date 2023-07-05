// Create web server
var express = require('express');
var router = express.Router();

// Import database
var db = require('../database/db');

// Import modules
var modules = require('../modules/modules');

// Import config
var config = require('../config/config');

// Import middleware
var middleware = require('../middleware/middleware');

// Import models
var Comment = require('../models/comment');

// Import controllers
var commentController = require('../controllers/commentController');

// Import routes
var commentRoutes = require('./commentRoutes');

// Import routes
var userRoutes = require('./userRoutes');

// Import routes
var postRoutes = require('./postRoutes');

// Import routes
var forumRoutes = require('./forumRoutes');

// Import routes
var categoryRoutes = require('./categoryRoutes');

// Import routes
var subcategoryRoutes = require('./subcategoryRoutes');

// Import routes
var profileRoutes = require('./profileRoutes');

// Import routes
var adminRoutes = require('./adminRoutes');

// Import routes
var apiRoutes = require('./apiRoutes');

// Import routes
var indexRoutes = require('./indexRoutes');

// Import routes
var authRoutes = require('./authRoutes');

// Import routes
var messageRoutes = require('./messageRoutes');

// Import routes
var notificationRoutes = require('./notificationRoutes');

// Import routes
var searchRoutes = require('./searchRoutes');

// Import routes
var uploadRoutes = require('./uploadRoutes');

// Import routes
var settingsRoutes = require('./settingsRoutes');

// Import routes
var sitemapRoutes = require('./sitemapRoutes');

// Import routes
var errorRoutes = require('./errorRoutes');

// Import routes
var aboutRoutes = require('./aboutRoutes');

// Import routes
var contactRoutes = require('./contactRoutes');

// Import routes
var termsRoutes = require('./termsRoutes');

// Import routes
var privacyRoutes = require('./privacyRoutes');

// Import routes
var cookieRoutes = require('./cookieRoutes');

// Import routes
var faqRoutes = require('./faqRoutes');

// Import routes
var guidelinesRoutes = require('./guidelinesRoutes');

// Import routes
var reportRoutes = require('./reportRoutes');

// Import routes
var resetRoutes = require('./resetRoutes');

// Import routes
var verifyRoutes = require('./verifyRoutes');

// Import routes
var unsubscribeRoutes = require('./unsubscribeRoutes');

// Import routes
var subscribeRoutes = require('./subscribeRoutes');

// Import routes
var subscribeRoutes = require('./subscribeRoutes');

// Import routes
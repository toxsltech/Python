-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 13, 2020 at 04:04 PM
-- Server version: 8.0.21-0ubuntu0.20.04.4
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dt`
--

-- --------------------------------------------------------

--
-- Table structure for table `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `auth_group_permissions`
--

CREATE TABLE `auth_group_permissions` (
  `id` int NOT NULL,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `auth_permission`
--

CREATE TABLE `auth_permission` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 2, 'add_permission'),
(6, 'Can change permission', 2, 'change_permission'),
(7, 'Can delete permission', 2, 'delete_permission'),
(8, 'Can view permission', 2, 'view_permission'),
(9, 'Can add group', 3, 'add_group'),
(10, 'Can change group', 3, 'change_group'),
(11, 'Can delete group', 3, 'delete_group'),
(12, 'Can view group', 3, 'view_group'),
(13, 'Can add content type', 4, 'add_contenttype'),
(14, 'Can change content type', 4, 'change_contenttype'),
(15, 'Can delete content type', 4, 'delete_contenttype'),
(16, 'Can view content type', 4, 'view_contenttype'),
(17, 'Can add session', 5, 'add_session'),
(18, 'Can change session', 5, 'change_session'),
(19, 'Can delete session', 5, 'delete_session'),
(20, 'Can view session', 5, 'view_session'),
(21, 'Can add user', 6, 'add_user'),
(22, 'Can change user', 6, 'change_user'),
(23, 'Can delete user', 6, 'delete_user'),
(24, 'Can view user', 6, 'view_user'),
(25, 'Can add topics', 7, 'add_topics'),
(26, 'Can change topics', 7, 'change_topics'),
(27, 'Can delete topics', 7, 'delete_topics'),
(28, 'Can view topics', 7, 'view_topics'),
(29, 'Can add answer', 8, 'add_answer'),
(30, 'Can change answer', 8, 'change_answer'),
(31, 'Can delete answer', 8, 'delete_answer'),
(32, 'Can view answer', 8, 'view_answer'),
(33, 'Can add category', 9, 'add_category'),
(34, 'Can change category', 9, 'change_category'),
(35, 'Can delete category', 9, 'delete_category'),
(36, 'Can view category', 9, 'view_category'),
(37, 'Can add product', 10, 'add_product'),
(38, 'Can change product', 10, 'change_product'),
(39, 'Can delete product', 10, 'delete_product'),
(40, 'Can view product', 10, 'view_product'),
(41, 'Can add questions', 11, 'add_questions'),
(42, 'Can change questions', 11, 'change_questions'),
(43, 'Can delete questions', 11, 'delete_questions'),
(44, 'Can view questions', 11, 'view_questions'),
(45, 'Can add product images', 12, 'add_productimages'),
(46, 'Can change product images', 12, 'change_productimages'),
(47, 'Can delete product images', 12, 'delete_productimages'),
(48, 'Can view product images', 12, 'view_productimages'),
(49, 'Can add blogs', 13, 'add_blogs'),
(50, 'Can change blogs', 13, 'change_blogs'),
(51, 'Can delete blogs', 13, 'delete_blogs'),
(52, 'Can view blogs', 13, 'view_blogs'),
(53, 'Can add site', 14, 'add_site'),
(54, 'Can change site', 14, 'change_site'),
(55, 'Can delete site', 14, 'delete_site'),
(56, 'Can view site', 14, 'view_site'),
(57, 'Can add post', 15, 'add_post'),
(58, 'Can change post', 15, 'change_post'),
(59, 'Can delete post', 15, 'delete_post'),
(60, 'Can view post', 15, 'view_post'),
(61, 'Can add comment', 16, 'add_comment'),
(62, 'Can change comment', 16, 'change_comment'),
(63, 'Can delete comment', 16, 'delete_comment'),
(64, 'Can view comment', 16, 'view_comment'),
(65, 'Can add kv store', 17, 'add_kvstore'),
(66, 'Can change kv store', 17, 'change_kvstore'),
(67, 'Can delete kv store', 17, 'delete_kvstore'),
(68, 'Can view kv store', 17, 'view_kvstore'),
(69, 'Can add article', 18, 'add_article'),
(70, 'Can change article', 18, 'change_article'),
(71, 'Can delete article', 18, 'delete_article'),
(72, 'Can view article', 18, 'view_article'),
(73, 'Can add message', 19, 'add_message'),
(74, 'Can change message', 19, 'change_message'),
(75, 'Can delete message', 19, 'delete_message'),
(76, 'Can view message', 19, 'view_message'),
(77, 'Can add newsletter', 20, 'add_newsletter'),
(78, 'Can change newsletter', 20, 'change_newsletter'),
(79, 'Can delete newsletter', 20, 'delete_newsletter'),
(80, 'Can view newsletter', 20, 'view_newsletter'),
(81, 'Can add submission', 21, 'add_submission'),
(82, 'Can change submission', 21, 'change_submission'),
(83, 'Can delete submission', 21, 'delete_submission'),
(84, 'Can view submission', 21, 'view_submission'),
(85, 'Can add subscription', 22, 'add_subscription'),
(86, 'Can change subscription', 22, 'change_subscription'),
(87, 'Can delete subscription', 22, 'delete_subscription'),
(88, 'Can view subscription', 22, 'view_subscription');

-- --------------------------------------------------------

--
-- Table structure for table `django_admin_log`
--

CREATE TABLE `django_admin_log` (
  `id` int NOT NULL,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint UNSIGNED NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `django_content_type`
--

CREATE TABLE `django_content_type` (
  `id` int NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(7, 'accounts', 'topics'),
(6, 'accounts', 'user'),
(1, 'admin', 'logentry'),
(3, 'auth', 'group'),
(2, 'auth', 'permission'),
(16, 'blogapp', 'comment'),
(15, 'blogapp', 'post'),
(4, 'contenttypes', 'contenttype'),
(18, 'newsletter', 'article'),
(19, 'newsletter', 'message'),
(20, 'newsletter', 'newsletter'),
(21, 'newsletter', 'submission'),
(22, 'newsletter', 'subscription'),
(8, 'products', 'answer'),
(13, 'products', 'blogs'),
(9, 'products', 'category'),
(10, 'products', 'product'),
(12, 'products', 'productimages'),
(11, 'products', 'questions'),
(5, 'sessions', 'session'),
(14, 'sites', 'site'),
(17, 'thumbnail', 'kvstore');

-- --------------------------------------------------------

--
-- Table structure for table `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` int NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'contenttypes', '0001_initial', '2020-08-12 10:59:21.788344'),
(2, 'contenttypes', '0002_remove_content_type_name', '2020-08-12 10:59:24.086313'),
(3, 'auth', '0001_initial', '2020-08-12 10:59:25.733423'),
(4, 'auth', '0002_alter_permission_name_max_length', '2020-08-12 10:59:31.793547'),
(5, 'auth', '0003_alter_user_email_max_length', '2020-08-12 10:59:31.908347'),
(6, 'auth', '0004_alter_user_username_opts', '2020-08-12 10:59:32.029666'),
(7, 'auth', '0005_alter_user_last_login_null', '2020-08-12 10:59:32.143153'),
(8, 'auth', '0006_require_contenttypes_0002', '2020-08-12 10:59:32.248215'),
(9, 'auth', '0007_alter_validators_add_error_messages', '2020-08-12 10:59:32.383463'),
(10, 'auth', '0008_alter_user_username_max_length', '2020-08-12 10:59:32.507324'),
(11, 'auth', '0009_alter_user_last_name_max_length', '2020-08-12 10:59:32.634735'),
(12, 'auth', '0010_alter_group_name_max_length', '2020-08-12 10:59:32.886416'),
(13, 'auth', '0011_update_proxy_permissions', '2020-08-12 10:59:32.977508'),
(14, 'accounts', '0001_initial', '2020-08-12 10:59:35.414880'),
(15, 'admin', '0001_initial', '2020-08-12 10:59:44.076771'),
(16, 'admin', '0002_logentry_remove_auto_add', '2020-08-12 10:59:47.166765'),
(17, 'admin', '0003_logentry_add_action_flag_choices', '2020-08-12 10:59:47.350904'),
(18, 'products', '0001_initial', '2020-08-12 10:59:52.286465'),
(19, 'sessions', '0001_initial', '2020-08-12 11:00:14.496112'),
(20, 'blogapp', '0001_initial', '2020-08-13 10:30:40.790194'),
(21, 'sites', '0001_initial', '2020-08-13 10:30:44.505672'),
(22, 'newsletter', '0001_initial', '2020-08-13 10:30:50.040023'),
(23, 'newsletter', '0002_auto_20150416_1555', '2020-08-13 10:31:11.174607'),
(24, 'newsletter', '0003_auto_20160226_1518', '2020-08-13 10:31:12.459400'),
(25, 'newsletter', '0004_auto_20180407_1043', '2020-08-13 10:31:15.460832'),
(26, 'newsletter', '0005_auto_20190918_0122', '2020-08-13 10:31:19.904654'),
(27, 'products', '0002_delete_blogs', '2020-08-13 10:31:20.390771'),
(28, 'sites', '0002_alter_domain_unique', '2020-08-13 10:31:21.027191'),
(29, 'thumbnail', '0001_initial', '2020-08-13 10:31:21.766042');

-- --------------------------------------------------------

--
-- Table structure for table `django_session`
--

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `django_site`
--

CREATE TABLE `django_site` (
  `id` int NOT NULL,
  `domain` varchar(100) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `django_site`
--

INSERT INTO `django_site` (`id`, `domain`, `name`) VALUES
(1, 'example.com', 'example.com');

-- --------------------------------------------------------

--
-- Table structure for table `newsletter_article`
--

CREATE TABLE `newsletter_article` (
  `id` int NOT NULL,
  `sortorder` int UNSIGNED NOT NULL,
  `title` varchar(200) NOT NULL,
  `text` longtext NOT NULL,
  `url` varchar(200) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `post_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `newsletter_message`
--

CREATE TABLE `newsletter_message` (
  `id` int NOT NULL,
  `title` varchar(200) NOT NULL,
  `slug` varchar(50) NOT NULL,
  `date_create` datetime(6) NOT NULL,
  `date_modify` datetime(6) NOT NULL,
  `newsletter_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `newsletter_newsletter`
--

CREATE TABLE `newsletter_newsletter` (
  `id` int NOT NULL,
  `title` varchar(200) NOT NULL,
  `slug` varchar(50) NOT NULL,
  `email` varchar(254) NOT NULL,
  `sender` varchar(200) NOT NULL,
  `visible` tinyint(1) NOT NULL,
  `send_html` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `newsletter_newsletter_site`
--

CREATE TABLE `newsletter_newsletter_site` (
  `id` int NOT NULL,
  `newsletter_id` int NOT NULL,
  `site_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `newsletter_submission`
--

CREATE TABLE `newsletter_submission` (
  `id` int NOT NULL,
  `publish_date` datetime(6) DEFAULT NULL,
  `publish` tinyint(1) NOT NULL,
  `prepared` tinyint(1) NOT NULL,
  `sent` tinyint(1) NOT NULL,
  `sending` tinyint(1) NOT NULL,
  `message_id` int NOT NULL,
  `newsletter_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `newsletter_submission_subscriptions`
--

CREATE TABLE `newsletter_submission_subscriptions` (
  `id` int NOT NULL,
  `submission_id` int NOT NULL,
  `subscription_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `newsletter_subscription`
--

CREATE TABLE `newsletter_subscription` (
  `id` int NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `email` varchar(254) DEFAULT NULL,
  `ip` char(39) DEFAULT NULL,
  `create_date` datetime(6) NOT NULL,
  `activation_code` varchar(40) NOT NULL,
  `subscribed` tinyint(1) NOT NULL,
  `subscribe_date` datetime(6) DEFAULT NULL,
  `unsubscribed` tinyint(1) NOT NULL,
  `unsubscribe_date` datetime(6) DEFAULT NULL,
  `newsletter_id` int NOT NULL,
  `user_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_answer`
--

CREATE TABLE `tbl_answer` (
  `id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` longtext,
  `created_on` datetime(6) NOT NULL,
  `category_id` int NOT NULL,
  `created_by_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_category`
--

CREATE TABLE `tbl_category` (
  `id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` longtext,
  `created_on` datetime(6) NOT NULL,
  `created_by_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_comment`
--

CREATE TABLE `tbl_comment` (
  `id` int NOT NULL,
  `author` varchar(200) NOT NULL,
  `text` longtext NOT NULL,
  `created_date` datetime(6) NOT NULL,
  `approved_comment` tinyint(1) NOT NULL,
  `post_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_post`
--

CREATE TABLE `tbl_post` (
  `id` int NOT NULL,
  `title` varchar(200) NOT NULL,
  `text` longtext NOT NULL,
  `image` varchar(225) NOT NULL,
  `status` varchar(10) NOT NULL,
  `created_date` datetime(6) NOT NULL,
  `published_date` datetime(6) DEFAULT NULL,
  `author_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_product`
--

CREATE TABLE `tbl_product` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `descriptions` longtext,
  `colour` varchar(50) DEFAULT NULL,
  `size` varchar(50) DEFAULT NULL,
  `price` int UNSIGNED NOT NULL,
  `affilate_link` varchar(200) DEFAULT NULL,
  `rating` double NOT NULL,
  `created_on` datetime(6) NOT NULL,
  `answer_id` int DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  `created_by_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_product_image`
--

CREATE TABLE `tbl_product_image` (
  `id` int NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `created_on` datetime(6) NOT NULL,
  `created_by_id` int DEFAULT NULL,
  `product_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_question`
--

CREATE TABLE `tbl_question` (
  `id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` longtext,
  `created_on` datetime(6) NOT NULL,
  `category_id` int NOT NULL,
  `created_by_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_question_answers`
--

CREATE TABLE `tbl_question_answers` (
  `id` int NOT NULL,
  `questions_id` int NOT NULL,
  `answer_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_topic`
--

CREATE TABLE `tbl_topic` (
  `id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` longtext,
  `created_on` datetime(6) NOT NULL,
  `created_by_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `id` int NOT NULL,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  `username` varchar(100) DEFAULT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `email_verifY` tinyint(1) NOT NULL,
  `profile_pic` varchar(100) DEFAULT NULL,
  `mobile_no` varchar(100) DEFAULT NULL,
  `role_id` int UNSIGNED NOT NULL,
  `gender` int UNSIGNED NOT NULL,
  `social_id` varchar(100) DEFAULT NULL,
  `socio_type` int UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user_groups`
--

CREATE TABLE `tbl_user_groups` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `group_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user_user_permissions`
--

CREATE TABLE `tbl_user_user_permissions` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `permission_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `thumbnail_kvstore`
--

CREATE TABLE `thumbnail_kvstore` (
  `key` varchar(200) NOT NULL,
  `value` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`);

--
-- Indexes for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  ADD KEY `django_admin_log_user_id_c564eba6_fk_tbl_user_id` (`user_id`);

--
-- Indexes for table `django_content_type`
--
ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`);

--
-- Indexes for table `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `django_session`
--
ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_expire_date_a5c62663` (`expire_date`);

--
-- Indexes for table `django_site`
--
ALTER TABLE `django_site`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_site_domain_a2e37b91_uniq` (`domain`);

--
-- Indexes for table `newsletter_article`
--
ALTER TABLE `newsletter_article`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `newsletter_article_post_id_sortorder_cbe3c629_uniq` (`post_id`,`sortorder`);

--
-- Indexes for table `newsletter_message`
--
ALTER TABLE `newsletter_message`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `newsletter_message_slug_newsletter_id_a2ab3653_uniq` (`slug`,`newsletter_id`),
  ADD KEY `newsletter_message_slug_6dae36a9` (`slug`),
  ADD KEY `newsletter_message_newsletter_id_b77d9df1_fk_newslette` (`newsletter_id`);

--
-- Indexes for table `newsletter_newsletter`
--
ALTER TABLE `newsletter_newsletter`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`),
  ADD KEY `newsletter_newsletter_visible_db80e140` (`visible`);

--
-- Indexes for table `newsletter_newsletter_site`
--
ALTER TABLE `newsletter_newsletter_site`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `newsletter_newsletter_site_newsletter_id_site_id_eaadd4df_uniq` (`newsletter_id`,`site_id`),
  ADD KEY `newsletter_newsletter_site_site_id_2a546dc1_fk_django_site_id` (`site_id`);

--
-- Indexes for table `newsletter_submission`
--
ALTER TABLE `newsletter_submission`
  ADD PRIMARY KEY (`id`),
  ADD KEY `newsletter_submissio_message_id_35227c2e_fk_newslette` (`message_id`),
  ADD KEY `newsletter_submissio_newsletter_id_8fa5ae76_fk_newslette` (`newsletter_id`),
  ADD KEY `newsletter_submission_publish_date_6c3d8801` (`publish_date`),
  ADD KEY `newsletter_submission_publish_2ceb081e` (`publish`),
  ADD KEY `newsletter_submission_prepared_12eea099` (`prepared`),
  ADD KEY `newsletter_submission_sent_7c1e3f56` (`sent`),
  ADD KEY `newsletter_submission_sending_40b87529` (`sending`);

--
-- Indexes for table `newsletter_submission_subscriptions`
--
ALTER TABLE `newsletter_submission_subscriptions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `newsletter_submission_su_submission_id_subscripti_fa14b47b_uniq` (`submission_id`,`subscription_id`),
  ADD KEY `newsletter_submissio_subscription_id_be932b58_fk_newslette` (`subscription_id`);

--
-- Indexes for table `newsletter_subscription`
--
ALTER TABLE `newsletter_subscription`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `newsletter_subscription_user_id_email_newsletter_0a9641e0_uniq` (`user_id`,`email`,`newsletter_id`),
  ADD KEY `newsletter_subscript_newsletter_id_e9d08ab9_fk_newslette` (`newsletter_id`),
  ADD KEY `newsletter_subscription_email_3b8020aa` (`email`),
  ADD KEY `newsletter_subscription_subscribed_350402fe` (`subscribed`),
  ADD KEY `newsletter_subscription_unsubscribed_8ae75c15` (`unsubscribed`);

--
-- Indexes for table `tbl_answer`
--
ALTER TABLE `tbl_answer`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tbl_answer_category_id_d5375a5b_fk_tbl_category_id` (`category_id`),
  ADD KEY `tbl_answer_created_by_id_4221688b_fk_tbl_user_id` (`created_by_id`);

--
-- Indexes for table `tbl_category`
--
ALTER TABLE `tbl_category`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tbl_category_created_by_id_d802d54f_fk_tbl_user_id` (`created_by_id`);

--
-- Indexes for table `tbl_comment`
--
ALTER TABLE `tbl_comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tbl_comment_post_id_6bce07e0_fk_tbl_post_id` (`post_id`);

--
-- Indexes for table `tbl_post`
--
ALTER TABLE `tbl_post`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tbl_post_author_id_ce8c7cd2_fk_tbl_user_id` (`author_id`);

--
-- Indexes for table `tbl_product`
--
ALTER TABLE `tbl_product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tbl_product_answer_id_14680f20_fk_tbl_answer_id` (`answer_id`),
  ADD KEY `tbl_product_category_id_17dec3f2_fk_tbl_category_id` (`category_id`),
  ADD KEY `tbl_product_created_by_id_6952f245_fk_tbl_user_id` (`created_by_id`);

--
-- Indexes for table `tbl_product_image`
--
ALTER TABLE `tbl_product_image`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tbl_product_image_created_by_id_6259e409_fk_tbl_user_id` (`created_by_id`),
  ADD KEY `tbl_product_image_product_id_191a02be_fk_tbl_product_id` (`product_id`);

--
-- Indexes for table `tbl_question`
--
ALTER TABLE `tbl_question`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tbl_question_category_id_5b1b0b47_fk_tbl_category_id` (`category_id`),
  ADD KEY `tbl_question_created_by_id_ab001c28_fk_tbl_user_id` (`created_by_id`);

--
-- Indexes for table `tbl_question_answers`
--
ALTER TABLE `tbl_question_answers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `tbl_question_answers_questions_id_answer_id_bda278fb_uniq` (`questions_id`,`answer_id`),
  ADD KEY `tbl_question_answers_answer_id_58326c4a_fk_tbl_answer_id` (`answer_id`);

--
-- Indexes for table `tbl_topic`
--
ALTER TABLE `tbl_topic`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tbl_topic_created_by_id_390da216_fk_tbl_user_id` (`created_by_id`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `tbl_user_groups`
--
ALTER TABLE `tbl_user_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `tbl_user_groups_user_id_group_id_96fc015e_uniq` (`user_id`,`group_id`),
  ADD KEY `tbl_user_groups_group_id_d81345eb_fk_auth_group_id` (`group_id`);

--
-- Indexes for table `tbl_user_user_permissions`
--
ALTER TABLE `tbl_user_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `tbl_user_user_permissions_user_id_permission_id_98f65383_uniq` (`user_id`,`permission_id`),
  ADD KEY `tbl_user_user_permis_permission_id_f2f92266_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `thumbnail_kvstore`
--
ALTER TABLE `thumbnail_kvstore`
  ADD PRIMARY KEY (`key`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=89;

--
-- AUTO_INCREMENT for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `django_site`
--
ALTER TABLE `django_site`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `newsletter_article`
--
ALTER TABLE `newsletter_article`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `newsletter_message`
--
ALTER TABLE `newsletter_message`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `newsletter_newsletter`
--
ALTER TABLE `newsletter_newsletter`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `newsletter_newsletter_site`
--
ALTER TABLE `newsletter_newsletter_site`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `newsletter_submission`
--
ALTER TABLE `newsletter_submission`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `newsletter_submission_subscriptions`
--
ALTER TABLE `newsletter_submission_subscriptions`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `newsletter_subscription`
--
ALTER TABLE `newsletter_subscription`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_answer`
--
ALTER TABLE `tbl_answer`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_category`
--
ALTER TABLE `tbl_category`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_comment`
--
ALTER TABLE `tbl_comment`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_post`
--
ALTER TABLE `tbl_post`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_product`
--
ALTER TABLE `tbl_product`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_product_image`
--
ALTER TABLE `tbl_product_image`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_question`
--
ALTER TABLE `tbl_question`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_question_answers`
--
ALTER TABLE `tbl_question_answers`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_topic`
--
ALTER TABLE `tbl_topic`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_user_groups`
--
ALTER TABLE `tbl_user_groups`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_user_user_permissions`
--
ALTER TABLE `tbl_user_user_permissions`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Constraints for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Constraints for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `django_admin_log_user_id_c564eba6_fk_tbl_user_id` FOREIGN KEY (`user_id`) REFERENCES `tbl_user` (`id`);

--
-- Constraints for table `newsletter_article`
--
ALTER TABLE `newsletter_article`
  ADD CONSTRAINT `newsletter_article_post_id_c481e545_fk_newsletter_message_id` FOREIGN KEY (`post_id`) REFERENCES `newsletter_message` (`id`);

--
-- Constraints for table `newsletter_message`
--
ALTER TABLE `newsletter_message`
  ADD CONSTRAINT `newsletter_message_newsletter_id_b77d9df1_fk_newslette` FOREIGN KEY (`newsletter_id`) REFERENCES `newsletter_newsletter` (`id`);

--
-- Constraints for table `newsletter_newsletter_site`
--
ALTER TABLE `newsletter_newsletter_site`
  ADD CONSTRAINT `newsletter_newslette_newsletter_id_d5cf228e_fk_newslette` FOREIGN KEY (`newsletter_id`) REFERENCES `newsletter_newsletter` (`id`),
  ADD CONSTRAINT `newsletter_newsletter_site_site_id_2a546dc1_fk_django_site_id` FOREIGN KEY (`site_id`) REFERENCES `django_site` (`id`);

--
-- Constraints for table `newsletter_submission`
--
ALTER TABLE `newsletter_submission`
  ADD CONSTRAINT `newsletter_submissio_message_id_35227c2e_fk_newslette` FOREIGN KEY (`message_id`) REFERENCES `newsletter_message` (`id`),
  ADD CONSTRAINT `newsletter_submissio_newsletter_id_8fa5ae76_fk_newslette` FOREIGN KEY (`newsletter_id`) REFERENCES `newsletter_newsletter` (`id`);

--
-- Constraints for table `newsletter_submission_subscriptions`
--
ALTER TABLE `newsletter_submission_subscriptions`
  ADD CONSTRAINT `newsletter_submissio_submission_id_0cda0c3f_fk_newslette` FOREIGN KEY (`submission_id`) REFERENCES `newsletter_submission` (`id`),
  ADD CONSTRAINT `newsletter_submissio_subscription_id_be932b58_fk_newslette` FOREIGN KEY (`subscription_id`) REFERENCES `newsletter_subscription` (`id`);

--
-- Constraints for table `newsletter_subscription`
--
ALTER TABLE `newsletter_subscription`
  ADD CONSTRAINT `newsletter_subscript_newsletter_id_e9d08ab9_fk_newslette` FOREIGN KEY (`newsletter_id`) REFERENCES `newsletter_newsletter` (`id`),
  ADD CONSTRAINT `newsletter_subscription_user_id_4185bd67_fk_tbl_user_id` FOREIGN KEY (`user_id`) REFERENCES `tbl_user` (`id`);

--
-- Constraints for table `tbl_answer`
--
ALTER TABLE `tbl_answer`
  ADD CONSTRAINT `tbl_answer_category_id_d5375a5b_fk_tbl_category_id` FOREIGN KEY (`category_id`) REFERENCES `tbl_category` (`id`),
  ADD CONSTRAINT `tbl_answer_created_by_id_4221688b_fk_tbl_user_id` FOREIGN KEY (`created_by_id`) REFERENCES `tbl_user` (`id`);

--
-- Constraints for table `tbl_category`
--
ALTER TABLE `tbl_category`
  ADD CONSTRAINT `tbl_category_created_by_id_d802d54f_fk_tbl_user_id` FOREIGN KEY (`created_by_id`) REFERENCES `tbl_user` (`id`);

--
-- Constraints for table `tbl_comment`
--
ALTER TABLE `tbl_comment`
  ADD CONSTRAINT `tbl_comment_post_id_6bce07e0_fk_tbl_post_id` FOREIGN KEY (`post_id`) REFERENCES `tbl_post` (`id`);

--
-- Constraints for table `tbl_post`
--
ALTER TABLE `tbl_post`
  ADD CONSTRAINT `tbl_post_author_id_ce8c7cd2_fk_tbl_user_id` FOREIGN KEY (`author_id`) REFERENCES `tbl_user` (`id`);

--
-- Constraints for table `tbl_product`
--
ALTER TABLE `tbl_product`
  ADD CONSTRAINT `tbl_product_answer_id_14680f20_fk_tbl_answer_id` FOREIGN KEY (`answer_id`) REFERENCES `tbl_answer` (`id`),
  ADD CONSTRAINT `tbl_product_category_id_17dec3f2_fk_tbl_category_id` FOREIGN KEY (`category_id`) REFERENCES `tbl_category` (`id`),
  ADD CONSTRAINT `tbl_product_created_by_id_6952f245_fk_tbl_user_id` FOREIGN KEY (`created_by_id`) REFERENCES `tbl_user` (`id`);

--
-- Constraints for table `tbl_product_image`
--
ALTER TABLE `tbl_product_image`
  ADD CONSTRAINT `tbl_product_image_created_by_id_6259e409_fk_tbl_user_id` FOREIGN KEY (`created_by_id`) REFERENCES `tbl_user` (`id`),
  ADD CONSTRAINT `tbl_product_image_product_id_191a02be_fk_tbl_product_id` FOREIGN KEY (`product_id`) REFERENCES `tbl_product` (`id`);

--
-- Constraints for table `tbl_question`
--
ALTER TABLE `tbl_question`
  ADD CONSTRAINT `tbl_question_category_id_5b1b0b47_fk_tbl_category_id` FOREIGN KEY (`category_id`) REFERENCES `tbl_category` (`id`),
  ADD CONSTRAINT `tbl_question_created_by_id_ab001c28_fk_tbl_user_id` FOREIGN KEY (`created_by_id`) REFERENCES `tbl_user` (`id`);

--
-- Constraints for table `tbl_question_answers`
--
ALTER TABLE `tbl_question_answers`
  ADD CONSTRAINT `tbl_question_answers_answer_id_58326c4a_fk_tbl_answer_id` FOREIGN KEY (`answer_id`) REFERENCES `tbl_answer` (`id`),
  ADD CONSTRAINT `tbl_question_answers_questions_id_9621343e_fk_tbl_question_id` FOREIGN KEY (`questions_id`) REFERENCES `tbl_question` (`id`);

--
-- Constraints for table `tbl_topic`
--
ALTER TABLE `tbl_topic`
  ADD CONSTRAINT `tbl_topic_created_by_id_390da216_fk_tbl_user_id` FOREIGN KEY (`created_by_id`) REFERENCES `tbl_user` (`id`);

--
-- Constraints for table `tbl_user_groups`
--
ALTER TABLE `tbl_user_groups`
  ADD CONSTRAINT `tbl_user_groups_group_id_d81345eb_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  ADD CONSTRAINT `tbl_user_groups_user_id_6dda685a_fk_tbl_user_id` FOREIGN KEY (`user_id`) REFERENCES `tbl_user` (`id`);

--
-- Constraints for table `tbl_user_user_permissions`
--
ALTER TABLE `tbl_user_user_permissions`
  ADD CONSTRAINT `tbl_user_user_permis_permission_id_f2f92266_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `tbl_user_user_permissions_user_id_205d273c_fk_tbl_user_id` FOREIGN KEY (`user_id`) REFERENCES `tbl_user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

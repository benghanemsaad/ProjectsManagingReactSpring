-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  mar. 14 jan. 2020 à 20:17
-- Version du serveur :  10.3.16-MariaDB
-- Version de PHP :  7.2.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `spring_social`
--

-- --------------------------------------------------------

--
-- Structure de la table `card`
--

CREATE TABLE `card` (
  `id` bigint(20) NOT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `dead_line_date_andhour` varchar(255) DEFAULT NULL,
  `duration` varchar(255) DEFAULT NULL,
  `etat` varchar(255) DEFAULT NULL,
  `text` varchar(255) DEFAULT NULL,
  `task_flow_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `card`
--

INSERT INTO `card` (`id`, `comment`, `created_by`, `dead_line_date_andhour`, `duration`, `etat`, `text`, `task_flow_id`) VALUES
(154, 'Urgent', 'benghanemsaad@gmail.com', '2019-12-28T15:15', '15', NULL, 'Hi', NULL),
(158, 'Informatif', 'benghanemsaad@gmail.com', '2019-12-22T20:20', '15', NULL, '14478', NULL),
(159, 'Quotidien', 'benghanemsaad@gmail.com', '2019-12-22T20:20', '18', NULL, 'oo', NULL),
(180, 'Informatif', 'benghanemsaad@gmail.com', '2020-01-24T15:00', '1555', NULL, 'Salluuuuuut', NULL),
(190, 'Quotidien', 'benghanemsaad@gmail.com', '2020-12-15T15:15', '15', NULL, 'Hi', NULL),
(192, 'Quotidien', 'benghanemsaad@gmail.com', '2020-01-09T15:15', '15', NULL, 'Hiiii', NULL),
(197, 'Quotidien', 'saad@gmail.com', '2020-01-22T15:15', '15', NULL, 'salut', NULL),
(198, 'Informatif', 'saad@gmail.com', '2020-01-30T15:15', '155', NULL, 'Hei', NULL),
(213, 'Urgent', 'chef@gmail.com', '2020-01-09T15:15', '14', NULL, 'Tache1', NULL),
(215, 'Informatif', 'chef@gmail.com', '2020-01-17T20:20', '15', NULL, 'Tache info', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(216),
(216);

-- --------------------------------------------------------

--
-- Structure de la table `projet`
--

CREATE TABLE `projet` (
  `id` bigint(20) NOT NULL,
  `budget` float NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `duree` varchar(255) DEFAULT NULL,
  `objectif` varchar(255) DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `valide` bit(1) NOT NULL,
  `approuved` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `projet`
--

INSERT INTO `projet` (`id`, `budget`, `description`, `duree`, `objectif`, `created_by`, `valide`, `approuved`) VALUES
(207, 14557, 'Description Projet A', '14h', 'Realiser Projet 1', 'chef@gmail.com', b'0', b'0'),
(208, 144, 'des1', '15h', '155447', 'chef@gmail.com', b'0', b'0');

-- --------------------------------------------------------

--
-- Structure de la table `projet_task_flows`
--

CREATE TABLE `projet_task_flows` (
  `projet_id` bigint(20) NOT NULL,
  `task_flows_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `projet_task_flows`
--

INSERT INTO `projet_task_flows` (`projet_id`, `task_flows_id`) VALUES
(207, 212),
(207, 214);

-- --------------------------------------------------------

--
-- Structure de la table `projet_validations`
--

CREATE TABLE `projet_validations` (
  `projet_id` bigint(20) NOT NULL,
  `validations_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `projet_validations`
--

INSERT INTO `projet_validations` (`projet_id`, `validations_id`) VALUES
(207, 210),
(207, 211);

-- --------------------------------------------------------

--
-- Structure de la table `service`
--

CREATE TABLE `service` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `chef_service_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `service`
--

INSERT INTO `service` (`id`, `name`, `chef_service_id`) VALUES
(206, 'Informatique', 25);

-- --------------------------------------------------------

--
-- Structure de la table `service_employee`
--

CREATE TABLE `service_employee` (
  `service_id` bigint(20) NOT NULL,
  `employee_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `service_employee`
--

INSERT INTO `service_employee` (`service_id`, `employee_id`) VALUES
(206, 23),
(206, 25);

-- --------------------------------------------------------

--
-- Structure de la table `service_projets`
--

CREATE TABLE `service_projets` (
  `service_id` bigint(20) NOT NULL,
  `projets_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `service_projets`
--

INSERT INTO `service_projets` (`service_id`, `projets_id`) VALUES
(206, 207),
(206, 208);

-- --------------------------------------------------------

--
-- Structure de la table `task_flow`
--

CREATE TABLE `task_flow` (
  `id` bigint(20) NOT NULL,
  `title` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `task_flow`
--

INSERT INTO `task_flow` (`id`, `title`) VALUES
(212, 'To'),
(214, 'DONE');

-- --------------------------------------------------------

--
-- Structure de la table `task_flow_cards`
--

CREATE TABLE `task_flow_cards` (
  `task_flow_id` bigint(20) NOT NULL,
  `cards_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `task_flow_cards`
--

INSERT INTO `task_flow_cards` (`task_flow_id`, `cards_id`) VALUES
(212, 213),
(212, 215);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified` bit(1) NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `provider` varchar(255) DEFAULT NULL,
  `provider_id` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `email`, `email_verified`, `image_url`, `name`, `password`, `provider`, `provider_id`, `role`) VALUES
(3, 'saad@gmail.com', b'0', NULL, 'saad benghnaem', '$2a$10$WCHzDL/Uwzn4TKupSrv2cujBX9ivjAfJ5FUUVUdfnT2C7IFwSdAd2', 'local', NULL, 'Admin'),
(23, 'hi@gmailcom', b'0', NULL, 'hiiiii', '$2a$10$g//gOnojy8UrtXlxPQCWGuhE1iv.kTvPVEsFOHiWEYi05hB1xLVSa', 'local', NULL, 'Simple'),
(24, 'pwd@gmail.com', b'0', NULL, 'pwd', '$2a$10$vZcLVyYPr1RIZ8m6mLCZh.Xiynr9pPIFmMoHJVttbHY/losmuZ8yq', 'local', NULL, 'Chef'),
(25, 'chef@gmail.com', b'0', NULL, 'chef', '$2a$10$DF1if3hZZXsMVBN6Y8GDoOPu4jEI4mIIww3ikzovOs6vmC7zrbfty', 'local', NULL, 'Chef'),
(26, 'benghanem@gmail.com', b'0', NULL, 'Saad Benghanem', '$2a$10$1Eal9CUcV6QVNShghSrdi.T6W6aQ0fSW05uVQEG4iL6esKBsUfLs2', 'local', NULL, 'Admin');

-- --------------------------------------------------------

--
-- Structure de la table `validate_project_emp`
--

CREATE TABLE `validate_project_emp` (
  `id` bigint(20) NOT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `validation` bit(1) DEFAULT NULL,
  `employee_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `validate_project_emp`
--

INSERT INTO `validate_project_emp` (`id`, `comment`, `validation`, `employee_id`) VALUES
(203, 'Valide', b'1', 3),
(204, 'hi', b'0', 3),
(209, 'je valide', b'0', 25),
(210, 'Je Valide', b'1', 25),
(211, 'Non Je Valide Pas', b'0', 3);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `card`
--
ALTER TABLE `card`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKam0r24jus39yg0senyxccwef1` (`task_flow_id`);

--
-- Index pour la table `projet`
--
ALTER TABLE `projet`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `projet_task_flows`
--
ALTER TABLE `projet_task_flows`
  ADD UNIQUE KEY `UK_gci16xscxqc79f4csqiq2csda` (`task_flows_id`),
  ADD KEY `FKqsykdryd9jeqynrvggnat7y2j` (`projet_id`);

--
-- Index pour la table `projet_validations`
--
ALTER TABLE `projet_validations`
  ADD UNIQUE KEY `UK_8yogi5tna49lsrogn7kpuxes0` (`validations_id`),
  ADD KEY `FK2q59vcp2eo8cthwdsmxeoe57w` (`projet_id`);

--
-- Index pour la table `service`
--
ALTER TABLE `service`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKruikskdk194ddaet11pje14bl` (`chef_service_id`);

--
-- Index pour la table `service_employee`
--
ALTER TABLE `service_employee`
  ADD UNIQUE KEY `UK_hvt33wg3wks08f4js3v89msfl` (`employee_id`),
  ADD KEY `FK85yk0cps9p4xwr9rw1duwvq7q` (`service_id`);

--
-- Index pour la table `service_projets`
--
ALTER TABLE `service_projets`
  ADD UNIQUE KEY `UK_sirinm5aakb29op6mcnui7g4w` (`projets_id`),
  ADD KEY `FK7oamhjlg5vwte5u6y7w64nc5u` (`service_id`);

--
-- Index pour la table `task_flow`
--
ALTER TABLE `task_flow`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `task_flow_cards`
--
ALTER TABLE `task_flow_cards`
  ADD UNIQUE KEY `UK_hpuc7u3tvyulkf35lv32ipb2i` (`cards_id`),
  ADD KEY `FKp75sfpnvtq3urdgwn5moxaqsa` (`task_flow_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`);

--
-- Index pour la table `validate_project_emp`
--
ALTER TABLE `validate_project_emp`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKcqi7tqdjb5dl5r6mgg4qbqh3d` (`employee_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `card`
--
ALTER TABLE `card`
  ADD CONSTRAINT `FKam0r24jus39yg0senyxccwef1` FOREIGN KEY (`task_flow_id`) REFERENCES `task_flow` (`id`);

--
-- Contraintes pour la table `projet_task_flows`
--
ALTER TABLE `projet_task_flows`
  ADD CONSTRAINT `FKl5whho3ef24ue20hjn3otiu6t` FOREIGN KEY (`task_flows_id`) REFERENCES `task_flow` (`id`),
  ADD CONSTRAINT `FKqsykdryd9jeqynrvggnat7y2j` FOREIGN KEY (`projet_id`) REFERENCES `projet` (`id`);

--
-- Contraintes pour la table `projet_validations`
--
ALTER TABLE `projet_validations`
  ADD CONSTRAINT `FK2q59vcp2eo8cthwdsmxeoe57w` FOREIGN KEY (`projet_id`) REFERENCES `projet` (`id`),
  ADD CONSTRAINT `FKmxce94sh58sk0g560ap11yvlj` FOREIGN KEY (`validations_id`) REFERENCES `validate_project_emp` (`id`);

--
-- Contraintes pour la table `service`
--
ALTER TABLE `service`
  ADD CONSTRAINT `FKruikskdk194ddaet11pje14bl` FOREIGN KEY (`chef_service_id`) REFERENCES `users` (`id`);

--
-- Contraintes pour la table `service_employee`
--
ALTER TABLE `service_employee`
  ADD CONSTRAINT `FK85yk0cps9p4xwr9rw1duwvq7q` FOREIGN KEY (`service_id`) REFERENCES `service` (`id`),
  ADD CONSTRAINT `FKgb0207imjxtgywc5al3m5rrm` FOREIGN KEY (`employee_id`) REFERENCES `users` (`id`);

--
-- Contraintes pour la table `service_projets`
--
ALTER TABLE `service_projets`
  ADD CONSTRAINT `FK7oamhjlg5vwte5u6y7w64nc5u` FOREIGN KEY (`service_id`) REFERENCES `service` (`id`),
  ADD CONSTRAINT `FKtgp9cafdeddw180f9twv0plxf` FOREIGN KEY (`projets_id`) REFERENCES `projet` (`id`);

--
-- Contraintes pour la table `task_flow_cards`
--
ALTER TABLE `task_flow_cards`
  ADD CONSTRAINT `FK91i7gym8vfyq83al3lyxjswlk` FOREIGN KEY (`cards_id`) REFERENCES `card` (`id`),
  ADD CONSTRAINT `FKp75sfpnvtq3urdgwn5moxaqsa` FOREIGN KEY (`task_flow_id`) REFERENCES `task_flow` (`id`);

--
-- Contraintes pour la table `validate_project_emp`
--
ALTER TABLE `validate_project_emp`
  ADD CONSTRAINT `FKcqi7tqdjb5dl5r6mgg4qbqh3d` FOREIGN KEY (`employee_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


CREATE TABLE IF NOT EXISTS `users` (
`id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `creationTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

INSERT INTO `users` (`id`, `email`, `name`, `creationTime`) VALUES
(1, 'affka@affka.ru', 'Vladimir Kozhin', '2015-02-04 10:30:15'),
(2, 'test@example.com', 'Test user', '2015-02-04 10:30:22');

ALTER TABLE `users` ADD PRIMARY KEY (`id`);
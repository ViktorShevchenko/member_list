-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Хост: localhost:3306
-- Время создания: Сен 11 2019 г., 11:05
-- Версия сервера: 10.2.26-MariaDB-log-cll-lve
-- Версия PHP: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `shevc101_wp-seo`
--

-- --------------------------------------------------------

--
-- Структура таблицы `tbl_sample`
--

CREATE TABLE `tbl_sample` (
  `id` int(128) NOT NULL,
  `first_name` varchar(128) NOT NULL,
  `second_name` varchar(128) NOT NULL,
  `email` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=cp1251;

--
-- Дамп данных таблицы `tbl_sample`
--

INSERT INTO `tbl_sample` (`id`, `first_name`, `second_name`, `email`) VALUES
(1, 'Viktor', 'Shevchenko', 'svnnsv@i.ua'),
(2, 'John', 'Doe', 'john.doe@gmail.com');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `tbl_sample`
--
ALTER TABLE `tbl_sample`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `tbl_sample`
--
ALTER TABLE `tbl_sample`
  MODIFY `id` int(128) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

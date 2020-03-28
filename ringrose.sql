-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Мар 24 2020 г., 17:07
-- Версия сервера: 5.6.43
-- Версия PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `ringrose`
--

-- --------------------------------------------------------

--
-- Структура таблицы `kulons`
--

CREATE TABLE `kulons` (
  `id` int(11) NOT NULL,
  `img` varchar(20) NOT NULL,
  `name` varchar(60) NOT NULL,
  `cost` int(11) NOT NULL,
  `metal` varchar(100) NOT NULL,
  `weight` varchar(11) NOT NULL,
  `sample` int(11) NOT NULL,
  `type` text NOT NULL,
  `ves` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `kulons`
--

INSERT INTO `kulons` (`id`, `img`, `name`, `cost`, `metal`, `weight`, `sample`, `type`, `ves`) VALUES
(1, 'img/kulon/kulon.png', 'серебрянный крест', 21000, 'серебро', '89459834', 925, 'тапазы', 34.98),
(2, 'img/kulon/kulon2.png', 'серебрянный кулон', 15000, 'серебро', '67894567', 925, 'нет', 14.89),
(3, 'img/kulon/kulon3.png', 'кулон с черныйм кругом', 10000, 'серебро', '45678934', 925, 'черные камушки', 76.98),
(4, 'img/kulon/kulon4.png', 'золотой кулон', 17000, 'серебро', '14583679', 925, 'золото', 15.7),
(5, 'img/kulon/kulon5.png', 'жемчужный кулон', 21000, 'серебро', '46794726', 925, 'жемчуг', 8.87),
(6, 'img/kulon/kulon6.png', 'золотой кулон', 15000, 'серебро', '56783456', 925, 'цветное стекло', 45),
(7, 'img/kulon/kulon7.png', 'алмазный кулон', 10000, 'серебро', '67900087', 925, 'алмаз', 87.65),
(8, 'img/kulon/kulon8.png', 'золотой кулон', 17000, 'золото', '15536567', 925, 'нет ', 15.98);

-- --------------------------------------------------------

--
-- Структура таблицы `podves`
--

CREATE TABLE `podves` (
  `id` int(11) NOT NULL,
  `img` varchar(100) NOT NULL,
  `text` varchar(60) NOT NULL,
  `cost` int(11) NOT NULL,
  `metal` varchar(100) NOT NULL,
  `weight` int(11) NOT NULL,
  `sample` int(11) NOT NULL,
  `type` text NOT NULL,
  `ves` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `podves`
--

INSERT INTO `podves` (`id`, `img`, `text`, `cost`, `metal`, `weight`, `sample`, `type`, `ves`) VALUES
(1, 'img/podves/podveska.png', 'подвезка с алмазом', 21000, 'серебро', 89550945, 925, 'алмаз', 8.98),
(2, 'img/podves/podves2.png', 'золотая подвеска', 15000, 'золото', 65748393, 525, 'алмаз', 14.89),
(3, 'img/podves/podves3.png', 'серебряная подвеска', 10000, 'серебро', 12345678, 925, 'нет ', 76.98),
(4, 'img/podves/podves4.png', 'золотая подвеска с алмазом', 17000, 'золото', 87654321, 925, 'алмаз', 5.56),
(5, 'img/podves/podves5.png', 'золотое колесо', 21000, 'золото', 13568745, 525, 'нет', 8.87),
(6, 'img/podves/podves6.png', 'золотая дудка', 15000, 'золото', 9876543, 925, 'нет ', 45),
(7, 'img/podves/podves7.png', 'синий жук', 10000, 'серебро', 17, 925, 'синий жук', 87.65),
(8, 'img/podves/podves8.png', 'золотые бабочки', 17000, 'золото', 17, 525, 'бабочки', 18.76);

-- --------------------------------------------------------

--
-- Структура таблицы `rings`
--

CREATE TABLE `rings` (
  `id` int(11) NOT NULL,
  `img` varchar(100) NOT NULL,
  `name` text NOT NULL,
  `cost` int(11) NOT NULL,
  `metal` text NOT NULL,
  `weight` int(11) NOT NULL,
  `sample` int(11) NOT NULL,
  `type` text NOT NULL,
  `ves` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `rings`
--

INSERT INTO `rings` (`id`, `img`, `name`, `cost`, `metal`, `weight`, `sample`, `type`, `ves`) VALUES
(1, 'img/rings/ring.png', 'кольцо из серебра с камнями', 21000, 'серебро', 39494959, 925, 'брылтанты', 16.56),
(3, 'img/rings/ring2.png', 'кольцо из серебра', 15000, 'серебро', 17958587, 925, 'брилиант', 8.98),
(5, 'img/rings/ring3.png', 'кольцо из черного метала', 10000, 'металл ', 4879865, 228, 'фианиты', 7.67),
(7, 'img/rings/ring4.png', 'кольцо из золото со вставкой', 17000, 'золото', 38980900, 525, 'фианиты', 6.14),
(8, 'img/rings/ring5.png', 'баткакольцо', 21000, 'золото', 17958587, 525, 'цыганская прелесть', 14.123),
(9, 'img/rings/ring6.png', 'кольцо', 15000, '', 98765432, 925, 'синякское кольцо', 45.567),
(10, 'img/rings/ring7.png', 'кольцо', 10000, 'серебро', 9898, 925, 'синякское кольцо', 44.98),
(11, 'img/rings/ring8.png', 'кольцо', 17000, 'серебро', 12345678, 925, 'сельский выебон', 19.76);

-- --------------------------------------------------------

--
-- Структура таблицы `sergi`
--

CREATE TABLE `sergi` (
  `id` int(11) NOT NULL,
  `img` varchar(100) NOT NULL,
  `name` varchar(60) NOT NULL,
  `cost` int(11) NOT NULL,
  `metal` varchar(100) NOT NULL,
  `weight` int(11) NOT NULL,
  `sample` int(11) NOT NULL,
  `type` text NOT NULL,
  `ves` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `sergi`
--

INSERT INTO `sergi` (`id`, `img`, `name`, `cost`, `metal`, `weight`, `sample`, `type`, `ves`) VALUES
(1, 'img/sergi/sergi.png', 'серьги с камнями', 21000, 'золото', 17958587, 525, 'фианиты', 9),
(2, 'img/sergi/sergi2.png', 'серьги с фианитами', 15000, 'серебро', 87654321, 925, 'топазы', 15),
(3, 'img/sergi/sergi3.png', 'серьги со вставками', 10000, 'золото', 17, 525, 'рубины', 6),
(4, 'img/sergi/sergi4.png', 'серьги с короной', 17000, 'серебро', 87560934, 925, 'изумруд', 10),
(5, 'img/sergi/sergi5.png', 'серьги с камнями', 21000, 'серебро', 87997755, 925, 'алмаз', 13),
(6, 'img/sergi/sergi6.png', 'серьги с изумрудами', 15000, 'золото', 98762864, 525, 'изумруд', 45),
(7, 'img/sergi/sergi7.png', 'синии серьги', 10000, 'серебро', 90506095, 925, 'синяя штука', 88),
(8, 'img/sergi/sergi8.png', 'арбузы', 17000, 'серебро', 12340987, 925, 'нет', 10);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `kulons`
--
ALTER TABLE `kulons`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `podves`
--
ALTER TABLE `podves`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `rings`
--
ALTER TABLE `rings`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `sergi`
--
ALTER TABLE `sergi`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `kulons`
--
ALTER TABLE `kulons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT для таблицы `podves`
--
ALTER TABLE `podves`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT для таблицы `rings`
--
ALTER TABLE `rings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT для таблицы `sergi`
--
ALTER TABLE `sergi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

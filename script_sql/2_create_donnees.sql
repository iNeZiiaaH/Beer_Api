-- Insertion dans la table Categories
INSERT INTO Categories (name)
VALUES
('Blonde'),
('Ambrée'),
('Brune'),
('IPA'),
('Stout'),
('Saison'),
('Pilsner'),
('Lager'),
('Wheat'),
('Porter');

-- Insertion dans la table Ingredients
INSERT INTO Ingredients (name, type)
VALUES
('Malt Pilsner', 'Malt'),
('Houblon Citra', 'Houblon'),
('Levure Ale', 'Levure'),
('Malt Cara', 'Malt'),
('Houblon Cascade', 'Houblon'),
('Levure Saison', 'Levure'),
('Malt Munich', 'Malt'),
('Houblon Amarillo', 'Houblon'),
('Levure Lager', 'Levure'),
('Malt Crystal', 'Malt');

-- Insertion dans la table Breweries
INSERT INTO Breweries (name, country)
VALUES
('Brasserie des Montagnes', 'France'),
('Bière de la Vallée', 'Belgique'),
('La Micro du Soleil', 'Canada'),
('L’Abbaye Dorée', 'Belgique'),
('Brasseurs de Provence', 'France'),
('BrewLab Artisan', 'États-Unis'),
('Cerveza de Oro', 'Mexique'),
('The Hop Haven', 'Angleterre'),
('Ale Masters', 'Écosse'),
('Fjord Brewing Co.', 'Norvège');

-- Insertion dans la table Users
INSERT INTO Users (first_name, email, password)
VALUES
('Jean', 'jean.dupont@example.com', 'password123'),
('Marie', 'marie.curie@example.com', 'radiation42'),
('Albert', 'albert.einstein@example.com', 'relativity21'),
('Simone', 'simone.de@example.com', 'existentialism'),
('Victor', 'victor.hugo@example.com', 'lesmiserables');

-- Insertion dans la table Beers
INSERT INTO Beers (name, description, abv, brewery_id, category_id)
VALUES
('Blonde des Montagnes', 'Bière blonde légère et fruitée.', 5.2, 1, 1),
('Triple d’Abbaye', 'Bière triple au goût puissant.', 9.5, 2, 2),
('IPA du Soleil', 'IPA avec notes d’agrumes.', 6.5, 3, 4),
('Lager Dorée', 'Lager douce et maltée.', 4.8, 4, 8),
('Stout des Highlands', 'Stout robuste avec saveurs de café.', 7.5, 5, 5),
('Pale Ale Tropicale', 'Bière rafraîchissante avec notes exotiques.', 5.0, 6, 4),
('Cuvée des Moines', 'Bière ambrée avec arômes caramélisés.', 7.0, 2, 2),
('Hoppy Sunrise', 'Bière houblonnée au goût frais.', 6.0, 7, 4),
('Porter Norvégienne', 'Porter avec notes de chocolat.', 8.0, 8, 5),
('Blanche des Fjords', 'Bière blanche légère.', 4.5, 9, 7);

-- Insertion dans la table Reviews
INSERT INTO Reviews (user_id, beer_id, rating, commentaire)
VALUES
(1, 1, 4, 'Très bonne bière, légère et agréable.'),
(2, 2, 5, 'Exceptionnelle, une vraie découverte.'),
(3, 3, 3, 'Goût trop amer pour moi.'),
(4, 4, 4, 'Bon compromis entre douceur et amertume.'),
(5, 5, 2, 'Trop forte pour mon goût.');

-- Insertion dans la table Favorites
INSERT INTO Favorites (user_id, beer_id)
VALUES
(1, 1),
(2, 3),
(3, 4),
(4, 5),
(5, 6);

-- Insertion dans la table Photos
INSERT INTO Photos (beer_id, url)
VALUES
(1, 'http://example.com/photos/blonde_des_montagnes.jpg'),
(2, 'http://example.com/photos/triple_abbaye.jpg'),
(3, 'http://example.com/photos/ipa_du_soleil.jpg'),
(4, 'http://example.com/photos/lager_doree.jpg'),
(5, 'http://example.com/photos/stout_highlands.jpg');

-- Insertion dans la table Beer_Ingredients
INSERT INTO Beer_Ingredients (beer_id, ingredient_id)
VALUES
(1, 1),  -- Blonde des Montagnes -> Malt Pilsner
(1, 2),  -- Blonde des Montagnes -> Houblon Citra
(2, 3),  -- Triple d'Abbaye -> Levure Ale
(3, 4),  -- IPA du Soleil -> Malt Cara
(3, 5),  -- IPA du Soleil -> Houblon Cascade
(4, 6);  -- Lager Dorée -> Levure Saison

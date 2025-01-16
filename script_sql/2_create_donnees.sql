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
('Porter'),
('Smoked'),
('Bock'),
('Barleywine'),
('Gose'),
('Sour'),
('Dubbel'),
('Tripel'),
('Quadrupel'),
('Rye'),
('Fruit Beer');

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
('Malt Crystal', 'Malt'),
('Malt Vienna', 'Malt'),
('Houblon Simcoe', 'Houblon'),
('Levure Wild', 'Levure'),
('Malt Chocolate', 'Malt'),
('Houblon Mosaic', 'Houblon'),
('Malt Pale Ale', 'Malt'),
('Houblon Galaxy', 'Houblon'),
('Levure Brettanomyces', 'Levure'),
('Malt Black Patent', 'Malt'),
('Houblon Nelson Sauvin', 'Houblon'),
('Houblon Saaz', 'Houblon'),
('Malt Special B', 'Malt'),
('Houblon Centennial', 'Houblon'),
('Levure Trappiste', 'Levure'),
('Malt Biscuit', 'Malt'),
('Houblon Chinook', 'Houblon'),
('Levure Kölsch', 'Levure');

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
('Fjord Brewing Co.', 'Norvège'),
('Hoppy Trails Brewery', 'Australie'),
('Cloudy Peaks Brewery', 'Nouvelle-Zélande'),
('River Bend Brewing Co.', 'Irlande'),
('Sunset Brews', 'Afrique du Sud'),
('Frosty Peaks Brewery', 'Islande'),
('Brewmaster’s Den', 'Allemagne'),
('Golden Fields Brewing', 'Pays-Bas'),
('Cervesa del Sol', 'Espagne'),
('Brasserie Artisanale du Nord', 'France'),
('The Barrel Works', 'Écosse'),
('Ironwood Brewery', 'Canada'),
('Mountain Crest Brewing', 'États-Unis'),
('Edelweiss Brews', 'Autriche'),
('Nordic Hops', 'Danemark'),
('Ocean Breeze Brewing', 'Portugal');

-- Insertion dans la table Users
INSERT INTO Users (first_name, email, password)
VALUES
('Jean', 'jean.dupont@example.com', 'password123'),
('Marie', 'marie.curie@example.com', 'radiation42'),
('Albert', 'albert.einstein@example.com', 'relativity21'),
('Simone', 'simone.de@example.com', 'existentialism'),
('Victor', 'victor.hugo@example.com', 'lesmiserables'),
('Emma', 'emma.watson@example.com', 'hermione7'),
('Noah', 'noah.smith@example.com', 'arkbuilder1'),
('Olivia', 'olivia.brown@example.com', 'liv4beer'),
('Liam', 'liam.jones@example.com', 'password321'),
('Sophia', 'sophia.taylor@example.com', 'sophierocks'),
('Isaac', 'isaac.newton@example.com', 'gravityrules'),
('Ada', 'ada.lovelace@example.com', 'computecode'),
('Charles', 'charles.darwin@example.com', 'evolutionist'),
('Rosalind', 'rosalind.franklin@example.com', 'dnagenius'),
('Alan', 'alan.turing@example.com', 'enigma123');

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
('Blanche des Fjords', 'Bière blanche légère.', 4.5, 9, 7),
('Amber Sunset', 'Bière ambrée douce et maltée.', 5.4, 11, 2),
('Cloudy IPA', 'IPA trouble avec des saveurs tropicales.', 6.8, 12, 4),
('Golden Lager', 'Lager claire et rafraîchissante.', 4.6, 13, 8),
('Midnight Stout', 'Stout profond avec des notes de cacao.', 7.0, 14, 5),
('Tropical Wheat', 'Bière de blé fruitée et légère.', 4.9, 15, 9),
('Smoky Porter', 'Porter riche avec des arômes fumés.', 8.2, 16, 10),
('Hazy Gose', 'Gose légèrement acide avec des saveurs citronnées.', 4.3, 17, 14),
('Barleywine Reserve', 'Barleywine intense et complexe.', 10.0, 18, 13),
('Vienna Gold', 'Bière maltée avec une touche épicée.', 5.8, 19, 12),
('Wild Saison', 'Saison rustique avec des notes épicées.', 6.2, 20, 6),
('Fruity Bliss', 'Bière aux fruits rouges et notes sucrées.', 4.7, 21, 19),
('Dubbel Heritage', 'Dubbel aux saveurs riches et maltées.', 6.9, 22, 16),
('Tripel Glory', 'Tripel dorée avec des notes épicées.', 8.5, 23, 17),
('Quadrupel Elite', 'Quadrupel intense et complexe.', 10.5, 24, 18),
('Rye Revolution', 'Bière au seigle avec une touche poivrée.', 6.4, 25, 20);

-- Insertion dans la table Reviews
INSERT INTO Reviews (user_id, beer_id, rating, commentaire)
VALUES
(1, 1, 4, 'Très bonne bière, légère et agréable.'),
(2, 2, 5, 'Exceptionnelle, une vraie découverte.'),
(3, 3, 3, 'Goût trop amer pour moi.'),
(4, 4, 4, 'Bon compromis entre douceur et amertume.'),
(5, 5, 2, 'Trop forte pour mon goût.'),
(6, 11, 5, 'Bière parfaite pour une soirée d’été.'),
(7, 12, 4, 'Tropicale et rafraîchissante, un régal.'),
(8, 13, 3, 'Bonne mais un peu trop légère à mon goût.'),
(9, 14, 5, 'Un stout comme je les aime, puissant et riche.'),
(10, 15, 4, 'Idéale pour les amateurs de bières de blé.'),
(11, 21, 5, 'Bière fruitée parfaite pour les amateurs de douceurs.'),
(12, 22, 4, 'Dubbel complexe et satisfaisante.'),
(13, 23, 5, 'Une tripel magnifique, bien équilibrée.'),
(14, 24, 5, 'Quadrupel exceptionnellement riche et complexe.'),
(15, 25, 4, 'Saveur unique grâce au seigle, très agréable.');

-- Insertion dans la table Favorites
INSERT INTO Favorites (user_id, beer_id)
VALUES
(1, 1),
(2, 3),
(3, 4),
(4, 5),
(5, 6),
(6, 11),
(7, 12),
(8, 13),
(9, 14),
(10, 15),
(11, 21),
(12, 22),
(13, 23),
(14, 24),
(15, 25);

-- Insertion dans la table Photos
INSERT INTO Photos (beer_id, url)
VALUES
(1, 'http://example.com/photos/blonde_des_montagnes.jpg'),
(2, 'http://example.com/photos/triple_abbaye.jpg'),
(3, 'http://example.com/photos/ipa_du_soleil.jpg'),
(4, 'http://example.com/photos/lager_doree.jpg'),
(5, 'http://example.com/photos/stout_highlands.jpg'),
(11, 'http://example.com/photos/amber_sunset.jpg'),
(12, 'http://example.com/photos/cloudy_ipa.jpg'),
(13, 'http://example.com/photos/golden_lager.jpg'),
(14, 'http://example.com/photos/midnight_stout.jpg'),
(15, 'http://example.com/photos/tropical_wheat.jpg'),
(21, 'http://example.com/photos/fruity_bliss.jpg'),
(22, 'http://example.com/photos/dubbel_heritage.jpg'),
(23, 'http://example.com/photos/tripel_glory.jpg'),
(24, 'http://example.com/photos/quadrupel_elite.jpg'),
(25, 'http://example.com/photos/rye_revolution.jpg');

-- Insertion dans la table Beer_Ingredients
INSERT INTO Beer_Ingredients (beer_id, ingredient_id)
VALUES
(1, 1),  -- Blonde des Montagnes -> Malt Pilsner
(1, 2),  -- Blonde des Montagnes -> Houblon Citra
(2, 3),  -- Triple d'Abbaye -> Levure Ale
(3, 4),  -- IPA du Soleil -> Malt Cara
(3, 5),  -- IPA du Soleil -> Houblon Cascade
(4, 6),  -- Lager Dorée -> Levure Saison
(11, 7), -- Amber Sunset -> Malt Vienna
(12, 8), -- Cloudy IPA -> Houblon Simcoe
(13, 9), -- Golden Lager -> Levure Brettanomyces
(14, 10),-- Midnight Stout -> Malt Black Patent
(15, 11),-- Tropical Wheat -> Houblon Nelson Sauvin
(15, 1), -- Tropical Wheat -> Malt Pilsner
(12, 2), -- Cloudy IPA -> Houblon Citra
(11, 4), -- Amber Sunset -> Malt Cara
(14, 3),  -- Midnight Stout -> Levure Ale
(21, 5),  -- Fruity Bliss -> Houblon Cascade
(22, 12), -- Dubbel Heritage -> Houblon Simcoe
(23, 13), -- Tripel Glory -> Levure Wild
(24, 14), -- Quadrupel Elite -> Malt Chocolate
(25, 15); -- Rye Revolution -> Houblon Mosaic

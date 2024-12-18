CREATE TABLE IF NOT EXISTS Categories (
    id_category SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS Ingredients (
    id_ingredient SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    type VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS Breweries (
    id_brewery SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS Users (
    id_user SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS Beers (
    id_beer SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    abv DECIMAL(4, 2) CHECK (abv >= 0 AND abv <= 20),
    brewery_id INT NOT NULL, 
    category_id INT, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (brewery_id) REFERENCES Breweries(id_brewery) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES Categories(id_category) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS Reviews (
    id_review SERIAL PRIMARY KEY,
    user_id INT NOT NULL, 
    beer_id INT NOT NULL,
    rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5), 
    commentaire TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id_user) ON DELETE CASCADE,
    FOREIGN KEY (beer_id) REFERENCES Beers(id_beer) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Favorites (
    id_favorite SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    beer_id INT NOT NULL, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id_user) ON DELETE CASCADE,
    FOREIGN KEY (beer_id) REFERENCES Beers(id_beer) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Photos (
    id_photo SERIAL PRIMARY KEY,
    beer_id INT NOT NULL, 
    url TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (beer_id) REFERENCES Beers(id_beer) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Beer_Ingredients (
    id_beer_ingredient SERIAL PRIMARY KEY,
    beer_id INT NOT NULL, 
    ingredient_id INT NOT NULL, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (beer_id) REFERENCES Beers(id_beer) ON DELETE CASCADE,
    FOREIGN KEY (ingredient_id) REFERENCES Ingredients(id_ingredient) ON DELETE CASCADE
);
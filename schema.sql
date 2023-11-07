DROP TABLE IF EXISTS `cs312-Order`;
DROP TABLE IF EXISTS `cs312-Art`;

-- Create tables

CREATE TABLE `cs312-Art` (
    ArtID INT NOT NULL AUTO_INCREMENT,
    Name VARCHAR(255) NOT NULL,
    CompletionDate DATE,
    Width INT,
    Height INT,
    Price DECIMAL(6,2) NOT NULL,
    Description VARCHAR(1024),
    CONSTRAINT Art_PK PRIMARY KEY (ArtID)
);

CREATE TABLE `cs312-Order` (
    ArtID INT NOT NULL,
    CustomerName VARCHAR(255) NOT NULL,
    CustomerNumber VARCHAR(22) NOT NULL,
    CustomerEmail VARCHAR(320) NOT NULL,
    CustomerAddress VARCHAR(255) NOT NULL,
    CONSTRAINT Order_PK PRIMARY KEY (ArtID),
    CONSTRAINT Order_Art_FK FOREIGN KEY (ArtID) REFERENCES `cs312-Art` (ArtID)
);

-- Insert data

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description)
VALUES ('Serene Landscape', '2023-12-15', 360, 240, 250.00, 'A tranquil landscape painting depicting a peaceful countryside scene with rolling hills and a serene lake.');

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description)
VALUES ('City Lights', '2024-01-23', 240, 180, 150.00, 'An evocative cityscape capturing the vibrant night lights of a bustling metropolis.');

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description)
VALUES ('Eternal Gaze', '2024-02-20', 300, 400, 300.00, 'A captivating portrait of a thoughtful gaze.');

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description)
VALUES ('Abstract Dreams', '2024-01-10', 480, 360, 350.00, 'A bold and vibrant abstract painting that invites viewers to interpret its unique patterns and colors.');

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description)
VALUES ('Fruit Basket', '2024-04-01', 160, 200, 75.00, 'A delightful still life painting featuring a colorful assortment of fruits.');

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description)
VALUES ('Coastal Serenity', '2024-03-02', 300, 240, 200.00, 'A calming seascape with waves gently caressing the shore.');

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description)
VALUES ('Rustic Barn', '2024-05-15', 220, 180, 175.00, 'A simple yet charming painting of an old, weathered barn in the countryside.');

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description)
VALUES ('Urban Alleyway', '2024-06-10', 320, 240, 220.00, 'A gritty depiction of an urban alleyway with graffiti-covered walls and hints of street life.');

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description)
VALUES ('Sunset Over Mountains', '2024-07-18', 400, 280, 275.00, 'A serene moment as the sun sets behind majestic mountains, casting a warm and peaceful glow.');

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description)
VALUES ('Abstract Fusion', '2024-06-05', 500, 400, 400.00, 'An abstract composition that explores the fusion of colors and shapes, leaving room for interpretation.');

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description)
VALUES ('Still Waters', '2024-08-12', 300, 220, 180.00, 'A tranquil lake scene with perfectly still waters reflecting the surrounding natural beauty.');

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description)
VALUES ('Gentle Breeze', '2024-09-03', 260, 200, 150.00, 'A soft breeze rustling through a field of wildflowers, capturing a moment of nature\'s tranquility.');

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description)
VALUES ('Industrial Landscape', '2024-10-22', 360, 260, 280.00, 'A depiction of an industrial landscape with factories and machinery working harmoniously.');

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description)
VALUES ('Morning Mist', '2024-11-15', 320, 240, 210.00, 'A serene early morning scene with mist rising over a tranquil countryside.');

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description)
VALUES ('Abstract Exploration', '2024-10-03', 480, 360, 350.00, 'An abstract painting that invites viewers to explore its intricate patterns and textures.');

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description)
VALUES ('Simplicity in Nature', '2024-12-05', 280, 220, 190.00, 'A simple yet beautiful portrayal of the natural world, emphasizing its understated elegance.');

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description)
VALUES ('Rural Charm', '2024-11-28', 400, 300, 230.00, 'A heartwarming representation of rural life, capturing the charm of a small, idyllic village.');

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description)
VALUES ('Sunrise Horizon', '2024-12-31', 360, 240, 260.00, 'A vibrant sunrise on the horizon, painting the sky with hues of orange and pink as a new day begins.');
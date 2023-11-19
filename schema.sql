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
    Image MEDIUMBLOB,
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

-- Insert data (no images included!)

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('A North East Headland', '2023-11-13', 750, 626, 255, 'TEMP', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('An English Cod', '2023-11-13', 750, 675, 270, 'TEMP', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('Château Noir', '2023-11-13', 750, 573, 155, 'TEMP', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('Madison Square, Snow', '2023-11-14', 750, 623, 205, 'TEMP', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('May Night', '2023-11-16', 690, 750, 335, 'TEMP', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('Moonlight', '2023-11-17', 750, 556, 225, 'TEMP', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('Obweebetuck', '2023-11-13', 750, 538, 115, 'TEMP', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('Old Factory', '2023-11-14', 750, 527, 385, 'TEMP', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('Oyster Sloop, Cos Cob', '2023-11-14', 690, 750, 55, 'TEMP', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('Palazzo da Mula, Venice', '2023-11-15', 750, 569, 225, 'TEMP', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('Peaches on a Plate', '2023-11-14', 750, 463, 200, 'TEMP', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('Place du Carrousel, Paris', '2023-11-18', 750, 622, 350, 'TEMP', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('Snow in New York', '2023-11-15', 601, 750, 115, 'TEMP', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('Still Life with Apples and Peaches', '2023-11-13', 750, 601, 250, 'TEMP', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('Still Life with Bottles and Fruit', '2023-11-18', 750, 749, 390, 'TEMP', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('Still Life with Milk Jug and Fruit', '2023-11-17', 750, 629, 310, 'TEMP', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('The Artist\'s Studio', '2023-11-14', 750, 614, 110, 'TEMP', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('The Bend in the Road', '2023-11-17', 604, 750, 305, 'TEMP', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('The Houses of Parliament', '2023-11-13', 750, 662, 335, 'TEMP', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('The Louvre, Afternoon, Rainy Weather', '2023-11-14', 750, 602, 320, 'TEMP', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('The Petition', '2023-11-13', 750, 602, 130, 'TEMP', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('The Seine', '2023-11-13', 750, 534, 185, 'TEMP', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('Vase of Flowers on a Mantelpiece', '2023-11-17', 611, 750, 260, 'TEMP', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('Vase of Flowers', '2023-11-18', 606, 750, 160, 'TEMP', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('Waterloo Bridge, Gray Day', '2023-11-17', 750, 484, 385, 'TEMP', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('Waterloo Bridge, London, at Dusk', '2023-11-17', 750, 482, 315, 'TEMP', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('Waterloo Bridge, London, at Sunset', '2023-11-15', 750, 528, 300, 'TEMP', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('Wild Olive Tree Roots, Valldemosa, Majorca', '2023-11-13', 750, 590, 95, 'TEMP', NULL);
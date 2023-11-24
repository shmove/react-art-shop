DROP TABLE IF EXISTS `cs312-Order`;
DROP TABLE IF EXISTS `cs312-Art`;

-- Create tables

CREATE TABLE `cs312-Art` (
    ArtID INT NOT NULL AUTO_INCREMENT,
    Name VARCHAR(255) NOT NULL,
    CompletionDate DATE NOT NULL,
    Width INT NOT NULL,
    Height INT NOT NULL,
    Price DECIMAL(6,2) NOT NULL,
    Description VARCHAR(10240) NOT NULL,
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
VALUES ('A North East Headland', '2023-11-13', 750, 626, 255, 'We are working to make this description available as soon as possible.', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('An English Cod', '2023-11-13', 750, 675, 270, 'We are working to make this description available as soon as possible.', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('Château Noir', '2023-11-13', 750, 573, 155, 'We look across a forested ravine painted in deep greens and blues at a terracotta-orange building at the top of a hill at the center of this nearly square, loosely painted landscape. Spring and moss-green trees grow along the ravine in front of us and up the left side of the canvas. Shadows within the densely forested area are painted with slate and royal blue with touches of plum and lavender purple, and the blue continues into the sky in the upper right quadrant of the composition. The sky is visible through the pointed, arched windows on the upper level of the building, giving the impression that it might be incomplete or in ruins. The building is made up of two stories over a protruding base, which could be a fortress-like structure below or a cliff face. Loose, thick brushstrokes are visible throughout.', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('Madison Square, Snow', '2023-11-14', 750, 623, 205, 'We are working to make this description available as soon as possible.', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('May Night', '2023-11-16', 690, 750, 335, 'Moonlight bathes a grassy lawn, where a woman walks to a building with columns and a triangular roof in this vertical painting. To our left of center, the building glows white. The rest of the landscape is loosely painted with blended strokes, giving it a soft look and making some details difficult to make out. To our right, the woman has brown hair and wears a long white dress that trails on the shadow-dappled lawn. She approaches the front of the building, which has four steps as wide as the building that lead up to four columns. A form at the base of one of the columns suggests another woman wearing a full, white dress sitting at the top of the stairs. A half-round window, flat across the bottom, is dark in the center of the triangular pediment above. The left side of the building is mostly hidden behind tall bushes and a slender tree like a crape myrtle, which reaches off the top edge of the canvas. A dark orange glow is visible from a side window between the bushes, and soft yellow-white light reflects on the backs of the columns and the seated person at the front of the building. Dark blue-green trees stand beyond the building on the right, where a large flowering horse-chestnut tree there dominates the upper right corner of the painting. The sky is clear ocean blue with a handful of stars that show through. The paint is thinly applied so the texture of the canvas shows through in some areas. The artist signed and dated the painting in black in the lower left corner, “W. L. Metcalf 06.”', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('Moonlight', '2023-11-17', 750, 556, 225, 'We are working to make this description available as soon as possible.', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('Obweebetuck', '2023-11-13', 750, 538, 115, 'We are working to make this description available as soon as possible.', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('Old Factory', '2023-11-14', 750, 527, 385, 'We are working to make this description available as soon as possible.', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('Oyster Sloop, Cos Cob', '2023-11-14', 690, 750, 55, 'We are working to make this description available as soon as possible.', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('Palazzo da Mula, Venice', '2023-11-15', 750, 569, 225, 'Painted almost entirely in tones of topaz, lapis, and sky blue, the façade of a building abutting a waterway fills this horizontal painting. Brushstrokes are visible throughout and they blend to make the scene appear hazy. The top two-thirds of this painting shows the front of a building with two stories of rows of pointed, arched windows. Two long, low boats, gondolas, are pulled up side-by-side to one of the arched openings at the water level of the canal, to our right. A few touches of amethyst purple and mauve pink delineate some of the architectural features and shadows amid a field of denim and pale blue. The water below is painted with short, horizontal strokes to create a shimmering effect. The building’s reflection is captured with touches of emerald and cool green against the blue water. The artist signed and dated the work with cobalt-blue paint in the lower left: “Claude Monet 1908.”', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('Peaches on a Plate', '2023-11-14', 750, 463, 200, 'We are working to make this description available as soon as possible.', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('Place du Carrousel, Paris', '2023-11-18', 750, 622, 350, 'We look down onto a plaza with a sliver of a tall building rising along the left edge of the painting, a row of verdant, green trees to our right, and a row of buildings enclosing the space in the distance in this nearly square landscape painting. The peanut-brown building to our left nearly reaches the top edge of the canvas. It has three oversized, tall stories under a high, sloping roof with a slender chimney. A promenade with carriages runs in front of the tall building. In the plaza closer to us but tiny in scale, people gather in small and large groups, along the bottom edge of the composition. They are painted with dabs and short strokes of cobalt blue, butter and golden yellow, brick red, black, and white. The trees create a diagonal line running from the lower right corner into the scene, along the edge of the plaza to our right. Beyond the plaza and trees, the corners of a formal garden with sand-white walking paths stretch back to the row of buildings in the distance, which come halfway up the painting. That long line of buildings is painted with tones of light brown with rows of tall, narrow windows. The roofs are slate gray, and several cupolas and towers are spaced along its length. The buildings span the width of the painting and disappear behind the tall building to our left. Loosely painted, white, puffy clouds float across the ice-blue sky above. The artist signed and dated the work with brown paint in the lower left corner: “C. Pissarro. 1900.”', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('Snow in New York', '2023-11-15', 601, 750, 115, 'A snowy street with a horse and carriage is flanked to each side by tall buildings in this vertical painting. The overcast scene is loosely painted with visible brushstrokes throughout, so some details are difficult to make out. The buildings to each side are painted in tones of coffee and earth brown along the street, and oatmeal brown and slate gray for the buildings farther from us. Two-story houses with steps leading down to the street line the composition to each side, and the taller buildings beyond stretch off the top edge of the canvas. Closest to us and to our right, the horse and carriage move away from us. Painted with a few strokes in black, golden yellow, and crimson red, people walk or stand along both sides of the street. A single lamppost stands about halfway back along the street to our left. The globe dangles from the curved top of the lamppost. The snow is painted in tones of ivory and cream white. In the distance, the sky between the buildings is parchment brown. The artist signed and dated the painting in the lower left corner, “Robert Henri Mar 5 1902.”', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('Still Life with Apples and Peaches', '2023-11-13', 750, 601, 250, 'About a dozen rust-orange and golden yellow apples and peaches are arranged on a white plate next to white and floral-patterned cloths nestled around a white pitcher and bowl, all on a wood tabletop that tilts toward us in this nearly square still life painting. A curtain patterned with royal blue, olive green, and beige falls along or near the back wall of the room and rests on the table to our left. The white pitcher is painted loosely with the suggestion of harvest-gold and pale lilac-purple flowers, and it sits amid the pooling folds of the curtain to our left. The white tablecloth is bunched under and next to it to our right, at the middle of the composition. The fruit is arranged on and around a white plate next to the tablecloth. A tall bowl with fluted sides and a ruffled, scalloped rim sits behind the fruit, near the right edge of the table. The curving skirt of the table reaches nearly to the bottom edge of the canvas. All the objects in the painting are outlined with dark blue and the shadows are painted with patches of spruce and cobalt blue.', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('Still Life with Bottles and Fruit', '2023-11-18', 750, 749, 390, 'We are working to make this description available as soon as possible.', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('Still Life with Milk Jug and Fruit', '2023-11-17', 750, 629, 310, 'We are working to make this description available as soon as possible.', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('The Artist\'s Studio', '2023-11-14', 750, 614, 110, 'We face a wall lined with furniture to either side of a tall window that looks out onto buildings in this almost square painting. The scene is painted with blended and broad strokes, which makes our view a little blurry so many details are indistinct. The walls are tan with a thin, dark blue line above a wide band of lighter blue along the bottom of the wall. The window is in the center of the wall opposite us. A teal-blue curtain hangs along its right, and sheer, artic-blue drapes are parted and fastened to the wall on each side. The view out the window shows a few brightly lit, pale blue and yellow buildings with gray roofs. Under the window, a light wood table is scattered with objects, difficult to identify, and one pale turquoise square that could be a painting. More objects are cluttered on the dark wood bureau to our left and a round table closer to us, which is cut off by the bottom edge of the canvas. A delicate straw-colored easel holding a small canvas stands just beyond the round table. A girl sits in the lower right corner of the composition, and she is cropped by the right and bottom edges. Her skin is pale and tinged with smoky blue. She wears a wreath in her hair, presumably of flowers, and her long dress and the bed or chair on which she sits blend together in tones of navy, spruce blue, and forest green. The artist signed and dated the lower left, “1900 Bonnard.”', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('The Bend in the Road', '2023-11-17', 604, 750, 305, 'A road or path curves away from us, past a tall formation, perhaps rocks, to our left, and into a valley filled with trees and a low hill beyond in this stylized, vertical landscape. The painting is created almost entirely with patches of vibrant colors mostly in burnt orange, peach, salmon pink, cobalt and sky blue, and lime and spring green. Most of the patches are applied with visible vertical strokes. Areas of unpainted canvas create white patches, especially on and around the path in front of us. The tall formation to our left is painted mostly in oranges and pinks. The trees in the valley are painted entirely with blues and greens, and the low hill enclosing the scene in the distance comes about three-quarters of the way up the canvas. The sky above is blocked in with pale aquamarine blue and a few touches of shell pink along the horizon.', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('The Houses of Parliament, Sunset', '2023-11-13', 750, 662, 335, 'A row of spire-like structures of different heights is silhouetted in azure blue against a soft pink, yellow, peach, and lavender-purple sunset and reflected in a rippling river in this nearly square landscape painting. Along the horizon, the buildings stretch from our right, almost fully across the canvas, and are painted with vertical brushstrokes in cool shades of blue. The sky behind the towers seems hazy with intermingling, pastel-colored clouds. The buildings are reflected in the river, which fills the bottom third of the painting. The surface of the water is painted with short, horizontal brushstrokes in azure blue for the buildings, and apricot, rose, and marigold orange for the sky’s reflection. A streak and smudge of olive-green paint on the water represents a person in a boat near the center of the painting. The artist signed and dated the work in the same olive color at the lower right: “Claude Monet 1903.”', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('The Louvre, Afternoon, Rainy Weather', '2023-11-14', 750, 602, 320, 'From high up, we look down and out at a river with seven ferries and barges, the waterway lined with buildings on the bank to our right, in this loosely painted, horizontal landscape. Dashes of muted blue, fern green, and tan create the rippling surface of the river, which fills most of the bottom half of the painting. A dark tugboat chugs out of the scene near the bottom center of the composition, and the other vessels create diagonals along the river, angled down toward the bottom right corner. Closer to us in the lower left corner of the painting, a platform edge with a railing juts out to or over the water. At least six people stand on the platform alone or in pairs. They are loosely painted with touches of black, gray, yellow, plum purple, and peach. The platform itself is painted with swipes of sky blue, oatmeal brown, butter yellow, and rose pink. Each person creates a reflection in the surface of the platform, suggesting it is wet, perhaps with rain. The spiky branches of a row of trees along the far side of the platform are sharp against the landscape beyond. The buildings on the far bank are several stories high and lined with windows. Buildings farther in the distance have triangular rooflines or domes, which become slate blue along the hazy horizon. An arched bridge with a flat deck spans the river about halfway back along the river as we see it. In the top half of the picture, fog-gray and cream-white clouds fill the sky with patches of hazy powder blue showing through. The artist signed and dated the painting in sable brown in the lower left corner, “C. Pissarro. 1900.”', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('The Petition', '2023-11-13', 750, 602, 130, 'We are working to make this description available as soon as possible.', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('The Seine', '2023-11-13', 750, 534, 185, 'We are working to make this description available as soon as possible.', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('Vase of Flowers on a Mantelpiece', '2023-11-17', 611, 750, 260, 'We are working to make this description available as soon as possible.', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('Vase of Flowers', '2023-11-18', 606, 750, 160, 'We are working to make this description available as soon as possible.', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('Waterloo Bridge, Gray Day', '2023-11-17', 750, 484, 385, 'We are working to make this description available as soon as possible.', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('Waterloo Bridge, London, at Dusk', '2023-11-17', 750, 482, 315, 'An arched bridge faintly materializes in a haze of soft turquoise blue and mint green in this horizontal landscape painting. The bridge has four arches under a flat deck, and it extends off each side of the canvas. Running across the middle of the composition, it angles slightly away from us to our right. The bridge is painted in strokes of slate blue and muted lavender purple, with darker shades on the shadowed undersides of the arches. Touches of rose pink and white along the deck suggest lights moving across the bridge. The water below is sky blue and seafoam green. A few vertical swipes of teal blue in the background suggest towers or tall buildings in the distance on the opposite shore. The sky above is painted with long strokes of lime green and robin’s egg blue. The artist signed the painting with cobalt blue in the lower right corner, “Claude Monet.”', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('Waterloo Bridge, London, at Sunset', '2023-11-15', 750, 528, 300, 'We look across a river at a bridge that spans the center of this horizontal landscape, which is painted entirely with broad, visible brushstrokes in pastel colors. The straight deck of the bridge crosses the center of the composition but angles slightly away from us as it moves to our right. The four low arches of the bridge are painted with cotton candy pink and pale apricot. The sky above is painted loosely with light aquamarine blue and watery turquoise. A few vertical strokes of paint over the bridge suggests buildings along the riverbank beyond. The bridge is reflected in the water below so the blue, green, orange, and pink swirl together. The artist signed the painting in violet-purple letters in the lower right corner: “Claude Monet.”', NULL);

INSERT INTO `cs312-Art` (Name, CompletionDate, Width, Height, Price, Description, Image)
VALUES ('Wild Olive Tree Roots, Valldemosa, Majorca', '2023-11-13', 750, 590, 95, 'We are working to make this description available as soon as possible.', NULL);
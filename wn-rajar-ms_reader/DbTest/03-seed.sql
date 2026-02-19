-- Jeu de données de test
INSERT INTO writer.t_categories (title) VALUES
('Culture'),
('Technologie'),
('Intelligence Artificielle'),
('Transport'),
('Sport'),
('Science'),
('Économies'),
('Santé'),
('Politique'),
('Environnement');

INSERT INTO writer.t_articles (title, subtitle, subhead, body, publish_date, category_id) VALUES
(
    'Les avancées de l''intelligence artificielle en 2025',
    'Une révolution technologique en marche',
    'L''IA continue de transformer notre quotidien avec des innovations majeures dans tous les secteurs.',
    'L''année 2025 marque un tournant décisif dans le développement de l''intelligence artificielle. Les modèles de langage atteignent désormais des niveaux de compréhension et de génération de texte inégalés. Dans le secteur de la santé, l''IA permet de diagnostiquer des maladies avec une précision remarquable. Les entreprises adoptent massivement ces technologies pour optimiser leurs processus.',
    '2025-12-18 10:00:00',
    3
),
(
    'Changement climatique : les nouvelles mesures européennes',
    'L''UE renforce ses engagements environnementaux',
    'Face à l''urgence climatique, l''Union européenne adopte un nouveau plan ambitieux pour réduire les émissions.',
    'La Commission européenne a présenté ce matin un ensemble de mesures visant à accélérer la transition écologique. Parmi les points clés : l''interdiction progressive des véhicules thermiques, le développement massif des énergies renouvelables et la création d''un fonds de soutien pour les industries en reconversion. Ces mesures devraient permettre d''atteindre la neutralité carbone d''ici 2050.',
    '2025-12-17 14:30:00',
    2
);
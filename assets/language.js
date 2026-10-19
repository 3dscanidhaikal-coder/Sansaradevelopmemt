'use strict';
// English source text is retained so switching language never replaces controls.
const russianText = Object.fromEntries(`
Floor plan|Планировка
A closer look at the layout.|Подробнее о планировке.
Floor plan coming soon|Планировка скоро появится
The detailed layout will be added here.|Здесь будет размещена подробная планировка.

A valid passport is the only document required to begin the property purchase process.|Для начала процесса покупки недвижимости необходим только действующий паспорт.
We guide clients through every stage of the transaction and assist with preparing and completing all necessary documentation.|Мы сопровождаем клиентов на каждом этапе сделки и помогаем подготовить и оформить всю необходимую документацию.

03 / PROJECTS HIGHLIGHT|03 / ИЗБРАННЫЕ ПРОЕКТЫ
Two phases.|Два этапа.
One shared vision.|Единое видение.
Explore Solvyn City’s villas, apartments, and penthouses.|Откройте для себя виллы, апартаменты и пентхаусы Solvyn City.
Find your place in contemporary island living.|Найдите своё место в современной островной жизни.
Villas and apartments in Bukit, Bali.|Виллы и апартаменты на Буките, Бали.
Villas, studio apartments, and penthouses in Bukit, Bali.|Виллы, апартаменты-студии и пентхаусы на Буките, Бали.

Leasehold terms|Условия аренды
23+ years, with a guaranteed 25-year leasehold extension at a fixed price.|23+ года с гарантированным продлением аренды на 25 лет по фиксированной цене.
80 years.|80 лет.
Leasehold terms depend on the project phase. Phase 1 offers 23+ years, with a guaranteed 25-year leasehold extension at a fixed price. Phase 2 offers 80 years. This grants owners a long-term right to use the property and supports long-term ownership planning.|Условия leasehold зависят от этапа проекта. Phase 1: 23+ года с гарантированным продлением аренды на 25 лет по фиксированной цене. Phase 2: 80 лет. Это предоставляет владельцам долгосрочное право пользования недвижимостью и возможность долгосрочного планирования.
Innovative water purification system|Инновационная система очистки воды
Innovative water purification system: show details|Инновационная система очистки воды: подробнее
An innovative water purification system designed to support water quality throughout the development. Ask our team for the system specifications and maintenance details.|Инновационная система очистки воды для поддержания качества воды на территории комплекса. Уточните у нашей команды характеристики системы и условия обслуживания.

Melasti Beach|Пляж Меласти
Two-bedroom penthouse|Пентхаус с двумя спальнями
2 balconies · 3 penthouses|2 балкона · 3 пентхауса
109 m² · 2 bedrooms · 2 balconies|109 м² · 2 спальни · 2 балкона
A 109 m² two-bedroom penthouse at Solvyn City Phase 2, featuring a kitchen-living room, two bathrooms plus a guest WC and two balconies. This residence type comprises 3 penthouses.|Пентхаус площадью 109 м² с двумя спальнями в Solvyn City Phase 2: кухня-гостиная, 2 ванные комнаты и гостевой санузел, 2 балкона. Количество пентхаусов этого типа — 3.
Studio apartments|СТУДИЯ апартаменты
Studio|Студия
34.6 m² · Studio|34,6 м² · Студия
34.6 m² · Studio · Balcony|34,6 м² · Студия · Балкон
Balcony · 78 apartments|Балкон · 78 апартаментов
Studio apartments at Solvyn City Phase 2 offer 34.6 m², with a spacious bedroom and seating area, one bathroom and a balcony. This residence type comprises 78 apartments.|Апартаменты-студии площадью 34,6 м² в Solvyn City Phase 2: просторная спальня с зоной отдыха, ванная комната и балкон. Количество апартаментов этого типа — 78.
11.7 m² private pool · 1 villa|Частный бассейн 11,7 м² · 1 вилла
A 121 m² three-bedroom villa at Solvyn City Phase 2, arranged over two floors. The layout includes a kitchen-living room, three bathrooms plus a guest WC, and a terrace with a relaxation area. An 11.7 m² private pool and an ocean view complete the residence. This residence type comprises 1 villa.|Вилла площадью 121 м² с 3 спальнями в Solvyn City Phase 2, расположенная на 2 этажах. Кухня-гостиная, 3 ванные комнаты и гостевой санузел, терраса с зоной отдыха, частный бассейн площадью 11,7 м² и вид на океан. Количество вилл этого типа — 1.
3 + guest WC|3 + гостевой санузел
12 m² lower + 12.2 m² upper|12 м² на нижнем уровне + 12,2 м² на верхнем
Two private pools · 7 villas|Два частных бассейна · 7 вилл
167 m² · 3 bedrooms · Two private pools|167 м² · 3 спальни · Два частных бассейна
A 167 m² three-bedroom villa at Solvyn City Phase 2, arranged over three floors. The layout includes a kitchen-living room, three bathrooms plus a guest WC, a balcony and a terrace with a relaxation area. Two private pools provide 12 m² on the lower level and 12.2 m² on the upper level, with an ocean view. This residence type comprises 7 villas.|Вилла площадью 167 м² с 3 спальнями в Solvyn City Phase 2, расположенная на 3 этажах. Кухня-гостиная, 3 ванные комнаты и гостевой санузел, балкон, терраса с зоной отдыха, бассейн на нижнем уровне площадью 12 м², бассейн на верхнем уровне площадью 12,2 м² и вид на океан. Количество вилл этого типа — 7.
12.4 m² · upper level|12,4 м² · верхний уровень
12.4 m² private pool · 31 villas|Частный бассейн 12,4 м² · 31 вилла
A 109 m² two-bedroom villa at Solvyn City Phase 2, arranged over two floors. The layout includes a kitchen-living room, two bathrooms plus a guest WC, and a terrace with a relaxation area. A 12.4 m² private pool sits on the upper level, with an ocean view. This residence type comprises 31 villas.|Вилла площадью 109 м² с 2 спальнями в Solvyn City Phase 2, расположенная на 2 этажах. Кухня-гостиная, 2 ванные комнаты и гостевой санузел, терраса с зоной отдыха, бассейн на верхнем уровне площадью 12,4 м² и вид на океан. Количество вилл этого типа — 31.
One-bedroom villa|Вилла с одной спальней
47.7 m² · 1 bedroom|47,7 м² · 1 спальня
7.5 m² private pool · 14 villas|Частный бассейн 7,5 м² · 14 вилл
A 47.7 m² one-bedroom villa at Solvyn City Phase 2, with a spacious bedroom, one bathroom and a kitchen-living room. A terrace with a relaxation area, a 7.5 m² private pool and an ocean view complete the layout. This residence type comprises 14 villas.|Вилла площадью 47,7 м² с одной спальней в Solvyn City Phase 2. Просторная спальня, ванная комната, кухня-гостиная, терраса с зоной отдыха, частный бассейн площадью 7,5 м² и вид на океан. Количество вилл этого типа — 14.
Two-bedroom villa · Type 1|Вилла с 2 спальнями · Тип 1
11.7 m² private pool · 11 villas|Частный бассейн 11,7 м² · 11 вилл
2 + guest WC|2 + гостевой санузел
11.7 m² · lower level|11,7 м² · нижний уровень
A 104 m² two-bedroom villa at Solvyn City Phase 2, arranged over two floors. The layout includes two bathrooms plus a guest WC, a kitchen-living room and a terrace with a relaxation area. An 11.7 m² private pool sits on the lower level, with an ocean view. This residence type comprises 11 villas.|Вилла площадью 104 м² с 2 спальнями в Solvyn City Phase 2, расположенная на 2 этажах. Включает 2 ванные комнаты и гостевой санузел, кухню-гостиную, террасу с зоной отдыха, бассейн на нижнем уровне площадью 11,7 м² и вид на океан. Количество вилл этого типа — 11.
Villa type 1 at Solvyn City Phase 1 offers 101 m², 2 bedrooms, 3 bathrooms and 2 floors. The layout includes a kitchen-living room, BBQ area, ocean view and a 15 m² private pool. This residence type comprises 36 villas.|Villa type 1 в Solvyn City Phase 1: 101 м², 2 спальни, 3 ванные комнаты и 2 этажа. Кухня-гостиная, зона BBQ, вид на океан и частный бассейн площадью 15 м². Количество вилл этого типа — 36.
15 m² private pool · 36 villas|Частный бассейн 15 м² · 36 вилл
Villa type 2 at Solvyn City Phase 1 offers 129 m², 3 bedrooms, 4 bathrooms and 2 floors. The layout includes a kitchen-living room, BBQ area, ocean view and a 15 m² private pool. This residence type comprises 20 villas.|Villa type 2 в Solvyn City Phase 1: 129 м², 3 спальни, 4 ванные комнаты и 2 этажа. Кухня-гостиная, зона BBQ, вид на океан и частный бассейн площадью 15 м². Количество вилл этого типа — 20.
Villa type 3 at Solvyn City Phase 1 offers 234 m² including rooftop, 3 bedrooms, 4 bathrooms and 3 floors. The layout includes a kitchen-living room, BBQ area, ocean view and a 18 m² private pool. This residence type comprises 8 villas.|Villa type 3 в Solvyn City Phase 1: 234 м² с руфтопом, 3 спальни, 4 ванные комнаты и 3 этажа. Кухня-гостиная, зона BBQ, вид на океан и частный бассейн площадью 18 м². Количество вилл этого типа — 8.
15 m² private pool · 20 villas|Частный бассейн 15 м² · 20 вилл
18 m² private pool · 8 villas|Частный бассейн 18 м² · 8 вилл
234 m² including rooftop · 3 bedrooms|234 м² с руфтопом · 3 спальни
18 m² private pool|Частный бассейн 18 м²
Communal pool · Balcony · Parking · Ocean view|Общий бассейн · Балкон · Парковка · Вид на океан
A 40 m² apartment at Solvyn City Phase 1 with one bedroom, one bathroom and a balcony. The residence includes parking, access to a shared pool and an ocean view.|Апартаменты площадью 40 м² в Solvyn City Phase 1: 1 спальня, 1 ванная комната и балкон. Включены парковка, доступ к общему бассейну и вид на океан.
A 50 m² apartment at Solvyn City Phase 1 with one bedroom, one bathroom and a balcony. The residence includes parking, access to a shared pool and an ocean view.|Апартаменты площадью 50 м² в Solvyn City Phase 1: 1 спальня, 1 ванная комната и балкон. Включены парковка, доступ к общему бассейну и вид на океан.
40 m² · 1 bedroom · Communal pool|40 м² · 1 спальня · Общий бассейн
50 m² · 1 bedroom · Communal pool|50 м² · 1 спальня · Общий бассейн
Space to unwind.|Пространство для отдыха.
Room to feel at home.|Место, где вы дома.
Explore thoughtfully arranged apartments with space for the everyday moments that matter.|Откройте для себя продуманные апартаменты, где есть место для важных повседневных моментов.
Solvyn City Phase 1.|Solvyn City Phase 1.
A more private retreat.|Ваше личное уединение.
Discover private villas and apartments, with room to relax and settle into life in Bali.|Откройте для себя частные виллы и апартаменты для отдыха и неспешной жизни на Бали.
Solvyn City.|Solvyn City.
A place to connect.|Место для общения.
Explore a collection of residences where contemporary spaces meet the rhythm of island life.|Откройте коллекцию резиденций, где современные пространства сочетаются с ритмом островной жизни.
02 / DISCOVER SOLVYN CITY|02 / ОТКРОЙТЕ SOLVYN CITY
Pool & social spaces|Бассейн и зоны отдыха
Solvyn City gallery|Галерея Solvyn City
Previous Solvyn City image|Предыдущее изображение Solvyn City
Next Solvyn City image|Следующее изображение Solvyn City
Solvyn Restaurant|Solvyn Restaurant
Solvyn Cafe|Solvyn Cafe
Solvyn Hall|Solvyn Hall
Solvyn Spa|Solvyn Spa
Solvyn River Surf|Solvyn River Surf
Good food.|Хорошая еда.
Time well spent.|Время с удовольствием.
A place to gather around the table, share flavours and enjoy unhurried moments together.|Место, где можно собраться за столом, открыть новые вкусы и провести время вместе без спешки.
Your daily pause.|Ваша ежедневная пауза.
An easy island rhythm.|Неспешный ритм острова.
From a morning coffee to an afternoon conversation, a welcoming space for the little rituals of everyday life.|От утреннего кофе до дневных бесед — уютное пространство для маленьких повседневных ритуалов.
Come together.|Собирайтесь вместе.
Make it memorable.|Создавайте воспоминания.
A dedicated setting for celebrations, gatherings and the occasions that bring people closer.|Особое пространство для праздников, встреч и событий, которые сближают людей.
Slow down.|Замедлитесь.
Return to yourself.|Вернитесь к себе.
A quieter side of Solvyn City, with space to step away from the everyday and make time for wellbeing.|Тихая сторона Solvyn City, где можно отвлечься от повседневных забот и уделить время себе.
Find your flow.|Найдите свой ритм.
Feel the energy.|Почувствуйте энергию.
A signature surf experience at the heart of the project, bringing movement and a new rhythm to island life.|Особое пространство для сёрфинга в центре проекта, наполняющее островную жизнь движением и новым ритмом.
Villas and apartments in Bukit. Surf, wellness and spaces to come together.|Виллы и апартаменты в Буките. Сёрфинг, забота о себе и пространства для встреч.
Apartment|Апартаменты
Villa 101|Вилла 101
Explore more|Подробнее
Explore apartment|Посмотреть апартаменты
Explore villa|Посмотреть виллу
Explore Solvyn City Apartment|Посмотреть апартаменты Solvyn City
Explore Solvyn City Villa 101|Посмотреть виллу 101 в Solvyn City
SOLVYN CITY / RESIDENCES|SOLVYN CITY / РЕЗИДЕНЦИИ
40 m² · 1 bedroom · Communal pool|40 м² · 1 спальня · Общий бассейн
101 m² · 2 bedrooms · Private pool|101 м² · 2 спальни · Частный бассейн
A one-bedroom apartment at Solvyn City, with space for everyday living.|Апартаменты с одной спальней в Solvyn City и пространством для повседневной жизни.
A two-bedroom villa at Solvyn City, with a private pool and room to unwind.|Вилла с двумя спальнями в Solvyn City, частным бассейном и пространством для отдыха.
Solvyn City Phase 1|Solvyn City — Фаза 1
Solvyn City Phase 2|Solvyn City — Фаза 2
Explore Solvyn City Phase 1|Подробнее о Solvyn City — Фаза 1
Explore Solvyn City Phase 2|Подробнее о Solvyn City — Фаза 2
Phase 1.|Фаза 1.
Phase 2.|Фаза 2.
SOLVYN CITY / BUKIT, BALI|SOLVYN CITY / БУКИТ, БАЛИ
Three villa layouts. One place to call home.|Три планировки вилл. Одно место, которое можно назвать домом.
Apartments, penthouses and villas. Find your space in Solvyn City.|Апартаменты, пентхаусы и виллы. Найдите своё пространство в Solvyn City.
All projects ↗|Все проекты ↗
3 residence types|3 типа резиденций
5 residence types|5 типов резиденций
Apartment + penthouse|Апартаменты + пентхаус
Apartments & penthouses|Апартаменты и пентхаусы
March 2027|Март 2027
Villa 104|Вилла 104
Villa 109|Вилла 109
Villa 121|Вилла 121
Villa 129|Вилла 129
Villa 153|Вилла 153
Villa 167|Вилла 167
Previous banner|Предыдущий баннер
Next banner|Следующий баннер
Pause banner slideshow|Приостановить показ баннеров
Play banner slideshow|Продолжить показ баннеров

OUR RESIDENCES|НАШИ РЕЗИДЕНЦИИ
Space to belong.|Место, где вы дома.
Room to live.|Пространство для жизни.
Discover residences, private villas and apartment layouts in Bali.|Откройте резиденции, частные виллы и планировки апартаментов на Бали.
Explore residences|Смотреть резиденции
View residence|Подробнее
Villas|Виллы
Apartments & rooms|Апартаменты и комнаты
Residence categories|Категории резиденций
01 / RESIDENCES|01 / РЕЗИДЕНЦИИ
Our collections.|Наши коллекции.
02 / VILLAS|02 / ВИЛЛЫ
YOUR PRIVATE RETREAT|ВАШЕ ЛИЧНОЕ ПРОСТРАНСТВО
A place of your own.|Ваш собственный дом.
03 / APARTMENTS & ROOMS|03 / АПАРТАМЕНТЫ И КОМНАТЫ
CONSIDERED EVERYDAY LIVING|ПРОДУМАННАЯ ПОВСЕДНЕВНОСТЬ
Room for the everyday.|Пространство для каждого дня.
Explore one-bedroom apartment layouts within our residence collections.|Изучите планировки апартаментов с одной спальней в наших резиденциях.

OUR PROJECTS|НАШИ ПРОЕКТЫ
Explore project|Подробнее о проекте
Discover all projects|Все проекты
Previous project|Предыдущий проект
Next project|Следующий проект
Pause project carousel|Приостановить показ проектов
Play project carousel|Продолжить показ проектов
01 / PROJECT COLLECTION|01 / КОЛЛЕКЦИЯ ПРОЕКТОВ
ROOTED IN BALI|ВДОХНОВЛЕНО БАЛИ
Distinct places.|Разные места.
A shared intention.|Общий замысел.
Explore our collection of residences in Bali.|Откройте для себя наши резиденции на Бали.
Find the setting for your next chapter.|Найдите место для новой главы вашей жизни.
A private retreat in Bukit.|Частное пространство для отдыха в Буките.
Apartments and villas for contemporary island living.|Апартаменты и виллы для современной жизни на острове.

02 / OUR TEAM|02 / НАША КОМАНДА
PEOPLE BEHIND THE PLACES|ЛЮДИ, СОЗДАЮЩИЕ ПРОСТРАНСТВА
A shared vision.|Общее видение.
A personal commitment.|Личная ответственность.
Meet the people behind Sansara Development.|Знакомьтесь с командой Sansara Development.
Team profiles will be introduced here soon.|Скоро здесь появятся профили участников команды.
Portrait coming soon|Фото скоро появится
Team member name|Имя участника команды
Role to be announced|Должность будет указана позже
Let’s start a conversation.|Давайте начнём разговор.

04 / FEATURES & AMENITIES|04 / ОСОБЕННОСТИ И ИНФРАСТРУКТУРА
More to experience.|Больше впечатлений.
More to enjoy.|Больше удовольствия.
Distinctive amenities and thoughtful design, bringing more to life at Solvyn City.|Уникальная инфраструктура и продуманный дизайн для насыщенной жизни в Solvyn City.
Project features and amenities|Особенности и инфраструктура проекта
Surf wave|Волна для сёрфинга
Cinema|Кинотеатр
Dedicated event venue|Площадка для мероприятий
A signature surf experience, bringing energy and activity into the project. A distinctive amenity for residents and guests, with operating details to be confirmed.|Особое пространство для сёрфинга, наполняющее проект энергией и движением. Уникальная возможность для жителей и гостей; режим работы будет уточнён.
A dedicated space for film nights and shared entertainment, adding another way to enjoy time within the project. Seating and programming details will follow.|Место для кинопросмотров и совместного отдыха — ещё один способ приятно провести время в проекте. Подробности о местах и программе появятся позже.
A setting for celebrations, private gatherings and memorable occasions. The venue adds a social dimension to the project, with capacity and booking arrangements to be confirmed.|Пространство для праздников, частных встреч и памятных событий. Вместимость и условия бронирования будут уточнены.
Contact us|Связаться с нами
Home|Главная
About|О нас
Projects|Проекты
Residences|Резиденции
Construction|Строительство
FAQ|Вопросы
Let’s talk|Связаться
Menu|Меню
Close|Закрыть
Language|Язык
Skip to content|Перейти к содержимому
Book a consultation ↗|Записаться на консультацию ↗
ROOTED IN BALI. DESIGNED TO LAST.|СОЗДАНО НА БАЛИ. НА ДОЛГИЕ ГОДЫ.
Architecture for|Архитектура для
 a life|жизни
well lived.|в гармонии.
Explore our projects|Посмотреть проекты
BALI, INDONESIA|БАЛИ, ИНДОНЕЗИЯ
01 / THE SANSARA WAY|01 / ФИЛОСОФИЯ SANSARA
ARCHITECTURE. LIFE. LONGEVITY.|АРХИТЕКТУРА. ЖИЗНЬ. ДОЛГОВЕЧНОСТЬ.
Not just a place.|Больше, чем место.
A way of living.|Образ жизни.
Thoughtful homes, natural materials, and space for the everyday. Designed around the way Bali is lived.|Продуманные дома, натуральные материалы и пространство для повседневной жизни. В ритме Бали.
Years of international experience.|Лет опыта.
A lasting approach to building.|Строим с заботой о будущем.
Discover our projects|Наши проекты
02 / OUR FLAGSHIP|02 / ФЛАГМАНСКИЙ ПРОЕКТ
PROJECT DATE ·|ДАТА ПРОЕКТА ·
MARCH 2028|МАРТ 2028
A new expression of|Новый взгляд на
contemporary island living.|современную жизнь на острове.
Villas and apartments in Bukit.|Виллы и апартаменты на Буките.
Surf, wellness and spaces to come together.|Сёрфинг, велнес и пространства для общения.
VILLAS · APARTMENTS · SURF · WELLNESS|ВИЛЛЫ · АПАРТАМЕНТЫ · СЁРФИНГ · ВЕЛНЕС
Explore Solvyn City|Узнать о Solvyn City
03 / SELECTED RESIDENCES|03 / ИЗБРАННЫЕ РЕЗИДЕНЦИИ
FIND YOUR PLACE|НАЙДИТЕ СВОЙ ДОМ
Different spaces.|Разные пространства.
The same intention.|Единый замысел.
A private retreat or a connected community.|Уединённый дом или жизнь в сообществе.
Discover a place that feels like you.|Найдите место, близкое вам.
BUKIT, BALI|БУКИТ, БАЛИ
40–234 m² · 1–3 bedrooms · Apartments & villas|40–234 м² · 1–3 спальни · Апартаменты и виллы
34.6–165 m² · 1–3 bedrooms · Apartments & villas|34,6–165 м² · 1–3 спальни · Апартаменты и виллы
PROJECT DATE|ДАТА ПРОЕКТА
June 2028|Июнь 2028
March 2028|Март 2028
Explore residence|Подробнее о резиденции
SOLVYN CITY / KUTUH, BALI|SOLVYN CITY / КУТУХ, БАЛИ
An island of|Остров
possibilities.|возможностей.
Explore the places around your future home.|Откройте места рядом с вашим будущим домом.
Select a destination to discover its distance from Solvyn City.|Выберите место, чтобы узнать расстояние от Solvyn City.
DISTANCES FROM SOLVYN CITY|РАССТОЯНИЯ ОТ SOLVYN CITY
Approximate straight-line distances between map pins, not driving distances. Open directions for routes and current travel times.|Указаны примерные расстояния по прямой между точками на карте, а не по дороге. Откройте маршрут, чтобы узнать актуальное время в пути.
View Solvyn City|Solvyn City на карте
Loading the map…|Загрузка карты…
Show all locations ↗|Все места на карте ↗
Pandawa Beach|Пляж Пандава
Ocean & coast|Океан и побережье
GWK Cultural Park|Культурный парк GWK
Culture|Культура
Uluwatu Temple|Храм Улувату
Culture & sunset|Культура и закаты
Ngurah Rai Airport|Аэропорт Нгурах-Рай
International connections|Международные перелёты
Driving directions ↗|Автомобильный маршрут ↗
04 / BENEATH THE SURFACE|04 / ЧТО СКРЫТО ВНУТРИ
THOUGHTFUL BY DESIGN|ПРОДУМАНО ДО ДЕТАЛЕЙ
Technology built|Технологии, созданные
for Bali.|для Бали.
From the frame to the finishing details, built around Bali’s climate and everyday comfort.|От каркаса до отделки — с учётом климата Бали и повседневного комфорта.
Hover or tap a card to see what’s inside.|Наведите курсор или коснитесь карточки, чтобы узнать больше.
Lightweight steel frame|Лёгкий стальной каркас
Cold-formed steel framing provides the structure of each home. Explore how the frame, connections and layout come together in the design.|Каркас из холодногнутых стальных профилей составляет основу каждого дома. Узнайте, как каркас, соединения и планировка объединяются в проекте.
View projects|Смотреть проекты
Climate performance|Адаптация к климату
Materials and thermal profiles are selected for Bali’s tropical climate. The design considers shade, airflow and everyday comfort throughout the home.|Материалы и термопрофили подобраны для тропического климата Бали. При проектировании учитываются затенение, движение воздуха и повседневный комфорт в доме.
Acoustic comfort|Акустический комфорт
Layered wall assemblies help reduce sound transmission between spaces. Wall build-ups, finishes and room layout all contribute to a quieter living environment.|Многослойные стены помогают снизить передачу звука между помещениями. Конструкция стен, отделка и планировка вместе создают более спокойную обстановку.
Corrosion protection|Защита от коррозии
Galvanised coatings help protect the steel frame. Protective detailing and ongoing maintenance are considered alongside the materials selected for the home.|Оцинкованное покрытие помогает защитить стальной каркас. Наряду с выбором материалов учитываются защитные решения и последующее обслуживание дома.
Seismic consideration|Учёт сейсмики
Qualified engineers assess the structural design for each site. Foundations, framing and connections are considered together, with requirements specific to the project.|Квалифицированные инженеры оценивают конструктивные решения для каждого участка. Фундамент, каркас и соединения рассматриваются вместе с учётом требований конкретного проекта.
Flip it|Переверните
05 / THE MAKING OF A PLACE|05 / КАК СОЗДАЁТСЯ ДОМ
CLARITY AT EVERY STAGE|ЯСНОСТЬ НА КАЖДОМ ЭТАПЕ
From concept|От замысла
 to reality.|к воплощению.
Already in Bali? Arrange a personal tour of Solvyn City Phase 1 to see the project and discuss the latest construction updates with the team.|Уже на Бали? Запишитесь на личную экскурсию в Solvyn City Phase 1, чтобы увидеть проект и обсудить ход строительства с командой.
Arrange a Phase 1 tour|Посетить Solvyn City Phase 1
Planning|Планирование
Plans, proportions and materials.|Планы, пропорции и материалы.
Foundation|Фундамент
Preparing a solid base.|Создание прочной основы.
Structure|Каркас
The framework takes shape.|Дом обретает форму.
Interiors|Интерьеры
Bringing the details together.|Детали складываются в целое.
Completion|Завершение
A place ready for living.|Пространство, готовое к жизни.
From the first plans to the final details. Explore each stage above, or contact our team for the latest project updates. Images illustrate the process.|От первых планов до последних деталей. Изучите этапы выше или свяжитесь с командой, чтобы узнать новости проекта. Изображения иллюстрируют процесс.
06 / A LITTLE MORE CLARITY|06 / ОТВЕТЫ НА ВОПРОСЫ
Your questions,|Ваши вопросы —
considered.|наши ответы.
Who will be responsible for property management and maintenance?|Кто будет отвечать за управление и обслуживание недвижимости?
Contact our team for the proposed management provider, maintenance services and fees for your chosen residence. These arrangements will be set out in the project’s management agreement.|Уточните у нашей команды предполагаемую управляющую компанию, перечень услуг и стоимость обслуживания выбранной резиденции. Условия будут закреплены в договоре управления.
What is the ownership structure?|Какая предусмотрена форма владения?
Ask our team for the ownership structure and contract terms available for your chosen residence. The project documents will confirm the tenure, duration and any renewal provisions.|Уточните у нашей команды доступную форму владения и условия договора для выбранной резиденции. Документы проекта определяют вид права, срок и условия продления.
What infrastructure and facilities are included in the project?|Какая инфраструктура предусмотрена в проекте?
Solvyn City’s published plans include villas and apartments, a surf wave, a wellness cluster and event spaces. Facilities and delivery stages should be confirmed against the current project specification.|Опубликованные планы Solvyn City включают виллы и апартаменты, волну для сёрфинга, велнес-кластер и площадки для мероприятий. Состав инфраструктуры и сроки её готовности уточняются в актуальной спецификации проекта.
How far is the project from the ocean?|Как далеко проект находится от океана?
The published Solvyn City location guide indicates approximately two minutes from the ocean. Explore the map above for the distance to Pandawa Beach and open driving directions to check your route. Travel times vary with traffic and access.|В опубликованном описании Solvyn City указано около двух минут до океана. На карте выше можно узнать расстояние до пляжа Пандава и открыть автомобильный маршрут. Время в пути зависит от дорожной ситуации и подъезда.
Can owners live in their residences themselves, or are they intended exclusively for rental?|Могут ли владельцы жить в резиденциях сами или они предназначены только для аренды?
Please discuss your intended use with our team. Personal stays, rental participation and any occupancy conditions should be confirmed in the agreement for your chosen residence.|Обсудите с нашей командой, как вы планируете использовать резиденцию. Личное проживание, участие в аренде и условия размещения следует подтвердить в договоре.
What documents are required to purchase a property?|Какие документы необходимы для приобретения недвижимости?
Request a purchase-document checklist from our team for your circumstances and chosen ownership structure. The project’s notary or legal adviser can confirm the exact requirements before you proceed.|Запросите у нашей команды перечень документов с учётом ваших обстоятельств и выбранной формы владения. Нотариус или юридический консультант проекта уточнит требования до начала оформления.
YOUR NEXT CHAPTER STARTS HERE|ВАША НОВАЯ ГЛАВА НАЧИНАЕТСЯ ЗДЕСЬ
Let’s create|Давайте создадим
something|нечто
lasting.|долговечное.
Book a consultation|Записаться на консультацию
Considered architecture.|Продуманная архитектура.
A life well lived.|Жизнь в гармонии.
EXPLORE|УЗНАТЬ БОЛЬШЕ
Our philosophy|Наша философия
Our projects|Наши проекты
LET’S CONNECT|СВЯЖИТЕСЬ С НАМИ
Request the catalogue ↗|Запросить каталог ↗
Bali, Indonesia|Бали, Индонезия
FOLLOW OUR STORY|СЛЕДИТЕ ЗА НАМИ
Back to top ↑|Наверх ↑
Design preview · Concept imagery|Предварительный дизайн · Концептуальные изображения
Privacy|Конфиденциальность
LET’S BEGIN A CONVERSATION|ДАВАЙТЕ ПОЗНАКОМИМСЯ
Your place.|Ваш дом.
Your possibilities.|Ваши возможности.
Tell us a little about what you have in mind.|Расскажите немного о ваших планах.
Your name|Ваше имя
Email address|Электронная почта
I’m interested in|Меня интересует
Request the catalogue|Запрос каталога
Solvyn City presentation|Презентация Solvyn City
Solvyn City Phase 1 tour|Экскурсия в Solvyn City Phase 1
A general conversation|Общие вопросы
Anything else?|Хотите что-то добавить?
(optional)|(необязательно)
Prepare your enquiry, then open a WhatsApp draft for +62 823-3968-2775. You review and send it in WhatsApp. You can also download a copy.|Подготовьте запрос и откройте черновик в WhatsApp на номер +62 823-3968-2775. Вы сможете проверить и отправить его самостоятельно или скачать копию.
Prepare my enquiry|Подготовить запрос
Continue in WhatsApp ↗|Продолжить в WhatsApp ↗
Download your enquiry ↓|Скачать запрос ↓
Construction stage|Этап строительства
Illustrative construction rendering.|Иллюстрация этапа строительства.
ABOUT SANSARA DEVELOPMENT|О SANSARA DEVELOPMENT
A lasting intention.|С заботой о будущем.
Contemporary homes in Bali, shaped by thoughtful design, everyday comfort and a longer perspective.|Современные дома на Бали: продуманный дизайн, повседневный комфорт и взгляд в будущее.
Our commitment|Наши обязательства
A LONGER PERSPECTIVE|ВЗГЛЯД В БУДУЩЕЕ
Designed as an|Создано как
architectural legacy.|архитектурное наследие.
The details you notice. The comfort you feel. The quality that stays. We believe good architecture brings all three together — and becomes more meaningful with time.|Детали, которые вы замечаете. Комфорт, который чувствуете. Качество, которое остаётся. Хорошая архитектура объединяет всё это и со временем становится ещё ценнее.
LIGHT, MATERIAL, AND A SENSE OF PLACE|СВЕТ, МАТЕРИАЛЫ И ХАРАКТЕР МЕСТА
FIG. 01|ИЛЛ. 01
01 / OUR COMMITMENT|01 / НАШИ ОБЯЗАТЕЛЬСТВА
CONFIDENCE, CONSIDERED.|ПРОДУМАННАЯ УВЕРЕННОСТЬ.
Built on clarity.|Основано на ясности.
Grounded|Построено
in trust.|на доверии.
A home is a long-term decision.|Выбор дома — решение на годы.
Here’s what stands behind ours.|Вот что стоит за нашими проектами.
OUR PUBLISHED COMMITMENT|НАШИ ЗАЯВЛЕННЫЕ ОБЯЗАТЕЛЬСТВА
YEARS OF|ЛЕТ
STRUCTURAL WARRANTY|ГАРАНТИИ НА КОНСТРУКЦИИ
Made for today.|Создано для настоящего.
Backed for tomorrow.|С уверенностью в будущем.
Ask for the warranty scope and terms|Уточните объём и условия гарантии
for your chosen residence.|для выбранной резиденции.
THE DETAILS THAT MATTER|ВАЖНЫЕ ДЕТАЛИ
Protected from day one.|Под защитой с первого дня.
Our published commitment includes property insurance during construction and after completion, alongside a 25-year structural warranty.|Наши заявленные обязательства включают страхование недвижимости во время строительства и после завершения, а также 25-летнюю гарантию на конструкции.
Coverage and exclusions follow the project’s policy and warranty terms.|Покрытие и исключения определяются страховым полисом и условиями гарантии проекта.
Clarity at every step.|Ясность на каждом этапе.
Our published pre-construction requirements cover PBG approvals, due diligence, paid land and land-use suitability for daily rental.|Наши заявленные требования до начала строительства включают разрешения PBG, юридическую проверку, оплату земли и соответствие её назначения посуточной аренде.
Review the documentation for your chosen project with the team.|Ознакомьтесь с документами выбранного проекта вместе с нашей командой.
A longer perspective.|Взгляд в будущее.
Thoughtful layouts, material quality and everyday usability shape our approach. We consider how a home will be lived in, cared for and enjoyed over time.|Продуманные планировки, качество материалов и удобство определяют наш подход. Мы учитываем, как в доме будут жить, заботиться о нём и наслаждаться им долгие годы.
Considered architecture. Lasting intention.|Продуманная архитектура. С заботой о будущем.
Good questions deserve clear answers.|На важные вопросы нужны ясные ответы.
Talk to our team|Связаться с командой
Full name|Имя и фамилия
Your plans, questions, or preferred visit dates|Ваши планы, вопросы или удобные даты визита
Your enquiry is ready. Continue in WhatsApp to review and send it, or download a copy. Nothing has been sent yet.|Ваш запрос готов. Перейдите в WhatsApp, чтобы проверить и отправить его, или скачайте копию. Пока ничего не отправлено.
Open contact options|Открыть способы связи
Close contact options|Закрыть способы связи
Scroll to discover|Прокрутить дальше
Close consultation|Закрыть консультацию
Close project details|Закрыть сведения о проекте
Close image|Закрыть изображение
Flip card back|Перевернуть карточку обратно
`.trim().split('\n').map(line=>line.split('|').map(s=>s.trim())));

Object.assign(russianText, {
  'BENEATH THE SURFACE': 'ЧТО СКРЫТО ВНУТРИ',
  'Technical details.': 'Технические детали.',
  'OUR FLAGSHIP / BUKIT, BALI': 'ФЛАГМАНСКИЙ ПРОЕКТ / БУКИТ, БАЛИ',
  'RESIDENCES / BUKIT, BALI': 'РЕЗИДЕНЦИИ / БУКИТ, БАЛИ',
  'A premium villa and apartment development with a planned surf wave, a wellness cluster focused on biohacking and preventive health, and an event space for weddings and gatherings.': 'Премиальный комплекс вилл и апартаментов с запланированной волной для сёрфинга, велнес-кластером с акцентом на биохакинг и профилактику здоровья, а также пространством для свадеб и встреч.',
  'Apartments and two- to three-bedroom villas in Bukit, with published layouts from 40 to 234 m². Visit the project in person with the Sansara Development team.': 'Апартаменты и виллы с двумя и тремя спальнями на Буките. Опубликованные планировки — от 40 до 234 м². Посетите проект вместе с командой Sansara Development.',
  'Published location guide · 2 minutes from the ocean': 'По опубликованным данным · 2 минуты до океана',
  'Published location guide · 20 minutes from Ngurah Rai Airport': 'По опубликованным данным · 20 минут от аэропорта Нгурах-Рай',
  'Travel times are indicative and vary with route and traffic.': 'Время в пути ориентировочное и зависит от маршрута и дорожной ситуации.',
  'Specifications are from the company website. Confirm current availability, pricing and final plans with the team. The image is a concept illustration, not an approved project rendering.': 'Характеристики взяты с сайта компании. Уточните актуальное наличие, цены и окончательные планы у команды. Изображение — концептуальная иллюстрация, а не утверждённая визуализация проекта.',
  'Apartments · Balcony, shared pool and parking': 'Апартаменты · Балкон, общий бассейн и парковка',
  'Villas · BBQ area and 15 m² private pools': 'Виллы · Зона барбекю и частные бассейны 15 м²',
  'Personal tours · Available by arrangement': 'Личные экскурсии · По предварительной записи',
  'Floor area': 'Площадь', 'Bedrooms': 'Спальни', 'Floors': 'Этажи', 'Bathrooms': 'Ванные комнаты', 'Pool': 'Бассейн',
  'Ask the team': 'Уточните у команды', 'Communal pool': 'Общий бассейн',
  'Enquire about this residence': 'Узнать об этой резиденции',
  'Request the project presentation ↗': 'Запросить презентацию проекта ↗',
  'Select a residence type': 'Выберите тип резиденции',
  'Apartments': 'Апартаменты',
  'Villa type 1': 'Вилла, тип 1', 'Villa type 2': 'Вилла, тип 2', 'Villa type 3': 'Вилла, тип 3',
  '1-bedroom apartment': 'Апартаменты с 1 спальней', '1-bedroom villa': 'Вилла с 1 спальней', 'Two-bedroom villa': 'Вилла с 2 спальнями',
  'Three-bedroom villa · Type 1': 'Вилла с 3 спальнями · Тип 1', 'Three-bedroom villa · Type 2': 'Вилла с 3 спальнями · Тип 2',
  'Our construction approach uses lightweight steel framing (LGSF), formed from cold-formed steel profiles with stiffening ribs.': 'Мы используем лёгкий стальной каркас (LGSF) из холодногнутых стальных профилей с рёбрами жёсткости.',
  'Steel framing and a perforated thermal profile are selected to address decay, termite exposure, condensation and thermal bridging in Bali’s climate.': 'Стальной каркас и перфорированный термопрофиль подобраны с учётом гниения, воздействия термитов, конденсата и мостиков холода в климате Бали.',
  'Our published specification lists an Rw sound-insulation rating of 62–68 dB for assemblies using ECO concrete and gypsum fibreboard. Ask for the assembly details and test documentation.': 'В опубликованной спецификации указан индекс звукоизоляции Rw 62–68 дБ для конструкций с ECO-бетоном и гипсоволокнистыми плитами. Запросите состав конструкций и протоколы испытаний.',
  'The published system uses galvanised steel with 275–350 g/m² of zinc coating, with an optional zinc-aluminium-magnesium (ZAM) composition.': 'В опубликованной системе применяется оцинкованная сталь с покрытием 275–350 г/м²; возможен цинк-алюминий-магниевый состав (ZAM).',
  'Site-specific structural design must be assessed by qualified engineers. Project documentation provides the applicable engineering details.': 'Конструктивные решения для конкретного участка должны оценивать квалифицированные инженеры. Применимые технические детали указаны в документации проекта.',
  'Zoom in': 'Приблизить', 'Zoom out': 'Отдалить', 'Close popup': 'Закрыть подсказку',
  'Contact us on WhatsApp': 'Связаться в WhatsApp', 'Contact us on Telegram': 'Связаться в Telegram'
});

// Complete translations for the current FAQ, including every answer and list item.
Object.assign(russianText, {
  "Who is responsible for managing the property?": "Кто отвечает за управление недвижимостью?",
  "Property management is handled by a professional management company—our long-term partner with experience in the hospitality and property management sectors.": "Управлением недвижимостью занимается профессиональная управляющая компания — наш многолетний партнёр с опытом работы в сфере гостеприимства и управления недвижимостью.",
  "The company takes full responsibility for the operational management of the property: its maintenance and upkeep, guest services, tenant recruitment, and property marketing. The management company also collaborates with tour operators and other partners to ensure a steady flow of guests and optimal occupancy rates for the residences.": "Компания полностью берёт на себя операционное управление недвижимостью: техническое обслуживание и содержание, обслуживание гостей, поиск арендаторов и продвижение объекта. Управляющая компания также сотрудничает с туроператорами и другими партнёрами, чтобы обеспечивать стабильный поток гостей и оптимальную загрузку резиденций.",
  "As a result, the owner does not need to personally search for tenants, arrange guest accommodations, or handle the day-to-day management of the property—a professional team takes care of all these matters.": "Таким образом, владельцу не нужно самостоятельно искать арендаторов, организовывать размещение гостей или заниматься повседневным управлением недвижимостью — все эти задачи выполняет профессиональная команда.",
  "What form of ownership is provided for?": "Какая предусмотрена форма владения?",
  "Leasehold terms depend on the project phase. Phase 1 offers 23+ years, with a guaranteed 25-year leasehold extension at a fixed price. Phase 2 offers 80 years. This grants owners a long-term right to use the property and supports long-term ownership planning.": "Сроки долгосрочной аренды зависят от этапа проекта. Первый этап предусматривает срок более 23 лет с гарантированным продлением аренды на 25 лет по фиксированной цене. Второй этап — 80 лет. Это предоставляет владельцам долгосрочное право пользования недвижимостью и возможность долгосрочного планирования.",
  "What infrastructure and facilities are included in the project?": "Какая инфраструктура и какие объекты предусмотрены в проекте?",
  "The following are planned for the site:": "На территории запланированы:",
  "4 restaurants with an atmosphere conducive to relaxation and socializing": "4 ресторана с атмосферой для отдыха и общения",
  "Bali’s only artificial surf wave for surfing": "Единственная на Бали искусственная волна для сёрфинга",
  "An open-air movie theater under the stars": "Кинотеатр под открытым небом",
  "A state-of-the-art fitness center": "Современный фитнес-центр",
  "A wellness area for relaxation and rejuvenation": "Оздоровительная зона для отдыха и восстановления",
  "An elegant wedding hall for special events": "Элегантный свадебный зал для торжественных мероприятий",
  "An architectural bridge that will become one of the project’s most recognizable visual features": "Архитектурный мост, который станет одним из самых узнаваемых элементов проекта",
  "All of this creates a space where everyday life blends with relaxation, activity, and premium service.": "Всё это создаёт пространство, где повседневная жизнь сочетается с отдыхом, активностью и первоклассным сервисом.",
  "The project is located just 2 minutes from the ocean, providing quick access to the coast and the natural beauty of southern Bali.": "Проект расположен всего в 2 минутах от океана, обеспечивая быстрый доступ к побережью и природным красотам южного Бали.",
  "Can owners live in their residences themselves, or are they intended exclusively for rental?": "Могут ли владельцы сами проживать в своих резиденциях или они предназначены исключительно для сдачи в аренду?",
  "Yes, owners can live in their residences themselves whenever it is convenient for them. During periods when the owner is not using the property, our management company can handle the rental and guest accommodations to ensure the residence remains in demand and generates income.": "Да, владельцы могут сами проживать в своих резиденциях в удобное для них время. Когда владелец не пользуется недвижимостью, наша управляющая компания может заниматься её сдачей в аренду и размещением гостей, чтобы резиденция оставалась востребованной и приносила доход."
});

Object.assign(russianText, {'04 / THE MAKING OF A PLACE':'04 / СОЗДАНИЕ ПРОЕКТА','05 / A LITTLE MORE CLARITY':'05 / ОТВЕТЫ НА ВОПРОСЫ'});

Object.assign(russianText, {
  "An innovative purification system designed to support water quality throughout the development.": "Инновационная система очистки для поддержания качества воды на территории комплекса.",
  "Galvanised coatings and protective detailing help protect the steel frame.": "Оцинкованное покрытие и продуманные защитные решения помогают защитить стальной каркас.",
  "Qualified engineers assess each site’s structural design, considering foundations, framing and connections together.": "Квалифицированные инженеры оценивают конструктивные решения для каждого участка, рассматривая фундамент, каркас и соединения в комплексе."
});

Object.assign(russianText, {
  "Privacy Policy": "Политика конфиденциальности",
  "Years of international experience.": "Лет международного опыта.",
  "Years of international experience": "Лет международного опыта",
  "18+ years of international experience in steel framing and construction inform our approach to contemporary homes in Bali.": "Более 18 лет международного опыта в строительстве и применении стальных каркасов лежат в основе нашего подхода к современным домам на Бали.",
  "EXPERIENCE WITHOUT BORDERS": "ОПЫТ БЕЗ ГРАНИЦ",
  "Built on experience.": "Основано на опыте.",
  "Connected worldwide.": "Связи по всему миру.",
  "18 years in steel framing and construction, with clients and manufacturing expertise around the world.": "18 лет опыта в строительстве и применении стальных каркасов, клиенты и производственная экспертиза по всему миру.",
  "Countries": "Стран",
  "Satisfied clients": "Довольных клиентов",
  "Factories around the world": "Заводов по всему миру",
  "Years in steel framing": "Лет в сфере стальных каркасов",
  "and construction": "и строительства",
  "Built on knowledge.": "Основано на знаниях.",
  "Made to last.": "Создано надолго.",
  "More locations": "Другие места",
  "Our Projects": "Наши проекты",
  "All Residences": "Все резиденции",
  "01 / VILLAS": "01 / ВИЛЛЫ",
  "02 / APARTMENTS": "02 / АПАРТАМЕНТЫ",
  "Villas and apartments in Bukit, Bali, with residences ranging from 40 to 234 m².": "Виллы и апартаменты на Буките, Бали, площадью от 40 до 234 м².",
  "Project year": "Год проекта",
  "Residence sizes": "Площади резиденций",
  "6 residence types": "6 типов резиденций",
  "Two-bedroom villa · Type 2": "Вилла с 2 спальнями · Тип 2",
  "YOUR RESIDENCE": "ВАША РЕЗИДЕНЦИЯ",
  "All residences ↗": "Все резиденции ↗",
  "Residence details.": "Характеристики резиденции.",
  "Location": "Расположение",
  "Bukit, Bali": "Букит, Бали",
  "GALLERY": "ГАЛЕРЕЯ",
  "ARCHITECTURAL CONCEPTS": "АРХИТЕКТУРНЫЕ КОНЦЕПЦИИ",
  "A closer look.": "Рассмотрите подробнее.",
  "Residence imagery supplied by Sansara Development. Ask the team for this residence’s final plans, current availability and pricing.": "Изображения резиденции предоставлены Sansara Development. Уточните у команды окончательные планы, актуальное наличие и цены.",
  "EXPLORE NEXT": "ПОСМОТРИТЕ ТАКЖЕ",
  "ANOTHER PLACE TO CALL HOME": "ЕЩЁ ОДНО МЕСТО ДЛЯ ВАШЕГО ДОМА",
  "Confirm with the team": "Уточните у команды",
  "Illustrative concept imagery, shared across residence types. Ask the team for this residence’s final plans, current availability and pricing.": "Концептуальные изображения используются для разных типов резиденций. Уточните у команды окончательные планы, актуальное наличие и цены.",
  "Residence": "Резиденция",
  "View this residence": "Посмотреть резиденцию",
  "View studio apartments": "Посмотреть апартаменты-студии",
  "All Phase 2 residences ↗": "Все резиденции второго этапа ↗",
  "Explore Solvyn City Phase 2 residences": "Посмотреть резиденции Solvyn City второго этапа",
  "A private retreat in Bukit. Apartments and villas for contemporary island living.": "Уединённое пространство на Буките. Апартаменты и виллы для современной островной жизни.",
  "Your privacy.": "Ваша конфиденциальность.",
  "Privacy Policy.": "Политика конфиденциальности.",
  "English": "Английский",
  "18+ YEARS OF EXPERIENCE": "18+ ЛЕТ МЕЖДУНАРОДНОГО ОПЫТА",
  "Communal pool · area to be confirmed": "Общий бассейн · площадь уточняется"
});

Object.assign(russianText, {
  "TESTIMONIAL PLACEHOLDER": "МЕСТО ДЛЯ ОТЗЫВА",
  "“Your client’s experience goes here — in their own words, from the first conversation to finding their home.”": "«Здесь будет отзыв клиента о его опыте — от первого разговора до выбора дома».",
  "Client name": "Имя клиента",
  "Homeowner · Residence name": "Владелец · Название резиденции",
  "Solvyn River Surf": "Solvyn — Речной сёрфинг",
  "Two private pools · 7 villas": "Два бассейна: 12 м² и 12,2 м² · 7 вилл",
  "12 m² + 12.2 m² private pools · 7 villas": "Частные бассейны: 12 м² и 12,2 м² · 7 вилл",
  "167 m² · 3 bedrooms · 12 m² + 12.2 m² private pools": "167 м² · 3 спальни · Частные бассейны 12 м² и 12,2 м²",
  "Communal pool · Area to be confirmed": "Общий бассейн · Площадь уточняется"
});
Object.keys(russianText).forEach(key=>{russianText[key]=typeof russianText[key]==='string'?russianText[key].replace(/Phase ([12])/g,'Этап $1').replace(/Villa type ([123])/g,'Вилла, тип $1'):russianText[key];});

Object.assign(russianText, {'18+ YEARS OF INTERNATIONAL EXPERIENCE':'18+ ЛЕТ МЕЖДУНАРОДНОГО ОПЫТА'});

Object.assign(russianText, {"Jl. Karang Pandawa No. 8x, Kutuh, Kec. Kuta Sel., Kota Denpasar, Bali 80224.":"Ул. Каранг Пандава, № 8x, Кутух, Южная Кута, Денпасар, Бали 80224."});

Object.assign(russianText, {'View full-size floor plan':'Посмотреть планировку в полном размере'});

Object.assign(russianText, {'Our projects':'Наши проекты','All residences':'Все резиденции'});

Object.assign(russianText, {'All projects':'Все проекты','Contact our team':'Связаться с командой'});

Object.assign(russianText, {"Ask our team for more pictures of this residence, final plans, a presentation, current availability and pricing.":"Запросите у нашей команды дополнительные фотографии этой резиденции, окончательные планы, презентацию, а также информацию об актуальном наличии и ценах."});

// Audited residence labels, image descriptions and navigation text.
Object.assign(russianText, {
  "Main navigation": "Основная навигация",
  "Mobile navigation": "Мобильная навигация",
  "Go back": "Назад",
  "Project gallery": "Галерея проектов",
  "Close technical details": "Закрыть технические сведения",
  "Client testimonials": "Отзывы клиентов",
  "Previous testimonial": "Предыдущий отзыв",
  "Next testimonial": "Следующий отзыв",
  "Nearby destinations, scroll to see more": "Места поблизости — прокрутите для просмотра",
  "Scroll to more locations": "Показать другие места",
  "Interactive map of Solvyn City and nearby Bali destinations": "Интерактивная карта Solvyn City и ближайших мест на Бали",
  "Illustrative construction stages": "Иллюстрации этапов строительства",
  "Concept of a limestone villa and reflection pool in a tropical Bali garden": "Концепция виллы из известняка с декоративным бассейном в тропическом саду на Бали",
  "Architectural rendering of contemporary villas along a landscaped lane at Solvyn City": "Архитектурная визуализация современных вилл вдоль озеленённой дорожки в Solvyn City",
  "Architectural plans, a scale model and material samples": "Архитектурные планы, макет и образцы материалов",
  "Concrete foundations and reinforcement at an illustrative building site": "Бетонный фундамент и арматура на иллюстрации строительной площадки",
  "Exposed lightweight steel framing of a tropical villa": "Открытый лёгкий стальной каркас тропической виллы",
  "Cabinetry, plaster and stone finishes being installed": "Монтаж мебели, штукатурки и каменной отделки",
  "Completed concept villa with a pool and tropical planting": "Визуализация готовой виллы с бассейном и тропическими растениями",
  "Stock portrait of a smiling man; placeholder for a future client photo": "Портрет улыбающегося мужчины — временное изображение для будущей фотографии клиента",
  "Warm light falling across a concept Bali villa interior": "Тёплый свет в концептуальном интерьере виллы на Бали",
  "Concept villa surrounded by tropical gardens in Bali": "Концепция виллы в окружении тропических садов на Бали",
  "World map with gold location pins across the Americas, Europe, Africa, Asia and Australia": "Карта мира с золотыми отметками в Америке, Европе, Африке, Азии и Австралии",
  "Architectural rendering of a sculptural walkway through tropical gardens overlooking the ocean at sunset": "Архитектурная визуализация дорожки в тропическом саду с видом на океан на закате",
  "Concept interior showing warm stone and timber materials": "Концептуальный интерьер с камнем и деревом тёплых оттенков",
  "Illustrative residence interior and architecture": "Визуализация интерьера и архитектуры резиденции",
  "Apartment and penthouse building rendering": "Визуализация здания с апартаментами и пентхаусами",
  "Studio apartment building rendering": "Визуализация здания с апартаментами-студиями",
  "Illustrative apartment rendering": "Визуализация апартаментов",
  "Illustrative architectural concept": "Архитектурная концепция",
  "Architectural concept illustration": "Иллюстрация архитектурной концепции",
  "Solvyn City Phase 2 — Two-bedroom villa · Type 1": "Solvyn City — Этап 2 — Вилла с двумя спальнями · Тип 1",
  "Solvyn City Phase 2 — Two-bedroom villa · Type 2": "Solvyn City — Этап 2 — Вилла с двумя спальнями · Тип 2",
  "Solvyn City Phase 2 — Three-bedroom villa · Type 1": "Solvyn City — Этап 2 — Вилла с тремя спальнями · Тип 1",
  "Solvyn City Phase 2 — Three-bedroom villa · Type 2": "Solvyn City — Этап 2 — Вилла с тремя спальнями · Тип 2",
  "Sansara Development home": "Главная страница Sansara Development",
  "Solvyn City Phase 1 architectural rendering": "Solvyn City — Этап 1 архитектурная визуализация",
  "Solvyn City Phase 2 architectural rendering": "Solvyn City — Этап 2 архитектурная визуализация",
  "View planning image": "Посмотреть изображение: планирование",
  "View foundation image": "Посмотреть изображение: фундамент",
  "View structure image": "Посмотреть изображение: каркас",
  "View interiors image": "Посмотреть изображение: интерьеры",
  "View completion image": "Посмотреть изображение: завершение",
  "Concept view of Solvyn City": "Концептуальный вид: Solvyn City",
  "Concept view of Solvyn City Phase 2": "Концептуальный вид: Solvyn City — Этап 2",
  "Illustrative view of Solvyn City Phase 1": "Визуализация: Solvyn City — Этап 1",
  "Illustrative view of Solvyn City Phase 2": "Визуализация: Solvyn City — Этап 2",
  "Explore Solvyn City 1-bedroom villa": "Посмотреть Solvyn City Вилла с одной спальней",
  "Explore Solvyn City Phase 2 Two-bedroom villa · Type 1": "Посмотреть Solvyn City — Этап 2 Вилла с двумя спальнями · Тип 1",
  "Explore Solvyn City Three-bedroom villa · Type 1": "Посмотреть Solvyn City Вилла с тремя спальнями · Тип 1",
  "Explore Solvyn City Phase 1 Villa type 1": "Посмотреть Solvyn City — Этап 1 Вилла, тип 1",
  "Explore Solvyn City Phase 1 Villa type 2": "Посмотреть Solvyn City — Этап 1 Вилла, тип 2",
  "Explore Solvyn City Phase 1 Villa type 3": "Посмотреть Solvyn City — Этап 1 Вилла, тип 3",
  "Explore Solvyn City 1-bedroom apartment": "Посмотреть Solvyn City Апартаменты с одной спальней",
  "Explore Solvyn City Phase 1 Apartments": "Посмотреть Solvyn City — Этап 1 Апартаменты",
  "Explore two-bedroom penthouse": "Посмотреть Пентхаус с двумя спальнями",
  "Explore Villa type 3": "Посмотреть Вилла, тип 3",
  "Villa type 3 architectural rendering": "Вилла, тип 3 архитектурная визуализация",
  "Explore 40 m² apartment": "Посмотреть 40 м² апартаменты",
  "Explore 50 m² apartment": "Посмотреть 50 м² апартаменты",
  "Explore studio apartments": "Посмотреть Апартаменты-студии",
  "Explore Two-bedroom villa · Type 2": "Посмотреть Вилла с двумя спальнями · Тип 2",
  "Two-bedroom villa · Type 2 architectural rendering": "Вилла с двумя спальнями · Тип 2 архитектурная визуализация",
  "Explore one-bedroom villa": "Посмотреть Вилла с одной спальней",
  "One-bedroom villa rendering": "Вилла с одной спальней визуализация",
  "Architectural concept for Apartments": "Архитектурная концепция: Апартаменты",
  "50 m² apartment floor plan at Solvyn City Phase 1": "50 м² апартаменты планировка в Solvyn City — Этап 1",
  "Open residence image 1": "Открыть изображение резиденции 1",
  "Phase 1 apartment interior rendering 1": "Этап 1 · апартаменты визуализация интерьера 1",
  "Open residence image 2": "Открыть изображение резиденции 2",
  "Phase 1 apartment interior rendering 2": "Этап 1 · апартаменты визуализация интерьера 2",
  "Open residence image 3": "Открыть изображение резиденции 3",
  "Phase 1 apartment interior rendering 3": "Этап 1 · апартаменты визуализация интерьера 3",
  "Open residence image 4": "Открыть изображение резиденции 4",
  "Phase 1 apartment interior rendering 4": "Этап 1 · апартаменты визуализация интерьера 4",
  "Open residence image 5": "Открыть изображение резиденции 5",
  "Phase 1 apartment interior rendering 5": "Этап 1 · апартаменты визуализация интерьера 5",
  "40 m² apartment floor plan at Solvyn City Phase 1": "40 м² апартаменты планировка в Solvyn City — Этап 1",
  "Architectural concept for Villa type 1": "Архитектурная концепция: Вилла, тип 1",
  "Explore Solvyn City Phase 1 1-bedroom apartment": "Посмотреть Solvyn City — Этап 1 Апартаменты с одной спальней",
  "Architectural concept for Villa type 2": "Архитектурная концепция: Вилла, тип 2",
  "Explore Solvyn City Phase 1 1-bedroom villa": "Посмотреть Solvyn City — Этап 1 Вилла с одной спальней",
  "Architectural concept for 1-bedroom villa": "Архитектурная концепция: Вилла с одной спальней",
  "Explore Solvyn City Phase 1 Two-bedroom villa": "Посмотреть Solvyn City — Этап 1 Вилла с двумя спальнями",
  "Architectural concept for Two-bedroom penthouse": "Архитектурная концепция: Пентхаус с двумя спальнями",
  "Two-bedroom penthouse interior rendering 1": "Пентхаус с двумя спальнями визуализация интерьера 1",
  "Two-bedroom penthouse interior rendering 2": "Пентхаус с двумя спальнями визуализация интерьера 2",
  "Two-bedroom penthouse interior rendering 3": "Пентхаус с двумя спальнями визуализация интерьера 3",
  "Two-bedroom penthouse interior rendering 4": "Пентхаус с двумя спальнями визуализация интерьера 4",
  "Two-bedroom penthouse interior rendering 5": "Пентхаус с двумя спальнями визуализация интерьера 5",
  "Explore Solvyn City Phase 2 1-bedroom villa": "Посмотреть Solvyn City — Этап 2 Вилла с одной спальней",
  "Explore Solvyn City Phase 2 Two-bedroom villa": "Посмотреть Solvyn City — Этап 2 Вилла с двумя спальнями",
  "Explore Solvyn City Phase 2 Three-bedroom villa · Type 1": "Посмотреть Solvyn City — Этап 2 Вилла с тремя спальнями · Тип 1",
  "Two-bedroom villa · Type 2.": "Вилла с двумя спальнями · Тип 2.",
  "Residence rendering 1": "Резиденция визуализация 1",
  "Residence rendering 2": "Резиденция визуализация 2",
  "Apartments rendering": "Апартаменты визуализация",
  "Two-bedroom villa · Type 1 rendering": "Вилла с двумя спальнями · Тип 1 визуализация",
  "Architectural concept for Studio apartments": "Архитектурная концепция: Апартаменты-студии",
  "Phase 2 studio apartment interior rendering 1": "Этап 2 · studio апартаменты визуализация интерьера 1",
  "Phase 2 studio apartment interior rendering 2": "Этап 2 · studio апартаменты визуализация интерьера 2",
  "Phase 2 studio apartment interior rendering 3": "Этап 2 · studio апартаменты визуализация интерьера 3",
  "Phase 2 studio apartment interior rendering 4": "Этап 2 · studio апартаменты визуализация интерьера 4",
  "Phase 2 studio apartment interior rendering 5": "Этап 2 · studio апартаменты визуализация интерьера 5",
  "Architectural concept for One-bedroom villa": "Архитектурная концепция: Вилла с одной спальней",
  "Two-bedroom villa · Type 1.": "Вилла с двумя спальнями · Тип 1.",
  "Architectural concept for Two-bedroom villa": "Архитектурная концепция: Вилла с двумя спальнями",
  "Three-bedroom villa · Type 1.": "Вилла с тремя спальнями · Тип 1.",
  "Architectural concept for Three-bedroom villa · Type 1": "Архитектурная концепция: Вилла с тремя спальнями · Тип 1",
  "40 m² apartment interior rendering 1": "40 м² апартаменты визуализация интерьера 1",
  "50 m² apartment interior rendering 1": "50 м² апартаменты визуализация интерьера 1",
  "40 m² apartment interior rendering 2": "40 м² апартаменты визуализация интерьера 2",
  "50 m² apartment interior rendering 2": "50 м² апартаменты визуализация интерьера 2",
  "40 m² apartment interior rendering 3": "40 м² апартаменты визуализация интерьера 3",
  "50 m² apartment interior rendering 3": "50 м² апартаменты визуализация интерьера 3",
  "40 m² apartment interior rendering 4": "40 м² апартаменты визуализация интерьера 4",
  "50 m² apartment interior rendering 4": "50 м² апартаменты визуализация интерьера 4",
  "40 m² apartment interior rendering 5": "40 м² апартаменты визуализация интерьера 5",
  "50 m² apartment interior rendering 5": "50 м² апартаменты визуализация интерьера 5"
});

Object.assign(russianText, {'Residence image gallery':'Галерея резиденции','Close gallery':'Закрыть галерею','Previous image':'Предыдущее изображение','Next image':'Следующее изображение'});

// Arrow icons are separate from translated labels.
Object.entries(russianText).forEach(([key,value])=>{
 if(typeof value==='string' && /[←→↑↓↗↘]/.test(key)) {
   const label=key.replace(/[←→↑↓↗↘]/g,'').trim();
   if(label && !russianText[label]) russianText[label]=value.replace(/[←→↑↓↗↘]/g,'').trim();
 }
});

let selectedLanguage = 'en';
try { selectedLanguage = localStorage.getItem('sansara-language') === 'ru' ? 'ru' : 'en'; } catch {}
const originalText = new WeakMap();
const originalAttributes = new WeakMap();
const translate = value => {
  if (russianText[value]) return russianText[value];
  if (/^Villa type [123] interior rendering \d+$/.test(value)) return value.replace(/^Villa type ([123]) interior rendering (\d+)$/, 'Визуализация интерьера виллы типа $1 — $2');
  if (/^\d+(\.\d+)? km$/.test(value)) return value.replace(' km',' км');
  if (value.includes(' km straight-line from Solvyn City')) return value.replace(' km straight-line from Solvyn City',' км по прямой от Solvyn City');
  if (value.endsWith(' floor plan at Solvyn City Phase 2')) return translate(value.replace(' floor plan at Solvyn City Phase 2','')) + ' — планировка, Solvyn City, этап 2';
  if (value.endsWith(' floor plan at Solvyn City Phase 1')) return translate(value.replace(' floor plan at Solvyn City Phase 1','')) + ' — планировка, Solvyn City, этап 1';
  // Translate specification strings and residence names while retaining brand names.
  if (/^(?:Solvyn City Phase [12]|SOLVYN CITY PHASE [12])/.test(value)) {
    const rest=value.replace(/^(Solvyn City Phase ([12])|SOLVYN CITY PHASE ([12]))/,(_,name,a,b)=>'Solvyn City — Этап '+(a||b));
    return rest.replace(/BUKIT, BALI/g,'БУКИТ, БАЛИ').replace(/Villa type ([123])/g,'Вилла, тип $1').replace(/Apartment 50 m²/g,'Апартаменты 50 м²').replace(/Apartments/g,'Апартаменты').replace(/Studio apartments/g,'Апартаменты-студии').replace(/Two-bedroom penthouse/g,'Пентхаус с двумя спальнями').replace(/One-bedroom villa/g,'Вилла с одной спальней').replace(/([23])-bedroom villa · Type ([12])/g,'Вилла с $1 спальнями · Тип $2').replace(/presentation/g,'презентация');
  }
  if (/^(?:\d|Apartment|Villa type|Studio apartments|One-bedroom villa|Two-bedroom penthouse|Apartments\.)/.test(value)) return value.replace(/Villa type ([123])/g,'Вилла, тип $1').replace(/Apartment(s)?/g,'Апартаменты').replace(/Studio apartments/g,'Апартаменты-студии').replace(/One-bedroom villa/g,'Вилла с одной спальней').replace(/Two-bedroom penthouse/g,'Пентхаус с двумя спальнями').replace(/([23])-bedroom villa · Type ([12])/g,'Вилла с $1 спальнями · Тип $2').replace(/m²/g,'м²').replace(/including rooftop/g,'включая крышу-террасу').replace(/bedrooms/g,'спальни').replace(/bedroom/g,'спальня').replace(/private pool/g,'частный бассейн').replace(/lower-level pool/g,'бассейн на нижнем уровне').replace(/upper-level pool/g,'бассейн на верхнем уровне').replace(/Two private pools/g,'Два частных бассейна').replace(/BUKIT, BALI/g,'БУКИТ, БАЛИ').replace(/Studio/g,'Студия');
  if (/^BUKIT, BALI/.test(value)) return value.replace('BUKIT, BALI','БУКИТ, БАЛИ');
  if (value.endsWith(': show details')) return (russianText[value.slice(0,-14)] || value.slice(0,-14)) + ': подробнее';
  return value;
};
// Preserve option values used by enquiry logic before translating visible labels.
document.querySelectorAll('option:not([value])').forEach(option=>option.value=option.textContent);
const languageObserver = new MutationObserver(records=>{
 if(records.some(record=>!(record.target.nodeType===Node.ELEMENT_NODE?record.target:record.target.parentElement)?.closest('[data-count-to]'))) applyLanguage();
});
function applyLanguage() {
  languageObserver.disconnect();
  document.querySelectorAll('option:not([value])').forEach(option=>option.value=option.textContent);
  const walker = document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node=walker.currentNode;
    if (node.parentElement.closest('script,style,.language-control,.leaflet-control-attribution,[data-count-to]')) continue;
    const current=node.textContent;
    const saved=originalText.get(node);
    const original=saved && (current===saved || current.trim()===translate(saved.trim())) ? saved : current;
    originalText.set(node,original);
    const translated=selectedLanguage==='ru' ? original.replace(original.trim(),translate(original.trim())) : original;
    if(current!==translated) node.textContent=translated;
  }
  document.querySelectorAll('[aria-label],[placeholder],[alt],[title]').forEach(element=>{
    let values=originalAttributes.get(element)||{};
    for(const name of ['aria-label','placeholder','alt','title']) {
      if(!element.hasAttribute(name)) continue;
      const current=element.getAttribute(name);
      if(!values[name] || (current!==values[name] && current!==translate(values[name]))) values[name]=current;
      const next=selectedLanguage==='ru'?translate(values[name]):values[name];
      if(current!==next) element.setAttribute(name,next);
    }
    originalAttributes.set(element,values);
  });
  document.documentElement.lang=selectedLanguage;
  document.querySelectorAll('.language-current').forEach(label=>{if(label.textContent!==selectedLanguage.toUpperCase()) label.textContent=selectedLanguage.toUpperCase();});
  document.querySelectorAll('[data-language]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.language===selectedLanguage)));
  document.title=document.body.dataset.phase ? (selectedLanguage==='ru'?'Solvyn City — Фаза ':'Solvyn City Phase ')+document.body.dataset.phase+' — Sansara Development' : document.body.classList.contains('residences-page') ? (selectedLanguage==='ru'?'Резиденции — Sansara Development':'Residences — Sansara Development') : document.body.classList.contains('projects-page') ? (selectedLanguage==='ru'?'Проекты — Sansara Development':'Projects — Sansara Development') : (selectedLanguage==='ru' ? (document.body.classList.contains('about-page')?'О нас — Sansara Development':'Sansara Development — Жизнь в гармонии.') : (document.body.classList.contains('about-page')?'About Us — Sansara Development':'Sansara Development — A life well lived.'));
  languageObserver.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['aria-label','placeholder','alt','title']});
}
document.querySelectorAll('.language-control').forEach(control => {
  const toggle = control.querySelector('.language-toggle');
  const panel = control.querySelector('.language-options');
  const choices = [...panel.querySelectorAll('[data-language]')];
  const setOpen = open => {
    control.dataset.open = String(open);
    toggle.setAttribute('aria-expanded',String(open));
    panel.inert = !open;
  };
  toggle.addEventListener('click',()=>setOpen(control.dataset.open!=='true'));
  toggle.addEventListener('keydown',event=>{
    if(event.key==='ArrowDown') {event.preventDefault();setOpen(true);choices.find(b=>b.dataset.language===selectedLanguage).focus();}
  });
  choices.forEach(button=>button.addEventListener('click',()=>{
    selectedLanguage=button.dataset.language;
    try {localStorage.setItem('sansara-language',selectedLanguage);} catch {}
    setOpen(false);toggle.focus({preventScroll:true});applyLanguage();
  }));
  control.addEventListener('keydown',event=>{
    if(event.key==='Escape') {event.preventDefault();setOpen(false);toggle.focus({preventScroll:true});}
    const index=choices.indexOf(document.activeElement);
    if(index>=0 && ['ArrowDown','ArrowUp','Home','End'].includes(event.key)) {
      event.preventDefault();
      const next=event.key==='Home'?0:event.key==='End'?choices.length-1:(index+(event.key==='ArrowDown'?1:-1)+choices.length)%choices.length;
      choices[next].focus();
    }
  });
  document.addEventListener('pointerdown',event=>{if(!control.contains(event.target)) setOpen(false);});
  control.addEventListener('focusout',event=>{if(!control.contains(event.relatedTarget))setOpen(false);});
});
applyLanguage();

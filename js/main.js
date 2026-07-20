// ===== Localized intro and app download article =====
function initLocalizedCopy() {
  const email = '<a href="mailto:marswei20@gmail.com">marswei20@gmail.com</a>';
  const translations = {
    en: {
      'nav.appLabel': 'App',
      'nav.appTitle': 'Kiro Book — Global Tag App',
      'nav.appPlatforms': 'iOS · Google Play · China Android',
      'bio.tagline': 'An Earth story collector',
      'bio.languages': 'Four languages: Chinese · English · Français · 日本語',
      'bio.study': '7 years studying in Beijing & Paris',
      'bio.work': '8 years at Huawei & Tencent in Shenzhen',
      'bio.travel': '3 years traversing the globe',
      'bio.life': '<span class="num">1</span> lifetime driven by curiosity & love',
      'app.tag': 'APP',
      'app.lead': 'A travel journal for cafes, bookstores, museums, galleries, select shops, bars, and the small places worth remembering.',
      'app.googlePlayButton': 'Google Play Closed Test',
      'app.chinaAndroidButton': 'China Android',
      'app.appStoreDesc': 'For iPhone users. Scan the QR code or click the button to open the App Store page.',
      'app.openAppStore': 'Open App Store',
      'app.googlePlayDesc': `Android user? Join Closed Testing!<br>Email your Google account to<br>${email} for access.`,
      'app.openTestLink': 'Open Test Link',
      'app.chinaAndroidTitle': 'China Android',
      'app.chinaAndroidDesc': 'China Android users: download APK.<br>Open it to install.<br>Allow unknown sources if prompted.',
      'app.downloadApk': 'Download APK',
      'app.appleScreenshots': 'Apple App Screenshots',
      'app.googleScreenshots': 'Google App Screenshots',
      'app.businessSupport': 'Business & Support',
      'app.supportTitle': 'Support',
      'app.supportDesc': `For product support, billing questions, Google Play test access, or refund requests, contact ${email}.`,
      'app.pricingTitle': 'Product & Pricing',
      'app.pricingDesc': 'Kiro Book is a mobile app for travel and place journaling. The app can be downloaded from App Store, Google Play Closed Test, or China-region APK. Any paid plan or premium feature is shown clearly inside the app before purchase.',
      'app.privacyTitle': 'Privacy',
      'app.privacyDesc': 'Kiro Book is designed for personal journaling. Your entries, photos, places, and notes are treated as private user content. Payment details for the direct Android channel are processed by Stripe and are not stored on this website.',
      'app.termsTitle': 'Terms',
      'app.termsDesc': 'Use Kiro Book for lawful personal record keeping. You are responsible for the content you add and for keeping your own backups when needed.',
      'app.refundsTitle': 'Refunds & Cancellation',
      'app.refundsDesc': 'For App Store or Google Play purchases, refunds and cancellations follow the store&apos;s own policies. For direct Android purchases processed by Stripe, contact support within 14 days. Refund requests are reviewed case by case and approved refunds are returned to the original payment method.',
      'app.storyTitle': 'Story',
      'app.storyP1': 'Kiro Book was built by a traveler who speaks four languages, Chinese · English · Français · 日本語, reads across cultures, and has spent three years moving through the world. It comes from a love for Earth itself: the cities, books, cafes, museums, streets, and people that make each journey worth remembering.',
      'app.storyP2': 'Before the journey, I studied in Beijing and Paris, then worked in China&apos;s internet industry at Huawei and Tencent. Those years taught me to look at systems, products, and people with patience: how cities grow, how tools shape daily life, and how small personal records can become a map of memory.',
      'app.storyP3': 'My curiosity has always moved across disciplines: society, religion, philosophy, probability, film, music, books, and nature. Kiro Book is a quiet attempt to bring those interests back to the ground, one place at a time.'
    },
    es: {
      'nav.appLabel': 'App',
      'nav.appTitle': 'Kiro Book — App global de lugares',
      'nav.appPlatforms': 'iOS · Google Play · Android China',
      'bio.tagline': 'Coleccionista de historias de la Tierra',
      'bio.languages': 'Cuatro idiomas: chino · inglés · français · 日本語',
      'bio.study': '7 años estudiando en Pekín y París',
      'bio.work': '8 años en Huawei y Tencent en Shenzhen',
      'bio.travel': '3 años recorriendo el mundo',
      'bio.life': '<span class="num">1</span> vida guiada por la curiosidad y el amor',
      'app.tag': 'APP',
      'app.lead': 'Un diario de viaje para cafeterías, librerías, museos, galerías, tiendas selectas, bares y esos pequeños lugares que vale la pena recordar.',
      'app.googlePlayButton': 'Prueba cerrada de Google Play',
      'app.chinaAndroidButton': 'Android China',
      'app.appStoreDesc': 'Para usuarios de iPhone. Escanea el QR o toca el botón para abrir la página de App Store.',
      'app.openAppStore': 'Abrir App Store',
      'app.googlePlayDesc': `¿Usas Android? Únete a la prueba.<br>Envía tu cuenta de Google a<br>${email} para acceder.`,
      'app.openTestLink': 'Abrir enlace de prueba',
      'app.chinaAndroidTitle': 'Android China',
      'app.chinaAndroidDesc': 'Usuarios Android en China: descarga APK. Ábrelo para instalar. Permite fuentes desconocidas si se pide.',
      'app.downloadApk': 'Descargar APK',
      'app.appleScreenshots': 'Capturas de la app para Apple',
      'app.googleScreenshots': 'Capturas de la app para Google',
      'app.businessSupport': 'Negocio y soporte',
      'app.supportTitle': 'Soporte',
      'app.supportDesc': `Para soporte del producto, pagos, acceso a Google Play o reembolsos, contacta con ${email}.`,
      'app.pricingTitle': 'Producto y precios',
      'app.pricingDesc': 'Kiro Book es una app móvil para diarios de viaje y lugares. Puede descargarse desde App Store, la prueba cerrada de Google Play o el APK para China. Cualquier plan de pago o función premium se muestra claramente dentro de la app antes de comprar.',
      'app.privacyTitle': 'Privacidad',
      'app.privacyDesc': 'Kiro Book está diseñado para diarios personales. Tus entradas, fotos, lugares y notas se tratan como contenido privado del usuario. Los datos de pago del canal Android directo son procesados por Stripe y no se guardan en este sitio.',
      'app.termsTitle': 'Términos',
      'app.termsDesc': 'Usa Kiro Book para registros personales legales. Eres responsable del contenido que añades y de conservar tus copias de seguridad cuando sea necesario.',
      'app.refundsTitle': 'Reembolsos y cancelación',
      'app.refundsDesc': 'Para compras en App Store o Google Play, los reembolsos y cancelaciones siguen las políticas de cada tienda. Para compras directas de Android procesadas por Stripe, contacta con soporte en un plazo de 14 días. Las solicitudes se revisan caso por caso y los reembolsos aprobados vuelven al método de pago original.',
      'app.storyTitle': 'Historia',
      'app.storyP1': 'Kiro Book fue creado por un viajero que habla cuatro idiomas, chino · inglés · français · 日本語, lee entre culturas y lleva tres años moviéndose por el mundo. Nace de un amor por la Tierra: ciudades, libros, cafeterías, museos, calles y personas que hacen que cada viaje merezca ser recordado.',
      'app.storyP2': 'Antes del viaje estudié en Pekín y París, y luego trabajé en la industria de internet china en Huawei y Tencent. Esos años me enseñaron a observar sistemas, productos y personas con paciencia: cómo crecen las ciudades, cómo las herramientas moldean la vida diaria y cómo pequeños registros personales pueden convertirse en un mapa de memoria.',
      'app.storyP3': 'Mi curiosidad siempre ha cruzado disciplinas: sociedad, religión, filosofía, probabilidad, cine, música, libros y naturaleza. Kiro Book es un intento tranquilo de llevar esos intereses de vuelta al terreno, un lugar a la vez.'
    },
    fr: {
      'nav.appLabel': 'App',
      'nav.appTitle': 'Kiro Book — App mondiale de lieux',
      'nav.appPlatforms': 'iOS · Google Play · Android Chine',
      'bio.tagline': 'Collectionneur d’histoires de la Terre',
      'bio.languages': 'Quatre langues : chinois · anglais · français · 日本語',
      'bio.study': '7 ans d’études à Pékin et Paris',
      'bio.work': '8 ans chez Huawei et Tencent à Shenzhen',
      'bio.travel': '3 ans à traverser le monde',
      'bio.life': '<span class="num">1</span> vie portée par la curiosité et l’amour',
      'app.tag': 'APP',
      'app.lead': 'Un carnet de voyage pour cafés, librairies, musées, galeries, concept stores, bars et petits lieux qui méritent d’être gardés en mémoire.',
      'app.googlePlayButton': 'Test fermé Google Play',
      'app.chinaAndroidButton': 'Android Chine',
      'app.appStoreDesc': 'Pour les utilisateurs d’iPhone. Scannez le QR code ou cliquez sur le bouton pour ouvrir la page App Store.',
      'app.openAppStore': 'Ouvrir App Store',
      'app.googlePlayDesc': `Android ? Rejoignez le test fermé.<br>Envoyez votre compte Google à<br>${email} pour l’accès.`,
      'app.openTestLink': 'Ouvrir le lien de test',
      'app.chinaAndroidTitle': 'Android Chine',
      'app.chinaAndroidDesc': 'Android en Chine : téléchargez l’APK. Ouvrez-le pour installer. Autorisez les sources inconnues.',
      'app.downloadApk': 'Télécharger APK',
      'app.appleScreenshots': 'Captures d’écran Apple',
      'app.googleScreenshots': 'Captures d’écran Google',
      'app.businessSupport': 'Activité et support',
      'app.supportTitle': 'Support',
      'app.supportDesc': `Pour le support produit, la facturation, l’accès au test Google Play ou les remboursements, contactez ${email}.`,
      'app.pricingTitle': 'Produit et tarifs',
      'app.pricingDesc': 'Kiro Book est une application mobile de carnet de voyage et de lieux. Elle peut être téléchargée depuis l’App Store, le test fermé Google Play ou l’APK pour la Chine. Tout forfait payant ou toute fonction premium est indiqué clairement dans l’app avant achat.',
      'app.privacyTitle': 'Confidentialité',
      'app.privacyDesc': 'Kiro Book est conçu pour le journal personnel. Vos entrées, photos, lieux et notes sont traités comme du contenu privé. Les paiements du canal Android direct sont traités par Stripe et ne sont pas stockés sur ce site.',
      'app.termsTitle': 'Conditions',
      'app.termsDesc': 'Utilisez Kiro Book pour une tenue de journal personnelle et légale. Vous êtes responsable du contenu ajouté et de vos sauvegardes lorsque nécessaire.',
      'app.refundsTitle': 'Remboursements et annulation',
      'app.refundsDesc': 'Pour les achats App Store ou Google Play, les remboursements et annulations suivent les politiques des boutiques. Pour les achats Android directs traités par Stripe, contactez le support sous 14 jours. Les demandes sont examinées au cas par cas et les remboursements approuvés reviennent au moyen de paiement initial.',
      'app.storyTitle': 'Histoire',
      'app.storyP1': 'Kiro Book a été créé par un voyageur qui parle quatre langues, chinois · anglais · français · 日本語, lit entre les cultures et parcourt le monde depuis trois ans. Il naît d’un amour pour la Terre elle-même : villes, livres, cafés, musées, rues et personnes qui rendent chaque voyage mémorable.',
      'app.storyP2': 'Avant le voyage, j’ai étudié à Pékin et à Paris, puis travaillé dans l’internet chinois chez Huawei et Tencent. Ces années m’ont appris à regarder systèmes, produits et personnes avec patience : comment les villes grandissent, comment les outils façonnent la vie quotidienne et comment de petites traces personnelles deviennent une carte de mémoire.',
      'app.storyP3': 'Ma curiosité traverse toujours les disciplines : société, religion, philosophie, probabilité, cinéma, musique, livres et nature. Kiro Book est une tentative discrète de ramener ces intérêts au sol, un lieu après l’autre.'
    },
    zh: {
      'nav.appLabel': '应用',
      'nav.appTitle': 'Kiro Book — 全球探店 App',
      'nav.appPlatforms': 'iOS · Google Play · 中国区安卓',
      'bio.tagline': '地球故事收藏者',
      'bio.languages': '四种语言：中文 · English · Français · 日本語',
      'bio.study': '7 年求学于北京与巴黎',
      'bio.work': '8 年在深圳的华为与腾讯工作',
      'bio.travel': '3 年穿行世界',
      'bio.life': '<span class="num">1</span> 生由好奇与爱驱动',
      'app.tag': '应用',
      'app.lead': '一款旅行手账，用来记录咖啡馆、书店、博物馆、美术馆、买手店、酒吧，以及那些值得记住的小地方。',
      'app.googlePlayButton': 'Google Play 封闭测试',
      'app.chinaAndroidButton': '中国区安卓',
      'app.appStoreDesc': '适用于 iPhone 用户。<br>扫描二维码，或点击按钮<br>打开 App Store 页面。',
      'app.openAppStore': '打开 App Store',
      'app.googlePlayDesc': `Android 用户？加入封闭测试！<br>请将你的 Google 账号邮箱发送至<br>${email} 获取测试权限。`,
      'app.openTestLink': '打开测试链接',
      'app.chinaAndroidTitle': '中国区安卓',
      'app.chinaAndroidDesc': '中国区 Android 用户可直接下载。<br>下载后打开 APK 完成安装。<br>如系统提示，请允许安装未知来源应用。',
      'app.downloadApk': '下载 APK',
      'app.appleScreenshots': 'Apple App 截图',
      'app.googleScreenshots': 'Google App 截图',
      'app.businessSupport': '商务与支持',
      'app.supportTitle': '支持',
      'app.supportDesc': `产品支持、账单问题、Google Play 测试权限或退款请求，请联系 ${email}。`,
      'app.pricingTitle': '产品与价格',
      'app.pricingDesc': 'Kiro Book 是一款用于旅行与地点记录的移动应用。你可以通过 App Store、Google Play 封闭测试或中国区 APK 下载。任何付费方案或高级功能，都会在购买前于 App 内清楚展示。',
      'app.privacyTitle': '隐私',
      'app.privacyDesc': 'Kiro Book 为个人手账而设计。你的记录、照片、地点和笔记都被视为私密用户内容。直接安卓渠道的付款信息由 Stripe 处理，不会储存在本网站。',
      'app.termsTitle': '条款',
      'app.termsDesc': '请将 Kiro Book 用于合法的个人记录。你需要对自己添加的内容负责，并在需要时自行保留备份。',
      'app.refundsTitle': '退款与取消',
      'app.refundsDesc': 'App Store 或 Google Play 购买的退款与取消遵循各应用商店政策。直接安卓购买由 Stripe 处理，请在 14 天内联系支持。退款请求将逐案审核，获批退款会退回原付款方式。',
      'app.storyTitle': '故事',
      'app.storyP1': 'Kiro Book 由一位旅行者制作。他会四种语言，中文 · English · Français · 日本語，跨文化阅读，并已经花了三年时间在世界中移动。它来自对地球本身的爱：城市、书、咖啡馆、博物馆、街道和人，让每一段旅程值得被记住。',
      'app.storyP2': '出发之前，我在北京和巴黎求学，后来在华为与腾讯从事中国互联网工作。那些年教会我耐心地观察系统、产品和人：城市如何生长，工具如何塑造日常生活，而细小的个人记录如何成为记忆地图。',
      'app.storyP3': '我的好奇心一直横跨许多领域：社会、宗教、哲学、概率、电影、音乐、书籍和自然。Kiro Book 是一次安静的尝试，把这些兴趣重新带回地面，一次记录一个地方。'
    },
    'zh-Hant': {
      'nav.appLabel': '應用',
      'nav.appTitle': 'Kiro Book — 全球探店 App',
      'nav.appPlatforms': 'iOS · Google Play · 中國區安卓',
      'bio.tagline': '地球故事收藏者',
      'bio.languages': '四種語言：中文 · English · Français · 日本語',
      'bio.study': '7 年求學於北京與巴黎',
      'bio.work': '8 年在深圳的華為與騰訊工作',
      'bio.travel': '3 年穿行世界',
      'bio.life': '<span class="num">1</span> 生由好奇與愛驅動',
      'app.tag': '應用',
      'app.lead': '一款旅行手帳，用來記錄咖啡館、書店、博物館、美術館、買手店、酒吧，以及那些值得記住的小地方。',
      'app.googlePlayButton': 'Google Play 封閉測試',
      'app.chinaAndroidButton': '中國區安卓',
      'app.appStoreDesc': '適用於 iPhone 使用者。<br>掃描 QR Code，或點擊按鈕<br>開啟 App Store 頁面。',
      'app.openAppStore': '開啟 App Store',
      'app.googlePlayDesc': `Android 使用者？加入封閉測試！<br>請將你的 Google 帳號信箱寄至<br>${email} 取得測試權限。`,
      'app.openTestLink': '開啟測試連結',
      'app.chinaAndroidTitle': '中國區安卓',
      'app.chinaAndroidDesc': '中國區 Android 使用者可直接下載。<br>下載後開啟 APK 完成安裝。<br>如系統提示，請允許安裝未知來源應用。',
      'app.downloadApk': '下載 APK',
      'app.appleScreenshots': 'Apple App 截圖',
      'app.googleScreenshots': 'Google App 截圖',
      'app.businessSupport': '商務與支援',
      'app.supportTitle': '支援',
      'app.supportDesc': `產品支援、帳單問題、Google Play 測試權限或退款請求，請聯絡 ${email}。`,
      'app.pricingTitle': '產品與價格',
      'app.pricingDesc': 'Kiro Book 是一款用於旅行與地點記錄的行動應用。你可以透過 App Store、Google Play 封閉測試或中國區 APK 下載。任何付費方案或進階功能，都會在購買前於 App 內清楚顯示。',
      'app.privacyTitle': '隱私',
      'app.privacyDesc': 'Kiro Book 為個人手帳而設計。你的記錄、照片、地點和筆記都被視為私密使用者內容。直接安卓渠道的付款資訊由 Stripe 處理，不會儲存在本網站。',
      'app.termsTitle': '條款',
      'app.termsDesc': '請將 Kiro Book 用於合法的個人記錄。你需要對自己新增的內容負責，並在需要時自行保留備份。',
      'app.refundsTitle': '退款與取消',
      'app.refundsDesc': 'App Store 或 Google Play 購買的退款與取消遵循各應用商店政策。直接安卓購買由 Stripe 處理，請在 14 天內聯絡支援。退款請求將逐案審核，獲批退款會退回原付款方式。',
      'app.storyTitle': '故事',
      'app.storyP1': 'Kiro Book 由一位旅行者製作。他會四種語言，中文 · English · Français · 日本語，跨文化閱讀，並已經花了三年時間在世界中移動。它來自對地球本身的愛：城市、書、咖啡館、博物館、街道和人，讓每一段旅程值得被記住。',
      'app.storyP2': '出發之前，我在北京和巴黎求學，後來在華為與騰訊從事中國網際網路工作。那些年教會我耐心地觀察系統、產品和人：城市如何生長，工具如何塑造日常生活，而細小的個人記錄如何成為記憶地圖。',
      'app.storyP3': '我的好奇心一直橫跨許多領域：社會、宗教、哲學、機率、電影、音樂、書籍和自然。Kiro Book 是一次安靜的嘗試，把這些興趣重新帶回地面，一次記錄一個地方。'
    },
    ja: {
      'nav.appLabel': 'アプリ',
      'nav.appTitle': 'Kiro Book — 世界の場所記録アプリ',
      'nav.appPlatforms': 'iOS · Google Play · 中国向けAndroid',
      'bio.tagline': '地球の物語を集める人',
      'bio.languages': '4つの言語：中国語 · English · Français · 日本語',
      'bio.study': '北京とパリで7年間学ぶ',
      'bio.work': '深圳のHuaweiとTencentで8年間勤務',
      'bio.travel': '3年間、世界を旅する',
      'bio.life': '<span class="num">1</span>つの人生を好奇心と愛で進む',
      'app.tag': 'アプリ',
      'app.lead': 'カフェ、書店、博物館、ギャラリー、セレクトショップ、バー、そして記憶に残したい小さな場所のための旅の手帳です。',
      'app.googlePlayButton': 'Google Play クローズドテスト',
      'app.chinaAndroidButton': '中国向けAndroid',
      'app.appStoreDesc': 'iPhone ユーザー向けです。QRコードを読み取るか、ボタンから App Store ページを開いてください。',
      'app.openAppStore': 'App Storeを開く',
      'app.googlePlayDesc': `Androidユーザーですか？テストに参加。Googleアカウントのメールを ${email} へ送ってください。`,
      'app.openTestLink': 'テストリンクを開く',
      'app.chinaAndroidTitle': '中国向けAndroid',
      'app.chinaAndroidDesc': '中国のAndroidユーザーはAPKを直接ダウンロードできます。開いてインストールし、必要なら不明な提供元を許可してください。',
      'app.downloadApk': 'APKをダウンロード',
      'app.appleScreenshots': 'Apple版スクリーンショット',
      'app.googleScreenshots': 'Google版スクリーンショット',
      'app.businessSupport': 'ビジネスとサポート',
      'app.supportTitle': 'サポート',
      'app.supportDesc': `製品サポート、請求、Google Play テスト参加、返金については ${email} までご連絡ください。`,
      'app.pricingTitle': '製品と価格',
      'app.pricingDesc': 'Kiro Book は旅と場所を記録するためのモバイルアプリです。App Store、Google Play クローズドテスト、または中国向けAPKからダウンロードできます。有料プランやプレミアム機能は、購入前にアプリ内で明確に表示されます。',
      'app.privacyTitle': 'プライバシー',
      'app.privacyDesc': 'Kiro Book は個人の日記のために設計されています。記録、写真、場所、メモはユーザーのプライベートな内容として扱われます。直接Androidチャネルの支払い情報はStripeが処理し、このサイトには保存されません。',
      'app.termsTitle': '利用規約',
      'app.termsDesc': 'Kiro Book は合法的な個人記録のために使用してください。追加する内容と、必要なバックアップの管理はご自身の責任です。',
      'app.refundsTitle': '返金とキャンセル',
      'app.refundsDesc': 'App Store または Google Play での購入は、各ストアの返金・キャンセルポリシーに従います。Stripeで処理される直接Android購入については、14日以内にサポートへご連絡ください。返金リクエストは個別に審査され、承認された返金は元の支払い方法に戻されます。',
      'app.storyTitle': 'ストーリー',
      'app.storyP1': 'Kiro Book は、4つの言語、中国語 · English · Français · 日本語を話し、文化を越えて読み、3年間世界を移動してきた旅人によって作られました。都市、本、カフェ、博物館、通り、人々。旅を記憶に残すものへの、地球そのものへの愛から生まれました。',
      'app.storyP2': '旅に出る前、私は北京とパリで学び、その後HuaweiとTencentで中国のインターネット業界に関わりました。その年月は、都市がどう育つか、道具が日々の生活をどう形づくるか、小さな個人の記録がどう記憶の地図になるかを、忍耐強く見ることを教えてくれました。',
      'app.storyP3': '私の好奇心はいつも、社会、宗教、哲学、確率、映画、音楽、本、自然を横断しています。Kiro Book は、それらの関心を地面に戻し、一つの場所ずつ記録する静かな試みです。'
    },
    ko: {
      'nav.appLabel': '앱',
      'nav.appTitle': 'Kiro Book — 글로벌 장소 기록 앱',
      'nav.appPlatforms': 'iOS · Google Play · 중국 Android',
      'bio.tagline': '지구의 이야기를 모으는 사람',
      'bio.languages': '네 가지 언어: 중국어 · English · Français · 日本語',
      'bio.study': '베이징과 파리에서 7년간 공부',
      'bio.work': '선전의 Huawei와 Tencent에서 8년 근무',
      'bio.travel': '3년간 세계를 여행',
      'bio.life': '<span class="num">1</span>번의 삶, 호기심과 사랑으로 움직이다',
      'app.tag': '앱',
      'app.lead': '카페, 서점, 박물관, 갤러리, 셀렉트숍, 바, 그리고 기억하고 싶은 작은 장소들을 위한 여행 저널입니다.',
      'app.googlePlayButton': 'Google Play 비공개 테스트',
      'app.chinaAndroidButton': '중국 Android',
      'app.appStoreDesc': 'iPhone 사용자를 위한 버전입니다. QR 코드를 스캔하거나 버튼을 눌러 App Store 페이지를 여세요.',
      'app.openAppStore': 'App Store 열기',
      'app.googlePlayDesc': `Android 사용자라면 테스트에 참여하세요. Google 계정 이메일을 ${email} 로 보내주세요.`,
      'app.openTestLink': '테스트 링크 열기',
      'app.chinaAndroidTitle': '중국 Android',
      'app.chinaAndroidDesc': '중국 Android 사용자는 APK를 직접 받을 수 있습니다. 열어서 설치하고, 필요하면 알 수 없는 출처를 허용하세요.',
      'app.downloadApk': 'APK 다운로드',
      'app.appleScreenshots': 'Apple 앱 스크린샷',
      'app.googleScreenshots': 'Google 앱 스크린샷',
      'app.businessSupport': '비즈니스 및 지원',
      'app.supportTitle': '지원',
      'app.supportDesc': `제품 지원, 결제, Google Play 테스트 접근 또는 환불 문의는 ${email} 로 연락하세요.`,
      'app.pricingTitle': '제품 및 가격',
      'app.pricingDesc': 'Kiro Book은 여행과 장소 기록을 위한 모바일 앱입니다. App Store, Google Play 비공개 테스트 또는 중국 지역 APK로 다운로드할 수 있습니다. 유료 플랜이나 프리미엄 기능은 구매 전에 앱 안에서 명확히 표시됩니다.',
      'app.privacyTitle': '개인정보',
      'app.privacyDesc': 'Kiro Book은 개인 저널을 위해 설계되었습니다. 기록, 사진, 장소, 메모는 개인 사용자 콘텐츠로 처리됩니다. 직접 Android 채널의 결제 정보는 Stripe가 처리하며 이 웹사이트에 저장되지 않습니다.',
      'app.termsTitle': '이용 약관',
      'app.termsDesc': 'Kiro Book은 합법적인 개인 기록 용도로 사용하세요. 추가하는 콘텐츠와 필요한 백업 관리는 사용자 본인의 책임입니다.',
      'app.refundsTitle': '환불 및 취소',
      'app.refundsDesc': 'App Store 또는 Google Play 구매의 환불과 취소는 각 스토어 정책을 따릅니다. Stripe로 처리되는 직접 Android 구매는 14일 이내에 지원팀에 문의하세요. 환불 요청은 건별로 검토되며 승인된 환불은 원래 결제 수단으로 반환됩니다.',
      'app.storyTitle': '이야기',
      'app.storyP1': 'Kiro Book은 중국어 · English · Français · 日本語 네 가지 언어를 사용하고, 여러 문화를 읽으며, 3년 동안 세계를 이동해 온 여행자가 만들었습니다. 도시, 책, 카페, 박물관, 거리와 사람들처럼 여행을 기억할 만하게 만드는 것들, 지구 자체에 대한 애정에서 출발했습니다.',
      'app.storyP2': '여행 전에는 베이징과 파리에서 공부했고, 이후 Huawei와 Tencent에서 중국 인터넷 산업을 경험했습니다. 그 시간은 도시가 어떻게 자라고, 도구가 일상을 어떻게 바꾸며, 작은 개인 기록이 어떻게 기억의 지도가 되는지 차분히 바라보는 법을 알려주었습니다.',
      'app.storyP3': '저의 호기심은 늘 사회, 종교, 철학, 확률, 영화, 음악, 책, 자연을 가로지릅니다. Kiro Book은 그 관심들을 다시 땅 위로 가져와 한 장소씩 기록하려는 조용한 시도입니다.'
    },
    ar: {
      'nav.appLabel': 'تطبيق',
      'nav.appTitle': 'Kiro Book — تطبيق عالمي لتسجيل الأماكن',
      'nav.appPlatforms': 'iOS · Google Play · أندرويد الصين',
      'bio.tagline': 'جامع حكايات الأرض',
      'bio.languages': 'أربع لغات: الصينية · الإنجليزية · الفرنسية · اليابانية',
      'bio.study': '7 سنوات من الدراسة في بكين وباريس',
      'bio.work': '8 سنوات في Huawei وTencent في شنجن',
      'bio.travel': '3 سنوات في التجوال حول العالم',
      'bio.life': '<span class="num">1</span> حياة تقودها الفضول والمحبة',
      'app.tag': 'تطبيق',
      'app.lead': 'دفتر سفر للمقاهي والمكتبات والمتاحف والمعارض والمتاجر المختارة والحانات والأماكن الصغيرة التي تستحق التذكر.',
      'app.googlePlayButton': 'اختبار Google Play المغلق',
      'app.chinaAndroidButton': 'أندرويد الصين',
      'app.appStoreDesc': 'لمستخدمي iPhone. امسح رمز QR أو اضغط الزر لفتح صفحة App Store.',
      'app.openAppStore': 'فتح App Store',
      'app.googlePlayDesc': `تستخدم Android؟ انضم للاختبار. أرسل بريد حساب Google إلى ${email} للوصول.`,
      'app.openTestLink': 'فتح رابط الاختبار',
      'app.chinaAndroidTitle': 'أندرويد الصين',
      'app.chinaAndroidDesc': 'لمستخدمي Android في الصين: نزّل APK وافتحه للتثبيت. اسمح بالمصادر غير المعروفة عند الحاجة.',
      'app.downloadApk': 'تنزيل APK',
      'app.appleScreenshots': 'لقطات شاشة تطبيق Apple',
      'app.googleScreenshots': 'لقطات شاشة تطبيق Google',
      'app.businessSupport': 'الأعمال والدعم',
      'app.supportTitle': 'الدعم',
      'app.supportDesc': `لدعم المنتج أو الفواتير أو الوصول لاختبار Google Play أو طلبات الاسترداد، تواصل عبر ${email}.`,
      'app.pricingTitle': 'المنتج والأسعار',
      'app.pricingDesc': 'Kiro Book تطبيق جوال لتوثيق السفر والأماكن. يمكن تنزيله من App Store أو اختبار Google Play المغلق أو APK الخاص بالصين. تظهر أي خطة مدفوعة أو ميزة مميزة بوضوح داخل التطبيق قبل الشراء.',
      'app.privacyTitle': 'الخصوصية',
      'app.privacyDesc': 'صُمم Kiro Book للتدوين الشخصي. تُعامل إدخالاتك وصورك وأماكنك وملاحظاتك كمحتوى خاص بالمستخدم. تتم معالجة تفاصيل الدفع لقناة Android المباشرة عبر Stripe ولا تُخزن على هذا الموقع.',
      'app.termsTitle': 'الشروط',
      'app.termsDesc': 'استخدم Kiro Book للتوثيق الشخصي القانوني. أنت مسؤول عن المحتوى الذي تضيفه وعن الاحتفاظ بنسخك الاحتياطية عند الحاجة.',
      'app.refundsTitle': 'الاسترداد والإلغاء',
      'app.refundsDesc': 'بالنسبة لمشتريات App Store أو Google Play، تخضع الاستردادات والإلغاءات لسياسات المتجر. لمشتريات Android المباشرة التي تعالجها Stripe، تواصل مع الدعم خلال 14 يومًا. تُراجع طلبات الاسترداد كل حالة على حدة، وتُعاد المبالغ الموافق عليها إلى وسيلة الدفع الأصلية.',
      'app.storyTitle': 'القصة',
      'app.storyP1': 'صُنع Kiro Book بواسطة مسافر يتحدث أربع لغات، الصينية · الإنجليزية · الفرنسية · اليابانية، ويقرأ عبر الثقافات، وقضى ثلاث سنوات يتحرك في العالم. يأتي من حب للأرض نفسها: المدن والكتب والمقاهي والمتاحف والشوارع والناس الذين يجعلون كل رحلة جديرة بالتذكر.',
      'app.storyP2': 'قبل الرحلة، درست في بكين وباريس، ثم عملت في صناعة الإنترنت الصينية في Huawei وTencent. علمتني تلك السنوات أن أنظر بصبر إلى الأنظمة والمنتجات والناس: كيف تنمو المدن، وكيف تشكل الأدوات الحياة اليومية، وكيف يمكن للسجلات الشخصية الصغيرة أن تصبح خريطة للذاكرة.',
      'app.storyP3': 'لطالما تحرك فضولي بين مجالات كثيرة: المجتمع والدين والفلسفة والاحتمالات والسينما والموسيقى والكتب والطبيعة. Kiro Book محاولة هادئة لإعادة تلك الاهتمامات إلى الأرض، مكانًا بعد مكان.'
    }
  };

  function normalizeLanguage(language) {
    const lang = language.toLowerCase();
    if (lang.startsWith('zh')) {
      if (lang.includes('tw') || lang.includes('hk') || lang.includes('mo') || lang.includes('hant')) return 'zh-Hant';
      return 'zh';
    }
    if (lang.startsWith('es')) return 'es';
    if (lang.startsWith('fr')) return 'fr';
    if (lang.startsWith('ja')) return 'ja';
    if (lang.startsWith('ko')) return 'ko';
    if (lang.startsWith('ar')) return 'ar';
    if (lang.startsWith('en')) return 'en';
    return '';
  }

  const languages = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'en'];
  const locale = languages.map(normalizeLanguage).find(Boolean) || 'en';
  const copy = translations[locale] || translations.en;
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const value = copy[element.dataset.i18n] || translations.en[element.dataset.i18n];
    if (value) element.innerHTML = value;
  });

  document.documentElement.lang = locale;
  document.querySelector('.sidebar-header')?.setAttribute('dir', direction);
  document.querySelector('[data-i18n-region="appDownload"]')?.setAttribute('dir', direction);
}

document.addEventListener('DOMContentLoaded', initLocalizedCopy);

// ===== Article switching =====
function isMobile() {
  return window.innerWidth <= 768;
}

function initArticles() {
  const items = document.querySelectorAll('.sidebar-articles .article-item[data-article]');
  const views = document.querySelectorAll('.main .article-view');
  const main  = document.querySelector('.main');
  const backBtn = document.getElementById('backBtn');

  function hashForArticle(id) {
    return `#article-${encodeURIComponent(id)}`;
  }

  function articleFromHash() {
    const match = location.hash.match(/^#article-(.+)$/);
    return match ? decodeURIComponent(match[1]) : '';
  }

  function articleExists(id) {
    return Array.from(views).some(view => view.dataset.article === id);
  }

  function setActiveArticle(id, options = {}) {
    if (!articleExists(id)) return false;

    const { push = false, openOnMobile = false, scroll = true } = options;

    items.forEach(i => {
      const active = i.dataset.article === id;
      i.classList.toggle('active', active);
      i.setAttribute('aria-current', active ? 'true' : 'false');
    });
    views.forEach(v => v.classList.toggle('active', v.dataset.article === id));

    if (push) {
      history.pushState({ article: id }, '', hashForArticle(id));
    } else {
      const currentHashArticle = articleFromHash();
      const nextUrl = currentHashArticle === id ? hashForArticle(id) : location.pathname + location.search;
      history.replaceState({ article: id }, '', nextUrl);
    }

    if (isMobile() && openOnMobile) {
      document.body.classList.add('show-article');
      if (scroll) window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (scroll) {
      main.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return true;
  }

  items.forEach(item => {
    item.setAttribute('role', 'button');
    item.setAttribute('tabindex', '0');
    item.addEventListener('click', () => {
      setActiveArticle(item.dataset.article, { push: true, openOnMobile: true });
    });
    item.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        setActiveArticle(item.dataset.article, { push: true, openOnMobile: true });
      }
    });
  });

  function goBack() {
    document.body.classList.remove('show-article');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (location.hash) {
      history.pushState({}, '', location.pathname + location.search);
    }
    // Close playlist instantly
    const pl = document.getElementById('playerPlaylist');
    if (pl) {
      pl.style.transition = 'none';
      pl.classList.remove('touch-open');
      setTimeout(() => { pl.style.transition = ''; }, 50);
    }
  }

  backBtn.addEventListener('click', goBack);

  const initialActive = document.querySelector('.sidebar-articles .article-item.active[data-article]');
  const hashArticle = articleFromHash();
  if (hashArticle && articleExists(hashArticle)) {
    setActiveArticle(hashArticle, { openOnMobile: isMobile(), scroll: false });
  } else if (initialActive) {
    setActiveArticle(initialActive.dataset.article, { scroll: false });
  }

  const shouldOpenActiveOnMobile = location.pathname.endsWith('/index.html');
  if (isMobile() && initialActive && shouldOpenActiveOnMobile && !hashArticle) {
    document.body.classList.add('show-article');
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  // Browser native back button / Android back button
  window.addEventListener('popstate', () => {
    const id = articleFromHash();
    if (id && articleExists(id)) {
      setActiveArticle(id, { openOnMobile: isMobile() });
      return;
    }

    if (isMobile()) {
      document.body.classList.remove('show-article');
    }
  });

}

document.addEventListener('DOMContentLoaded', initArticles);

// ===== Music Player =====
function initMusicPlayer() {
  const tracks = [
    { file: 'music/坂本龙一-energy flow.ogg',                                              display: '坂本龙一 — Energy Flow',              title: 'Energy Flow' },
    { file: 'music/坂本龙一,Jaques Morelenbaum,Judy Kang-Merry Christmas Mr. Lawrence.ogg', display: 'Sakamoto — Merry Christmas Mr. Lawrence', title: 'Merry Christmas Mr. Lawrence' },
    { file: 'music/风云-孤星独吟 (萧版).ogg',                                               display: '风云 — 孤星独吟',                      title: 'Lone Star Lament' },
    { file: 'music/日向敏文-End Title (Inst.).ogg',                                         display: '日向敏文 — End Title',                 title: 'End Title' },
    { file: 'music/James Horner-A Gift of a Thistle.ogg',                                  display: 'James Horner — A Gift of a Thistle',   title: 'A Gift of a Thistle' },
    { file: 'music/Bruno Coulais-Morhange (口白).ogg',                                     display: 'Bruno Coulais — Morhange',             title: 'Morhange' },
    { file: 'music/Cagnet-Silent Emotion.ogg',                                             display: 'Cagnet — Silent Emotion',              title: 'Silent Emotion' },
    { file: 'music/纯音乐-思君黯然.ogg',                                                    display: '纯音乐 — 思君黯然',                    title: 'Pining in Silence' },
    { file: 'music/日向敏文-Good Evening Heartache.ogg',                                   display: '日向敏文 — Good Evening Heartache',    title: 'Good Evening Heartache' },
  ];

  const MODES    = ['sequential', 'shuffle', 'single'];
  const MODE_ICON  = { sequential: '↻', shuffle: '⇄', single: '⟳' };
  const MODE_TITLE = { sequential: 'Loop All', shuffle: 'Shuffle', single: 'Repeat One' };

  let currentIndex = 0;
  let mode = 'sequential';
  let isPlaying = false;
  let shuffleOrder = [];

  const audio = new Audio();
  audio.preload = 'metadata';

  const trackNameEl    = document.getElementById('playerTrackName');
  const playBtn        = document.getElementById('playerPlay');
  const prevBtn        = document.getElementById('playerPrev');
  const nextBtn        = document.getElementById('playerNext');
  const modeBtn        = document.getElementById('playerMode');
  const progressFill   = document.getElementById('playerProgressFill');
  const progressBar    = document.getElementById('playerProgressBar');
  const currentTimeEl  = document.getElementById('playerCurrentTime');
  const durationEl     = document.getElementById('playerDuration');
  const playlistEl     = document.getElementById('playerPlaylist');
  const playlistWrap   = document.getElementById('playerPlaylistWrap');
  const playlistBtn    = document.getElementById('playerPlaylistBtn');

  function updatePlayButton() {
    playBtn.textContent = isPlaying ? '⏸' : '▶';
    playBtn.setAttribute('aria-pressed', isPlaying ? 'true' : 'false');
    playBtn.setAttribute('aria-label', isPlaying ? 'Pause music' : 'Play music');
  }

  function fmt(t) {
    if (!t || isNaN(t)) return '0:00';
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  }

  function buildShuffle() {
    const others = [...Array(tracks.length).keys()].filter(i => i !== currentIndex);
    for (let i = others.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [others[i], others[j]] = [others[j], others[i]];
    }
    shuffleOrder = [currentIndex, ...others];
  }

  function updatePlaylistActive() {
    playlistEl.querySelectorAll('li').forEach((li, i) => {
      li.classList.toggle('active', i === currentIndex);
    });
  }

  function loadTrack(idx, autoPlay) {
    currentIndex = idx;
    audio.src = tracks[idx].file;
    trackNameEl.textContent = tracks[idx].title;
    progressFill.style.width = '0%';
    currentTimeEl.textContent = '0:00';
    durationEl.textContent = '0:00';
    updatePlaylistActive();
    if (autoPlay) {
      audio.play()
        .then(() => {
          isPlaying = true;
          updatePlayButton();
        })
        .catch(() => {
          isPlaying = false;
          updatePlayButton();
        });
    } else {
      isPlaying = false;
      updatePlayButton();
    }
  }

  // Build playlist items
  tracks.forEach((t, i) => {
    const li = document.createElement('li');
    li.textContent = t.title;
    li.setAttribute('role', 'button');
    li.setAttribute('tabindex', '0');
    li.addEventListener('click', () => loadTrack(i, true));
    li.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        loadTrack(i, true);
      }
    });
    playlistEl.appendChild(li);
  });

  // Mobile: toggle playlist on tap; desktop: hover handled by CSS
  let playlistOpen = false;

  playlistBtn.addEventListener('click', e => {
    e.stopPropagation();
    playlistOpen = !playlistOpen;
    if (!playlistOpen) {
      playlistEl.style.transition = 'none';
      setTimeout(() => { playlistEl.style.transition = ''; }, 50);
    }
    playlistEl.classList.toggle('touch-open', playlistOpen);
    playlistBtn.setAttribute('aria-expanded', playlistOpen ? 'true' : 'false');
  });

  document.addEventListener('click', e => {
    if (playlistOpen && !playlistWrap.contains(e.target)) {
      playlistOpen = false;
      playlistEl.style.transition = 'opacity 0.1s, visibility 0s 0.1s';
      playlistEl.classList.remove('touch-open');
      playlistBtn.setAttribute('aria-expanded', 'false');
      setTimeout(() => { playlistEl.style.transition = ''; }, 150);
    }
  });

  function nextIdx() {
    if (mode === 'single') return currentIndex;
    if (mode === 'shuffle') {
      const pos = shuffleOrder.indexOf(currentIndex);
      return shuffleOrder[(pos + 1) % shuffleOrder.length];
    }
    return (currentIndex + 1) % tracks.length;
  }

  function prevIdx() {
    if (mode === 'single') return currentIndex;
    if (mode === 'shuffle') {
      const pos = shuffleOrder.indexOf(currentIndex);
      return shuffleOrder[(pos - 1 + shuffleOrder.length) % shuffleOrder.length];
    }
    return (currentIndex - 1 + tracks.length) % tracks.length;
  }

  playBtn.addEventListener('click', () => {
    if (isPlaying) {
      audio.pause();
      isPlaying = false;
      updatePlayButton();
    } else {
      audio.play()
        .then(() => {
          isPlaying = true;
          updatePlayButton();
        })
        .catch(() => {
          isPlaying = false;
          updatePlayButton();
        });
    }
  });

  prevBtn.addEventListener('click', () => {
    if (audio.currentTime > 3) { audio.currentTime = 0; }
    else { loadTrack(prevIdx(), isPlaying); }
  });

  nextBtn.addEventListener('click', () => loadTrack(nextIdx(), isPlaying));

  modeBtn.addEventListener('click', () => {
    const idx = MODES.indexOf(mode);
    mode = MODES[(idx + 1) % MODES.length];
    modeBtn.textContent = MODE_ICON[mode];
    modeBtn.title = MODE_TITLE[mode];
    modeBtn.setAttribute('aria-label', `Playback mode: ${MODE_TITLE[mode].toLowerCase()}`);
    modeBtn.classList.toggle('shuffle', mode === 'shuffle');
    if (mode === 'shuffle') buildShuffle();
  });

  audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
      const progress = (audio.currentTime / audio.duration) * 100;
      progressFill.style.width = `${progress}%`;
      progressBar.setAttribute('aria-valuenow', Math.round(progress).toString());
      currentTimeEl.textContent = fmt(audio.currentTime);
    }
  });

  audio.addEventListener('loadedmetadata', () => { durationEl.textContent = fmt(audio.duration); });
  audio.addEventListener('pause', () => {
    isPlaying = false;
    updatePlayButton();
  });
  audio.addEventListener('play', () => {
    isPlaying = true;
    updatePlayButton();
  });
  audio.addEventListener('ended', () => loadTrack(nextIdx(), true));

  function seekByPointer(e) {
    if (!audio.duration) return;
    const r = progressBar.getBoundingClientRect();
    audio.currentTime = ((e.clientX - r.left) / r.width) * audio.duration;
  }

  progressBar.addEventListener('click', seekByPointer);
  progressBar.addEventListener('keydown', event => {
    if (!audio.duration) return;
    const step = event.shiftKey ? 15 : 5;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
      event.preventDefault();
      audio.currentTime = Math.max(0, audio.currentTime - step);
    }
    if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
      event.preventDefault();
      audio.currentTime = Math.min(audio.duration, audio.currentTime + step);
    }
  });

  loadTrack(1, false);
  buildShuffle();

  // On mobile, keep content-area margin in sync with fixed player bar height
  if (window.matchMedia('(max-width: 768px)').matches) {
    const contentArea = document.querySelector('.content-area');
    const bar = document.getElementById('playerBar');
    function syncMargin() { contentArea.style.marginTop = bar.offsetHeight + 'px'; }
    syncMargin();
    new ResizeObserver(syncMargin).observe(bar);
  }
}

document.addEventListener('DOMContentLoaded', initMusicPlayer);

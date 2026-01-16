// AI Tools Data
const aiTools = [
    {
        id: 1,
        name: "ChatGPT",
        icon: "bi-chat-dots-fill",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
        category: "نص",
        description: "أداة محادثة ذكية من OpenAI تستخدم الذكاء الاصطناعي التوليدي للرد على الأسئلة والمساعدة في المهام المختلفة",
        features: [
            "محادثة طبيعية وذكية",
            "كتابة المحتوى والإبداع",
            "ترجمة وتحليل النصوص",
            "حل المشكلات والبرمجة",
            "مساعدة في البحث والتعلم"
        ],
        link: "https://chat.openai.com",
        color: "#10a37f"
    },
    {
        id: 2,
        name: "Midjourney",
        icon: "bi-image",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop",
        category: "صورة",
        description: "أداة قوية لإنشاء صور فنية باستخدام الذكاء الاصطناعي من خلال وصف نصي بسيط",
        features: [
            "إنشاء صور فنية عالية الجودة",
            "أنماط فنية متنوعة",
            "تحكم دقيق في التفاصيل",
            "دعم الأوامر المتقدمة",
            "مجتمع فني نشط"
        ],
        link: "https://www.midjourney.com",
        color: "#000000"
    },
    {
        id: 3,
        name: "DALL-E 3",
        icon: "bi-palette",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop",
        category: "صورة",
        description: "نموذج توليد الصور من OpenAI الذي يحول الوصف النصي إلى صور واقعية ومبدعة",
        features: [
            "توليد صور من النص",
            "جودة عالية ودقيقة",
            "فهم سياقي متقدم",
            "تعديلات وتنويعات",
            "تكامل مع ChatGPT"
        ],
        link: "https://openai.com/dall-e-3",
        color: "#412991"
    },
    {
        id: 4,
        name: "Claude",
        icon: "bi-robot",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
        category: "نص",
        description: "مساعد ذكاء اصطناعي متقدم من Anthropic مع قدرات تحليلية ممتازة وأمان محسّن",
        features: [
            "تحليل مستندات طويلة",
            "أمان وموثوقية عالية",
            "تفكير منطقي متقدم",
            "كتابة احترافية",
            "مساعدة في البرمجة"
        ],
        link: "https://claude.ai",
        color: "#d97757"
    },
    {
        id: 5,
        name: "GitHub Copilot",
        icon: "bi-code-slash",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
        category: "برمجة",
        description: "مساعد برمجي يعمل بالذكاء الاصطناعي لكتابة الكود بشكل أسرع وأكثر كفاءة",
        features: [
            "اقتراحات كود ذكية",
            "دعم جميع لغات البرمجة",
            "تكامل مع IDE",
            "تعلم من السياق",
            "تسريع عملية التطوير"
        ],
        link: "https://github.com/features/copilot",
        color: "#238636"
    },
    {
        id: 6,
        name: "Notion AI",
        icon: "bi-journal-text",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
        category: "إنتاجية",
        description: "مساعد ذكاء اصطناعي مدمج في Notion لتحسين الإنتاجية والتنظيم",
        features: [
            "كتابة وتحرير النصوص",
            "تلخيص المستندات",
            "إنشاء قوالب تلقائية",
            "ترجمة فورية",
            "تحسين المحتوى"
        ],
        link: "https://www.notion.so/product/ai",
        color: "#000000"
    },
    {
        id: 7,
        name: "Jasper",
        icon: "bi-pencil-square",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
        category: "تسويق",
        description: "منصة كتابة محتوى تسويقي مدعومة بالذكاء الاصطناعي للمسوقين والكتاب",
        features: [
            "كتابة محتوى تسويقي",
            "قوالب جاهزة",
            "تحسين SEO",
            "أصوات كتابة متنوعة",
            "تحليل الأداء"
        ],
        link: "https://www.jasper.ai",
        color: "#000000"
    },
    {
        id: 8,
        name: "Runway ML",
        icon: "bi-camera-video",
        image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=300&fit=crop",
        category: "فيديو",
        description: "أداة تحرير فيديو متقدمة باستخدام الذكاء الاصطناعي لإنشاء محتوى مرئي مذهل",
        features: [
            "توليد فيديو من النص",
            "إزالة الخلفيات تلقائياً",
            "تأثيرات بصرية ذكية",
            "تحرير متقدم",
            "أدوات إبداعية متعددة"
        ],
        link: "https://runwayml.com",
        color: "#000000"
    },
    {
        id: 9,
        name: "Grammarly",
        icon: "bi-spellcheck",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop",
        category: "نص",
        description: "مساعد كتابة ذكي يتحقق من القواعد النحوية والإملائية ويحسن أسلوب الكتابة",
        features: [
            "فحص القواعد النحوية",
            "تحسين الأسلوب",
            "اقتراحات ذكية",
            "تكامل مع المتصفح",
            "تحليل النبرة"
        ],
        link: "https://www.grammarly.com",
        color: "#15c39a"
    },
    {
        id: 10,
        name: "Copy.ai",
        icon: "bi-file-earmark-text",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
        category: "تسويق",
        description: "أداة كتابة محتوى تسويقي وإعلاني باستخدام الذكاء الاصطناعي",
        features: [
            "كتابة إعلانات",
            "منشورات وسائل التواصل",
            "وصف المنتجات",
            "رسائل بريد إلكتروني",
            "محتوى متعدد اللغات"
        ],
        link: "https://www.copy.ai",
        color: "#ff6b6b"
    },
    {
        id: 11,
        name: "Luma AI",
        icon: "bi-camera",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop",
        category: "صورة",
        description: "أداة لإنشاء نماذج ثلاثية الأبعاد واقعية من الصور باستخدام الذكاء الاصطناعي",
        features: [
            "إنشاء نماذج 3D",
            "معالجة الصور",
            "واقعية عالية",
            "تصدير متعدد الصيغ",
            "سهولة الاستخدام"
        ],
        link: "https://lumalabs.ai",
        color: "#000000"
    },
    {
        id: 12,
        name: "Perplexity AI",
        icon: "bi-search",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
        category: "بحث",
        description: "محرك بحث ذكي يستخدم الذكاء الاصطناعي لتقديم إجابات دقيقة مع مصادر",
        features: [
            "إجابات مباشرة",
            "مصادر موثوقة",
            "بحث متقدم",
            "تلخيص المعلومات",
            "دقة عالية"
        ],
        link: "https://www.perplexity.ai",
        color: "#6366f1"
    },
    {
        id: 13,
        name: "Synthesia",
        icon: "bi-person-video",
        image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=300&fit=crop",
        category: "فيديو",
        description: "منصة لإنشاء فيديوهات تعليمية وتدريبية باستخدام مقدمين افتراضيين بالذكاء الاصطناعي",
        features: [
            "مقدمون افتراضيون",
            "دعم 120+ لغة",
            "قوالب جاهزة",
            "تخصيص كامل",
            "تصدير عالي الجودة"
        ],
        link: "https://www.synthesia.io",
        color: "#000000"
    },
    {
        id: 14,
        name: "Character.AI",
        icon: "bi-person-badge",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
        category: "ترفيه",
        description: "منصة للدردشة مع شخصيات افتراضية مدعومة بالذكاء الاصطناعي",
        features: [
            "شخصيات متنوعة",
            "محادثات تفاعلية",
            "إنشاء شخصيات مخصصة",
            "مجتمع نشط",
            "تجربة ترفيهية"
        ],
        link: "https://character.ai",
        color: "#000000"
    },
    {
        id: 15,
        name: "Stable Diffusion",
        icon: "bi-image-fill",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop",
        category: "صورة",
        description: "نموذج مفتوح المصدر لتوليد الصور من النص باستخدام الذكاء الاصطناعي",
        features: [
            "مفتوح المصدر",
            "توليد صور عالية الجودة",
            "تخصيص متقدم",
            "مجتمع كبير",
            "مجاني للاستخدام"
        ],
        link: "https://stability.ai",
        color: "#000000"
    },
    {
        id: 16,
        name: "Fireflies",
        icon: "bi-mic",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
        category: "إنتاجية",
        description: "أداة لتسجيل وتحليل الاجتماعات باستخدام الذكاء الاصطناعي",
        features: [
            "تسجيل تلقائي",
            "نسخ وتحويل للكتابة",
            "تلخيص الاجتماعات",
            "بحث في المحادثات",
            "تكامل مع Zoom وTeams"
        ],
        link: "https://fireflies.ai",
        color: "#ff6b6b"
    },
    {
        id: 17,
        name: "Otter.ai",
        icon: "bi-mic-fill",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
        category: "إنتاجية",
        description: "مساعد اجتماعات ذكي يسجل وينسخ ويلخص المحادثات تلقائياً",
        features: [
            "نسخ تلقائي دقيق",
            "تلخيص ذكي",
            "مشاركة الملاحظات",
            "تكامل مع التطبيقات",
            "بحث متقدم"
        ],
        link: "https://otter.ai",
        color: "#ff6b6b"
    },
    {
        id: 18,
        name: "DeepL",
        icon: "bi-translate",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop",
        category: "ترجمة",
        description: "خدمة ترجمة متقدمة باستخدام الذكاء الاصطناعي توفر ترجمات طبيعية ودقيقة",
        features: [
            "ترجمة عالية الجودة",
            "دعم 30+ لغة",
            "ترجمة سياقية",
            "واجهة سهلة",
            "دقة عالية"
        ],
        link: "https://www.deepl.com",
        color: "#0d2eff"
    },
    {
        id: 19,
        name: "Canva AI",
        icon: "bi-brush",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop",
        category: "تصميم",
        description: "أدوات تصميم مدعومة بالذكاء الاصطناعي في منصة Canva",
        features: [
            "توليد صور من النص",
            "إزالة الخلفيات",
            "تحسين الصور",
            "اقتراحات تصميم",
            "أدوات سريعة"
        ],
        link: "https://www.canva.com",
        color: "#00c4cc"
    },
    {
        id: 20,
        name: "Bard (Gemini)",
        icon: "bi-stars",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
        category: "نص",
        description: "مساعد ذكاء اصطناعي من Google يوفر إجابات وإبداع متقدم",
        features: [
            "محادثة ذكية",
            "تكامل مع Google",
            "تحليل متعدد الوسائط",
            "إبداع في الكتابة",
            "معلومات محدثة"
        ],
        link: "https://bard.google.com",
        color: "#4285f4"
    }
];


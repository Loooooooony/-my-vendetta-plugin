// file: index.js

module.exports = {
  start(language = 'ar') {
    const { currentUser } = vendetta.entities;
    const { persist } = vendetta.storage;

    // حفظ الإعدادات الحالية
    persist.set("originalLocale", currentUser.locale);

    // تعيين الترجمات حسب اللغة المحددة
    const translations = {
      ar: {
        "Home": "الصفحة الرئيسية",
        "Messages": "الرسائل",
        "Friends": "الأصدقاء",
        "Settings": "الإعدادات",
        "Logout": "تسجيل الخروج",
        "Profile": "الملف الشخصي",
        "Notifications": "الإشعارات",
        "Search": "بحث",
        "Help": "مساعدة",
        "Privacy": "الخصوصية",
        "Terms of Service": "شروط الخدمة",
        "About": "حول",
        "Contact Us": "اتصل بنا",
        "Server": "الخادم",
        "Channels": "القنوات",
        "Direct Messages": "الرسائل المباشرة",
        "Voice Channels": "القنوات الصوتية",
        "Text Channels": "القنوات النصية",
        "Create": "إنشاء",
        "Join": "انضمام",
        "Invite": "دعوة",
        "Mute": "كتم الصوت",
        "Deafen": "إسكات",
        "Server Settings": "إعدادات الخادم",
        "User Settings": "إعدادات المستخدم",
        "Members": "الأعضاء",
        "Roles": "الأدوار",
        "Permissions": "الأذونات",
        "Integrations": "التكاملات",
        "Widget": "الأداة",
        "Overview": "نظرة عامة",
        "Activity": "النشاط",
        "Audit Log": "سجل التدقيق",
        "Bans": "الحظر",
        "Emoji": "الرموز التعبيرية",
        "Stickers": "الملصقات",
        "Moderation": "الإشراف",
        "Safety": "السلامة",
        "Community": "المجتمع",
        "Discovery": "الاكتشاف",
        "Welcome Screen": "شاشة الترحيب",
        "Rules": "القواعد",
        "Guidelines": "الإرشادات",
        "Verification": "التحقق"
      }
    };

    const currentTranslations = translations[language] || translations['ar'];

    const replaceText = () => {
      const elements = document.querySelectorAll('span, a, div, p, button, h1, h2, h3, h4, h5, h6, li, label, input');
      elements.forEach(element => {
        const text = element.innerText.trim();
        if (currentTranslations[text]) {
          element.innerText = currentTranslations[text];
        }
      });
    };

    replaceText();
    const observer = new MutationObserver(replaceText);
    observer.observe(document.body, { childList: true, subtree: true });

    console.log(`Language changed to ${language === 'ar' ? 'Arabic' : language}`);

    window.updateTranslations = () => {
      replaceText();
      console.log("Translations updated");
    };
  },
  stop() {
    const { currentUser } = vendetta.entities;
    const { persist } = vendetta.storage;

    const originalLocale = persist.get("originalLocale");
    if (originalLocale) {
      currentUser.locale = originalLocale;

      const englishTranslations = {
        "الصفحة الرئيسية": "Home",
        "الرسائل": "Messages",
        "الأصدقاء": "Friends",
        "الإعدادات": "Settings",
        "تسجيل الخروج": "Logout",
        "الملف الشخصي": "Profile",
        "الإشعارات": "Notifications",
        "بحث": "Search",
        "مساعدة": "Help",
        "الخصوصية": "Privacy",
        "شروط الخدمة": "Terms of Service",
        "حول": "About",
        "اتصل بنا": "Contact Us",
        "الخادم": "Server",
        "القنوات": "Channels",
        "الرسائل المباشرة": "Direct Messages",
        "القنوات الصوتية": "Voice Channels",
        "القنوات النصية": "Text Channels",
        "إنشاء": "Create",
        "انضمام": "Join",
        "دعوة": "Invite",
        "كتم الصوت": "Mute",
        "إسكات": "Deafen",
        "إعدادات الخادم": "Server Settings",
        "إعدادات المستخدم": "User Settings",
        "الأعضاء": "Members",
        "الأدوار": "Roles",
        "الأذونات": "Permissions",
        "التكاملات": "Integrations",
        "الأداة": "Widget",
        "نظرة عامة": "Overview",
        "النشاط": "Activity",
        "سجل التدقيق": "Audit Log",
        "الحظر": "Bans",
        "الرموز التعبيرية": "Emoji",
        "الملصقات": "Stickers",
        "الإشراف": "Moderation",
        "السلامة": "Safety",
        "المجتمع": "Community",
        "الاكتشاف": "Discovery",
        "شاشة الترحيب": "Welcome Screen",
        "القواعد": "Rules",
        "الإرشادات": "Guidelines",
        "التحقق": "Verification"
      };

      const replaceTextBack = () => {
        const elements = document.querySelectorAll('span, a, div, p, button, h1, h2, h3, h4, h5, h6, li, label, input');
        elements.forEach(element => {
          const text = element.innerText.trim();
          if (englishTranslations[text]) {
            element.innerText = englishTranslations[text];
          }
        });
      };

      replaceTextBack();
      console.log("Language restored to original");
    }
  }
};
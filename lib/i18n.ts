import { Language } from './themeContext';

export interface TranslationDictionary {
  brand: {
    name: string;
    tagline: string;
    subtagline: string;
    heavyDuty: string;
  };
  nav: {
    products: string;
    brushlessTech: string;
    batteryEcosystem: string;
    smartAdvisor: string;
    warranty: string;
    dealers: string;
    catalog: string;
    inquiryCart: string;
    contact: string;
    toggleTheme: string;
    requestQuote: string;
  };
  hero: {
    badge: string;
    titlePrimary: string;
    titleHighlight: string;
    description: string;
    ctaCatalog: string;
    ctaAdvisor: string;
    ctaWarranty: string;
    kpiTorque: string;
    kpiTorqueSub: string;
    kpiWarranty: string;
    kpiWarrantySub: string;
    kpiPlatform: string;
    kpiPlatformSub: string;
    kpiGears: string;
    kpiGearsSub: string;
  };
  simulator: {
    tag: string;
    title: string;
    subtitle: string;
    loadControl: string;
    currentLoad: string;
    rpmLabel: string;
    tempLabel: string;
    torqueLabel: string;
    efficiencyLabel: string;
    brushlessVsCarbon: string;
    brushlessAdvantage: string;
    carbonDrawback: string;
    parts: {
      rotor: { name: string; desc: string };
      stator: { name: string; desc: string };
      esc: { name: string; desc: string };
      gearbox: { name: string; desc: string };
      turbo: { name: string; desc: string };
    };
  };
  catalog: {
    tag: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    allCategories: string;
    catCordless: string;
    catGrinding: string;
    catHammer: string;
    catLaser: string;
    catBattery: string;
    filterVoltage: string;
    allVoltages: string;
    btnDetails: string;
    btnCompare: string;
    btnAddToInquiry: string;
    inCart: string;
    specsQuick: {
      torque: string;
      speed: string;
      voltage: string;
      weight: string;
    };
  };
  battery: {
    tag: string;
    title: string;
    subtitle: string;
    selectAh: string;
    cellTech: string;
    cellTechDesc: string;
    bmsTech: string;
    bmsTechDesc: string;
    fastCharge: string;
    fastChargeDesc: string;
    workloadEstimation: string;
    rebarCuts: string;
    boltFastenings: string;
    concreteDrillHoles: string;
    perCharge: string;
  };
  advisor: {
    tag: string;
    title: string;
    subtitle: string;
    step1Title: string;
    step2Title: string;
    step3Title: string;
    industryLabel: string;
    shiftLabel: string;
    priorityLabel: string;
    resultTitle: string;
    recommendedPackage: string;
    btnRestart: string;
    btnApplyPackage: string;
  };
  warranty: {
    tag: string;
    title: string;
    subtitle: string;
    inputPlaceholder: string;
    btnCheck: string;
    sampleSerials: string;
    statusActive: string;
    statusExpired: string;
    statusInvalid: string;
    certificateTitle: string;
    serialLabel: string;
    modelLabel: string;
    issueDate: string;
    expiryDate: string;
    daysRemaining: string;
    coverageType: string;
    unconditionalReplace: string;
    tabVerify: string;
    tabRegister: string;
    regTitle: string;
    regCustomerName: string;
    regPhone: string;
    regSerial: string;
    regDealer: string;
    regSubmit: string;
    regSuccess: string;
  };
  dealers: {
    tag: string;
    title: string;
    subtitle: string;
    selectCity: string;
    allCities: string;
    btnCall: string;
    btnMap: string;
    serviceReady: string;
    applyFranchise: string;
    applyFranchiseSubtitle: string;
    formName: string;
    formPhone: string;
    formCity: string;
    formExperience: string;
    formSubmit: string;
    formSent: string;
  };
  inquiry: {
    title: string;
    subtitle: string;
    emptyCart: string;
    emptyCartPrompt: string;
    totalUnits: string;
    customerName: string;
    companyName: string;
    phone: string;
    notes: string;
    btnGenerateInvoice: string;
    btnExportPDF: string;
    officialStamp: string;
    invoiceTitle: string;
    invoiceSubtitle: string;
  };
  ramax: {
    title: string;
    subtitle: string;
    statusOnline: string;
    welcomeMsg: string;
    inputPlaceholder: string;
    listening: string;
    speaking: string;
    btnSend: string;
    quickPrompts: string[];
    voiceNotSupported: string;
  };
  developer: {
    credit: string;
    companyName: string;
    regNumber: string;
    detailsBtn: string;
    modalTitle: string;
    modalSubtitle: string;
    techStackTitle: string;
    standardsTitle: string;
    contactTitle: string;
  };
  footer: {
    desc: string;
    quickLinks: string;
    products: string;
    support: string;
    warrantyPolicy: string;
    certifications: string;
    allRightsReserved: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  fa: {
    brand: {
      name: 'DRAWOLT (دراوولت)',
      tagline: 'ابزارآلات صنعتی و قدرتی فوق‌سنگین DRAWOLT',
      subtagline: 'فناوری موتورهای براشلس دیجیتال و پلتفرم یکپارچه باتری DRAWOLT',
      heavyDuty: 'مهندسی صنعتی با حداکثر گشتاور و دوام کارگاهی DRAWOLT',
    },
    nav: {
      products: 'محصولات صنعتی',
      brushlessTech: 'فناوری براشلس',
      batteryEcosystem: 'اکوسیستم باتری',
      smartAdvisor: 'مشاور انتخاب ابزار',
      warranty: 'سامانه گارانتی ۱۸ ماهه',
      dealers: 'شبکه نمایندگی‌ها',
      catalog: 'کاتالوگ ۲۰۲۶',
      inquiryCart: 'استعلام قیمت رسمی',
      contact: 'تماس و پشتیبانی',
      toggleTheme: 'تغییر تم روز / شب',
      requestQuote: 'درخواست پیش‌فاکتور',
    },
    hero: {
      badge: 'نسل جدید ابزارآلات صنعتی و شارژی حرفه‌ای ۲۰۲۶',
      titlePrimary: 'اوج قدرت و استقامت در شرایط سخت کارگاهی با',
      titleHighlight: 'ابزارآلات صنعتی دراوولت (DRAWOLT)',
      description: 'طراحی شده برای شیفت‌های کاری ۲۴/۷، کارگاه‌های سازه فلزی، پروژه‌های عمرانی سنگین و صنایع مونتاژ با گشتاور بی‌رقیب ۹۸۰ نیوتن‌متر و موتورهای براشلس بدون اصطکاک.',
      ctaCatalog: 'مشاهده کاتالوگ ابزارها',
      ctaAdvisor: 'مشاور هوشمند انتخاب ابزار',
      ctaWarranty: 'استعلام گارانتی طلایی',
      kpiTorque: '۹۸۰ نیوتن‌متر',
      kpiTorqueSub: 'حداکثر گشتاور آچار بکس صنعتی',
      kpiWarranty: '۱۸ ماه طلایی',
      kpiWarrantySub: 'گارانتی تعویض بی قید و شرط قطعات',
      kpiPlatform: '۴۰+ دستگاه',
      kpiPlatformSub: 'یکپارچه بر روی پلتفرم DRA-Power',
      kpiGears: '۱۰۰٪ فولاد Cr-Mo',
      kpiGearsSub: 'گیربکس‌های سیاره‌ای کروم مولیبدن',
    },
    simulator: {
      tag: 'کالبدشکافی مهندسی موتور',
      title: 'فناوری محرکه براشلس (Brushless Core-Drive)',
      subtitle: 'موتورهای دیجیتال بدون ذغال دراوولت با راندمان ۹۲٪، بدون جرقه، بدون اتلاف انرژی و با ۳ برابر طول عمر بیشتر',
      loadControl: 'کنترل بار کاری مکانیکی (سختی عملیات):',
      currentLoad: 'درصد لود عملیاتی',
      rpmLabel: 'دور در دقیقه زنده (RPM)',
      tempLabel: 'دمای سیم‌پیچ آرمیچر',
      torqueLabel: 'گشتاور خروجی آنی',
      efficiencyLabel: 'راندمان انرژی کل',
      brushlessVsCarbon: 'مقایسه راندمان براشلس دراوولت در برابر موتورهای معمولی زغالی',
      brushlessAdvantage: 'موتور براشلس DRAWOLT: راندمان بالای ۹۲٪، انتقال حرارت آلومینیوم دایکست، برد کنترل هوشمند ESC',
      carbonDrawback: 'موتورهای سنتی ذغالی: اتلاف حرارتی بالا، جرقه زغال، فرسایش کلکتور، افت ۴۲٪ راندمان تحت بار',
      parts: {
        rotor: { name: 'روتور مگنت نئودیمیوم N52', desc: 'آهنرباهای خاکی کمیاب با چگالی شار مغناطیسی فوق‌العاده بالا برای تولید حداکثر گشتاور دورانی بدون افت مغناطیس در حرارت بالا' },
        stator: { name: 'استاتور مس خالص ۹۹.۹٪ (کلاس H)', desc: 'سیم‌پیچی فشرده مس عیار بالا با عایق رزین اپوکسی ضدگردوغبار و تحمل دمایی ۲۰۰ درجه سانتی‌گراد' },
        esc: { name: 'کنترلر هوشمند دیجیتال (Smart ESC)', desc: 'ریزپردازنده ۳۲ بیتی با الگوریتم کنترل گشتاور تطبیقی و حفاظت لحظه‌ای در برابر اضافه‌بار و اتصال کوتاه' },
        gearbox: { name: 'گیربکس سیاره‌ای تمام‌فلز دو سرعته', desc: 'چرخ‌دنده‌های ماشین‌کاری شده با آلیاژ فولاد کروم-مولیبدن با سخت‌کاری حرارتی جهت انتقال کامل توان' },
        turbo: { name: 'پروانه خنک‌کننده سانتریفیوژ توربو', desc: 'طراحی آیرودینامیک با جریان هوای مستقیم روی سیم‌پیچ‌ها جهت کاهش دمای کاری در شیفت‌های ممتد' },
      },
    },
    catalog: {
      tag: 'کاتالوگ جامع ابزارآلات',
      title: 'خانواده ابزارهای حرفه‌ای DRAWOLT (دراوولت)',
      subtitle: 'طراحی شده طبق استانداردهای DIN آلمان و استانداردهای بین‌المللی با ارگونومی پیشرفته ضدلرزش',
      searchPlaceholder: 'جستجوی مدل یا نام ابزار (مثال: بکس، مینی‌فرز، بتن‌کن، ۹۸۲۰)...',
      allCategories: 'همه ابزارها',
      catCordless: 'ابزارآلات شارژی',
      catGrinding: 'برش و سایش',
      catHammer: 'بتن‌کن و تخریب',
      catLaser: 'ابزار دقیق لیزری',
      catBattery: 'باتری و شارژر',
      filterVoltage: 'ولتاژ کاری:',
      allVoltages: 'همه ولتاژها',
      btnDetails: 'مشخصات کامل فنی',
      btnCompare: 'مقایسه فنی',
      btnAddToInquiry: 'افزودن به استعلام',
      inCart: 'در سبد استعلام',
      specsQuick: {
        torque: 'حداکثر گشتاور:',
        speed: 'سرعت آزاد:',
        voltage: 'ولتاژ کاری:',
        weight: 'وزن دستگاه:',
      },
    },
    battery: {
      tag: 'پلتفرم مشترک باتری',
      title: 'اکوسیستم باتری‌های DRA-Power',
      subtitle: 'یک باتری برای تمامی ادوات خط تولید؛ سلول‌های نسل ۲۱۷۰۰ با بیشترین دانسیته انرژی و سیستم مدیریت هوشمند BMS',
      selectAh: 'انتخاب ظرفیت باتری جهت محاسبه شارژدهی واقعی:',
      cellTech: 'سلول‌های صنعتی لیتیوم-یون ۲۱۷۰۰',
      cellTechDesc: 'تا ۵۰٪ قدرت بیشتر و ۳ برابر تخلیه جریان پیوسته نسبت به سلول‌های قدیمی ۱۸۶۵۰',
      bmsTech: 'مدیریت هوشمند باتری (۶ لایه حفاظت)',
      bmsTechDesc: 'محافظت در برابر شارژ بیش از حد، دمای بحرانی، تخلیه عمیق، اتصال کوتاه و بالانس خودکار سلول‌ها',
      fastCharge: 'شارژ فوق‌سریع توربو ۸ آمپر',
      fastChargeDesc: 'رسیدن به ۸۰٪ ظرفیت شارژ تنها در ۲۵ دقیقه با فناوری خنک‌کاری فعال شارژر',
      workloadEstimation: 'تخمین عملکرد واقعی با یک بار شارژ کامل:',
      rebarCuts: 'برش میلگرد آجدار ۱۶ میلی‌متر',
      boltFastenings: 'بستن پیچ اسکلت سازه فلزی M24',
      concreteDrillHoles: 'سوراخکاری در بتن عیار بالا مته ۲۰ میلی‌متر',
      perCharge: 'تعداد عملیات با یک بار شارژ کامل',
    },
    advisor: {
      tag: 'کانفیگوراتور هوشمند ابزار',
      title: 'مشاور مهندسی انتخاب ابزار مناسب',
      subtitle: 'در ۳ مرحله کوتاه، بهترین پکیج ابزار و چینش باتری متناسب با نوع پروژه و فشار کاری خود را دریافت کنید',
      step1Title: 'مرحله ۱: حوزه صنعتی و نوع فعالیت خود را انتخاب کنید',
      step2Title: 'مرحله ۲: شدت شیفت و بار کاری روزانه شما چقدر است؟',
      step3Title: 'مرحله ۳: اولویت اصلی فنی شما کدام پارامتر است؟',
      industryLabel: 'صنعت:',
      shiftLabel: 'شیفت کاری:',
      priorityLabel: 'اولویت:',
      resultTitle: 'پکیج پیشنهادی مهندسی DRAWOLT برای شما:',
      recommendedPackage: 'پکیج بهینه‌شده کارگاهی',
      btnRestart: 'تنظیم مجدد مشاور',
      btnApplyPackage: 'افزودن تمام پکیج به سبد استعلام',
    },
    warranty: {
      tag: 'اعتبارسنجی و خدمات پس از فروش',
      title: 'سامانه استعلام اصالت و گارانتی طلایی ۱۸ ماهه DRAWOLT',
      subtitle: 'تمامی ابزارآلات DRAWOLT (دراوولت) دارای شناسه یکتای لیزری و ۱۸ ماه گارانتی تعویض بی قید و شرط قطعات اصلی هستند',
      inputPlaceholder: 'شماره سریال ابزار را وارد کنید (مثال: DW-9820-PRO)...',
      btnCheck: 'استعلام اصالت و وضعیت',
      sampleSerials: 'نمونه سریال‌های فعال جهت بررسی آزمایشی:',
      statusActive: 'گارانتی طلایی ۱۸ ماهه فعال و معتبر است',
      statusExpired: 'مدت گارانتی منقضی گردیده است',
      statusInvalid: 'سریال مورد نظر در سامانه ثبت نشده است',
      certificateTitle: 'شناسنامه دیجیتال اصالت و گارانتی طلایی DRAWOLT',
      serialLabel: 'شماره سریال انحصاری:',
      modelLabel: 'مدل و مشخصه دستگاه:',
      issueDate: 'تاریخ فعال‌سازی:',
      expiryDate: 'تاریخ پایان گارانتی:',
      daysRemaining: 'روزهای باقیمانده از تعهد گارانتی:',
      coverageType: 'پوشش خدمات:',
      unconditionalReplace: 'تعویض کامل آرمیچر، بالشتک، برد الکترونیکی و گیربکس',
      tabVerify: 'استعلام سریال گارانتی',
      tabRegister: 'ثبت و فعال‌سازی گارانتی نو',
      regTitle: 'فرم فعال‌سازی کارت گارانتی ابزار جدید DRAWOLT',
      regCustomerName: 'نام و نام خانوادگی خریدار',
      regPhone: 'شماره موبایل جهت دریافت پیامک تایید',
      regSerial: 'شماره سریال روی بدنه دستگاه',
      regDealer: 'نام فروشگاه یا نمایندگی صادرکننده فاکتور',
      regSubmit: 'ثبت رسمی و صدور کارت طلایی دیجیتال',
      regSuccess: 'کارت گارانتی شما با موفقیت ثبت شد و پیامک تایید ارسال گردید.',
    },
    dealers: {
      tag: 'پراکندگی خدمات در سراسر کشور',
      title: 'شبکه سراسری نمایندگی‌ها و مراکز خدمات DRAWOLT',
      subtitle: 'تامین قطعات اورجینال، تعمیرات استاندارد زیر ۲۴ ساعت و ارائه گارانتی رسمی در تمام مراکز استان‌ها',
      selectCity: 'فیلتر بر اساس استان / شهر:',
      allCities: 'تمام استان‌ها و شهرها',
      btnCall: 'تماس مستقیم با نمایندگی',
      btnMap: 'مسیریابی روی نقشه',
      serviceReady: 'مرکز خدمات مجهز و تامین قطعات رسمی',
      applyFranchise: 'درخواست اخذ عاملیت فروش و نمایندگی رسمی',
      applyFranchiseSubtitle: 'جهت پیوستن به شبکه توزیع و عاملیت ابزارآلات صنعتی دراوولت در شهر خود فرم زیر را تکمیل نمایید',
      formName: 'نام متقاضی / نام شرکت',
      formPhone: 'شماره تماس مستقیم',
      formCity: 'شهر و استان مورد تقاضا',
      formExperience: 'سوابق کاری در صنف ابزارآلات صنعتی و متراژ فروشگاه',
      formSubmit: 'ارسال درخواست همکاری و اخذ عاملیت',
      formSent: 'درخواست شما با موفقیت ثبت شد؛ کارشناسان بازرگانی دراوولت به زودی با شما تماس خواهند گرفت.',
    },
    inquiry: {
      title: 'سبد استعلام قیمت رسمی و صدور پیش‌فاکتور',
      subtitle: 'لیست ابزارهای انتخابی جهت صدور پیش‌فاکتور رسمی با مهر شرکتی و محاسبه تخفیف همکاری',
      emptyCart: 'سبد استعلام قیمت شما خالی است.',
      emptyCartPrompt: 'از کاتالوگ محصولات ابزارهای مورد نیاز خود را به این سبد اضافه نمایید.',
      totalUnits: 'مجموع دستگاه‌های انتخابی:',
      customerName: 'نام و نام خانوادگی خریدار / کارشناس خرید',
      companyName: 'نام شرکت یا کارگاه صنعتی',
      phone: 'شماره تماس مستقیم جهت هماهنگی',
      notes: 'توضیحات و نیازمندی‌های پروژه‌ای (اختیاری)',
      btnGenerateInvoice: 'صدور و چاپ پیش‌فاکتور رسمی تجاری',
      btnExportPDF: 'دریافت نسخه پیش‌فاکتور معتبر',
      officialStamp: 'مهر و امضای امور بازرگانی DRAWOLT',
      invoiceTitle: 'پیش‌فاکتور رسمی فروش تجهیزات صنعتی',
      invoiceSubtitle: 'صادره از شرکت ابزارآلات صنعتی دراوولت (DRAWOLT Tools Inc)',
    },
    ramax: {
      title: 'راماکس (Ramax)',
      subtitle: 'دستیار هوش مصنوعی صنعتی دراوولت',
      statusOnline: 'آنلاین و آماده پاسخگویی فنی',
      welcomeMsg: 'سلام! من راماکس هستم، دستیار هوش مصنوعی ابزارآلات صنعتی دراوولت. هر سوالی درباره مشخصات فنی، گشتاور، تست باتری، قطعات موتور براشلس یا استعلام گارانتی دارید بپرسید!',
      inputPlaceholder: 'سوال فنی خود را بنویسید یا دکمه میکروفون را بزنید...',
      listening: 'در حال شنیدن صدای شما...',
      speaking: 'در حال خواندن پاسخ فنی...',
      btnSend: 'ارسال',
      quickPrompts: [
        'قوی‌ترین آچار بکس شارژی دراوولت کدام است؟',
        'موتور براشلس چه برتری نسبت به موتور معمولی دارد؟',
        'شرایط گارانتی طلایی ۱۸ ماهه دراوولت چیست؟',
        'باتری ۸ آمپرساعت چه برتری در برش میلگرد دارد؟',
      ],
      voiceNotSupported: 'تشخیص گفتار در این مرورگر پشتیبانی نمی‌شود، لطفاً تایپ نمایید.',
    },
    developer: {
      credit: 'طراحی و برنامه نویسی توسط شرکت توسعه مهندسی نرم افزاری و برنامه نویسی پازل رایانه (با مسئولیت محدود) ش.ث ۵۲۷۵۹۱',
      companyName: 'شرکت توسعه مهندسی نرم‌افزاری و برنامه‌نویسی پازل رایانه (با مسئولیت محدود)',
      regNumber: 'شماره ثبت رسمی: ۵۲۷۵۹۱',
      detailsBtn: 'شناسنامه مهندسی نرم‌افزار',
      modalTitle: 'گواهی مهندسی نرم‌افزار و شناسنامه فنی پورتال',
      modalSubtitle: 'طراحی، معماری داده و مهندسی فول‌استک توسط شرکت توسعه مهندسی نرم‌افزاری پازل رایانه (با مسئولیت محدود) - شناسه ثبت ۵۲۷۵۹۱',
      techStackTitle: 'معماری و استاندارد فنی نرم‌افزار:',
      standardsTitle: 'استانداردهای مهندسی وب پیاده‌سازی شده:',
      contactTitle: 'اطلاعات ارتباطی پازل رایانه:',
    },
    footer: {
      desc: 'دراوولت (DRAWOLT) پیشرو در تولید و مهندسی ابزارآلات صنعتی فوق‌سنگین شارژی و برقی با بالاترین استانداردهای ایمنی و دوام مکانیکی در شرایط نامساعد کارگاهی.',
      quickLinks: 'دسترسی سریع',
      products: 'دسته‌بندی ابزارها',
      support: 'مرکز پشتیبانی و خدمات',
      warrantyPolicy: 'سیاست گارانتی طلایی ۱۸ ماهه تعویض بدون قید و شرط',
      certifications: 'دارای استانداردهای بین‌المللی CE اروپا، ISO 9001 و تاییدیه آزمون متالورژی DIN آلمان',
      allRightsReserved: 'تمامی حقوق مادی و معنوی برای برند ابزارآلات صنعتی دراوولت (DRAWOLT) محفوظ است.',
    },
  },
  en: {
    brand: {
      name: 'DRAWOLT',
      tagline: 'Heavy-Duty Industrial Power Tools',
      subtagline: 'Brushless Digital Core-Drive & Unified Battery Ecosystem',
      heavyDuty: 'Engineered for Maximum Torque and Uncompromising Jobsite Durability',
    },
    nav: {
      products: 'Industrial Tools',
      brushlessTech: 'Brushless Tech',
      batteryEcosystem: 'Battery Platform',
      smartAdvisor: 'Tool Advisor',
      warranty: '18M Warranty',
      dealers: 'Dealer Network',
      catalog: 'Catalog 2026',
      inquiryCart: 'Price Quote',
      contact: 'Support',
      toggleTheme: 'Toggle Day / Night',
      requestQuote: 'Official Quote',
    },
    hero: {
      badge: 'Next-Generation Cordless Industrial Tools 2026',
      titlePrimary: 'Maximum Torque & Unrelenting Endurance with',
      titleHighlight: 'DRAWOLT Industrial Tools',
      description: 'Engineered for 24/7 demanding shifts, structural steel fabrication, heavy concrete construction, and assembly lines with class-leading 980 N.m torque and frictionless brushless motors.',
      ctaCatalog: 'Explore Product Catalog',
      ctaAdvisor: 'Smart Tool Advisor',
      ctaWarranty: 'Golden Warranty Check',
      kpiTorque: '980 N.m',
      kpiTorqueSub: 'Peak Cordless Impact Torque',
      kpiWarranty: '18 Months',
      kpiWarrantySub: 'Unconditional Replacement Warranty',
      kpiPlatform: '40+ Tools',
      kpiPlatformSub: 'Unified DRA-Power Battery Platform',
      kpiGears: '100% Cr-Mo',
      kpiGearsSub: 'Hardened Chromium-Molybdenum Gears',
    },
    simulator: {
      tag: 'Motor Anatomy Simulator',
      title: 'Brushless Core-Drive Technology',
      subtitle: 'DRAWOLT digital brushless motors deliver 92% efficiency, zero spark, zero energy waste, and 3x longer motor lifespan',
      loadControl: 'Mechanical Load Intensity Control:',
      currentLoad: 'Operational Load %',
      rpmLabel: 'Live RPM Output',
      tempLabel: 'Armature Temp (°C)',
      torqueLabel: 'Instant Torque (N.m)',
      efficiencyLabel: 'Total Power Efficiency',
      brushlessVsCarbon: 'DRAWOLT Brushless vs Conventional Carbon-Brush Motors',
      brushlessAdvantage: 'DRAWOLT Brushless: 92%+ efficiency, die-cast aluminum heat dissipation, intelligent micro-stepped ESC controller',
      carbonDrawback: 'Conventional Brushed: high thermal dissipation, brush arcing, commutator wear, 42% efficiency drop under sustained heavy load',
      parts: {
        rotor: { name: 'N52 Neodymium Magnetic Rotor', desc: 'Rare-earth magnets with ultra-high magnetic flux density producing maximum rotational torque without thermal de-magnetization' },
        stator: { name: '99.9% Pure Copper Stator (Class H)', desc: 'High-density pure copper windings with dust-proof epoxy insulation rated for 200°C continuous operation' },
        esc: { name: 'Intelligent Digital Controller (Smart ESC)', desc: '32-bit microprocessor executing adaptive torque vectoring algorithms with real-time overload and short-circuit protection' },
        gearbox: { name: 'Dual-Speed All-Metal Planetary Gearbox', desc: 'Precision CNC-machined chromium-molybdenum steel planetary gears hardened for seamless power transfer' },
        turbo: { name: 'Turbo Centrifugal Cooling Impeller', desc: 'Aerodynamic directed airflow channeled across internal windings to maintain optimal operating temperatures' },
      },
    },
    catalog: {
      tag: 'Comprehensive Equipment Catalog',
      title: 'DRAWOLT Professional Hardware Family',
      subtitle: 'Engineered to German DIN standards and international safety regulations with ergonomic anti-vibration damping',
      searchPlaceholder: 'Search model or tool name (e.g., Impact Wrench, Grinder, Hammer, 9820)...',
      allCategories: 'All Tools',
      catCordless: 'Cordless Tools',
      catGrinding: 'Cutting & Grinding',
      catHammer: 'Rotary & Demolition',
      catLaser: 'Precision Laser Tools',
      catBattery: 'Batteries & Chargers',
      filterVoltage: 'Operating Voltage:',
      allVoltages: 'All Voltages',
      btnDetails: 'Full Technical Specs',
      btnCompare: 'Compare Specs',
      btnAddToInquiry: 'Add to Price Inquiry',
      inCart: 'Added in Cart',
      specsQuick: {
        torque: 'Max Torque:',
        speed: 'No-Load Speed:',
        voltage: 'Operating Voltage:',
        weight: 'Net Tool Weight:',
      },
    },
    battery: {
      tag: 'Universal Battery Platform',
      title: 'DRA-Power Battery Ecosystem',
      subtitle: 'One battery for your entire equipment fleet; high-density 21700 cells with 6-layer intelligent BMS protection',
      selectAh: 'Select Battery Capacity for Real-World Workload Benchmark:',
      cellTech: '21700 Industrial Lithium-Ion Cells',
      cellTechDesc: 'Up to 50% more available power and 3x continuous discharge capability compared to older 18650 cells',
      bmsTech: 'Smart BMS (6-Fold Protection)',
      bmsTechDesc: 'Guards against overcharging, high temperatures, deep discharge, short-circuits, and balances individual cell voltages',
      fastCharge: '8A Turbo Fast Smart Charging',
      fastChargeDesc: 'Reaches 80% charge level in just 25 minutes with active dual-fan airflow cooling',
      workloadEstimation: 'Estimated Real-World Output on a Single Full Charge:',
      rebarCuts: '16mm Ribbed Steel Rebar Cuts',
      boltFastenings: 'M24 Structural Steel Bolt Fastenings',
      concreteDrillHoles: '20mm Anchor Holes in High-Grade Concrete',
      perCharge: 'Cycles completed per full charge',
    },
    advisor: {
      tag: 'Smart Tool Configurator',
      title: 'Industrial Tool Recommendation Engine',
      subtitle: 'In 3 quick steps, receive the optimal tool package and battery layout engineered for your specific trades and shift load',
      step1Title: 'Step 1: Select your industry and main application',
      step2Title: 'Step 2: What is your daily shift intensity and workload?',
      step3Title: 'Step 3: What is your primary technical priority?',
      industryLabel: 'Industry:',
      shiftLabel: 'Shift Workload:',
      priorityLabel: 'Priority:',
      resultTitle: 'Recommended DRAWOLT Engineering Package:',
      recommendedPackage: 'Optimized Jobsite Fleet',
      btnRestart: 'Reset Configurator',
      btnApplyPackage: 'Add Complete Package to Quote Cart',
    },
    warranty: {
      tag: 'Authentication & After-Sales',
      title: '18-Month Golden Warranty Verification',
      subtitle: 'Every authentic DRAWOLT power tool features a laser-etched unique serial number backed by unconditional replacement coverage',
      inputPlaceholder: 'Enter serial number (e.g., DW-9820-PRO)...',
      btnCheck: 'Verify Authenticity & Status',
      sampleSerials: 'Sample active test serial numbers:',
      statusActive: '18-Month Golden Warranty is ACTIVE and Valid',
      statusExpired: 'Warranty coverage period has expired',
      statusInvalid: 'Serial number not found in official registry',
      certificateTitle: 'Digital Certificate of Authenticity & Golden Warranty',
      serialLabel: 'Unique Laser Serial:',
      modelLabel: 'Model & Tool Specification:',
      issueDate: 'Activation Date:',
      expiryDate: 'Coverage Expiry Date:',
      daysRemaining: 'Days of Active Warranty Left:',
      coverageType: 'Service Scope:',
      unconditionalReplace: 'Full replacement of Armature, Field Coil, ESC Board, and Gearbox',
      tabVerify: 'Serial Number Verification',
      tabRegister: 'Activate New Tool Warranty',
      regTitle: 'New Tool Warranty Activation Portal',
      regCustomerName: 'Purchaser Full Name',
      regPhone: 'Mobile Phone for SMS Confirmation',
      regSerial: 'Serial Number on Tool Body',
      regDealer: 'Authorized Dealer / Distributor Name',
      regSubmit: 'Submit & Generate Digital Golden Card',
      regSuccess: 'Warranty successfully activated! Confirmation details have been recorded.',
    },
    dealers: {
      tag: 'Nationwide Service Infrastructure',
      title: 'Authorized Dealers & Certified Service Centers',
      subtitle: 'OEM spare parts inventory, guaranteed sub-24h rapid turnaround, and warranty claim handling across all regions',
      selectCity: 'Filter by Province / City:',
      allCities: 'All Regions and Cities',
      btnCall: 'Call Dealer Direct',
      btnMap: 'View on Map',
      serviceReady: 'Fully Equipped Service Station with OEM Parts',
      applyFranchise: 'Apply for Official Dealership & Distribution',
      applyFranchiseSubtitle: 'Join the premier network of DRAWOLT industrial tool distributors in your area',
      formName: 'Applicant / Company Name',
      formPhone: 'Direct Phone Number',
      formCity: 'Target Province & City',
      formExperience: 'Commercial experience in hardware tools and showroom size',
      formSubmit: 'Submit Dealership Application',
      formSent: 'Application successfully received! A DRAWOLT commercial representative will contact you shortly.',
    },
    inquiry: {
      title: 'Official Price Inquiry & Pre-Invoice Basket',
      subtitle: 'Selected equipment for corporate pre-invoice generation with company stamp and volume discount calculation',
      emptyCart: 'Your price inquiry basket is empty.',
      emptyCartPrompt: 'Explore the product catalog to add tools and equipment to your inquiry list.',
      totalUnits: 'Total Units Selected:',
      customerName: 'Procurement Officer / Contact Name',
      companyName: 'Company or Workshop Name',
      phone: 'Direct Phone Number for Quote Follow-up',
      notes: 'Project Specifications or Delivery Notes (Optional)',
      btnGenerateInvoice: 'Generate & Print Commercial Pre-Invoice',
      btnExportPDF: 'Export Verified Pre-Invoice',
      officialStamp: 'DRAWOLT Commercial Seal & Signature',
      invoiceTitle: 'Official Commercial Equipment Quotation',
      invoiceSubtitle: 'Issued by DRAWOLT Industrial Tools Corporation',
    },
    ramax: {
      title: 'Ramax AI',
      subtitle: 'DRAWOLT Industrial AI Assistant',
      statusOnline: 'Online & Technical Support Ready',
      welcomeMsg: 'Hello! I am Ramax, your DRAWOLT Industrial AI assistant. Feel free to ask any question regarding tool torque, battery benchmarks, brushless motor parts, or warranty validation!',
      inputPlaceholder: 'Ask a technical question or tap microphone...',
      listening: 'Listening to your voice...',
      speaking: 'Reading technical answer...',
      btnSend: 'Send',
      quickPrompts: [
        'Which is the most powerful DRAWOLT impact wrench?',
        'What are the advantages of brushless over brushed motors?',
        'What does the 18-Month Golden Warranty cover?',
        'How does the 8.0Ah battery perform on heavy rebar cuts?',
      ],
      voiceNotSupported: 'Speech recognition is not supported in this browser. Please type your question.',
    },
    developer: {
      credit: 'Designed and engineered by Puzzle Rayaneh Software & Programming Engineering Development Co. Ltd., Reg No. 527591',
      companyName: 'Puzzle Rayaneh Software & Programming Engineering Development Co. Ltd.',
      regNumber: 'Official Registration No: 527591',
      detailsBtn: 'Software Engineering Certificate',
      modalTitle: 'Software Engineering Certificate & System Architecture',
      modalSubtitle: 'Design, data architecture, and full-stack engineering delivered by Puzzle Rayaneh Co. Ltd. (Registration No. 527591)',
      techStackTitle: 'Software Architecture & Stack:',
      standardsTitle: 'Implemented Web Engineering Standards:',
      contactTitle: 'Puzzle Rayaneh Contact & Credentials:',
    },
    footer: {
      desc: 'DRAWOLT is a premier manufacturer of ultra-heavy-duty cordless and electric industrial power tools built to withstand the toughest jobsite conditions with maximum operator safety and mechanical endurance.',
      quickLinks: 'Quick Links',
      products: 'Tool Categories',
      support: 'Support & Service',
      warrantyPolicy: '18-Month Golden Unconditional Replacement Warranty Policy',
      certifications: 'Certified to European CE, ISO 9001, and German DIN metallurgical testing standards',
      allRightsReserved: 'All rights reserved by DRAWOLT Industrial Tools Corporation.',
    },
  },
  ar: {
    brand: {
      name: 'دراوولت (DRAWOLT)',
      tagline: 'الأدوات والمعدات الصناعية فائقة التحمل',
      subtagline: 'تكنولوجيا المحركات الرقمية عديمة الفرش ومنظومة البطاريات الموحدة',
      heavyDuty: 'هندسة صناعية بأقصى عزم دوران ومتانة مطلقة في مواقع العمل',
    },
    nav: {
      products: 'الأدوات الصناعية',
      brushlessTech: 'تكنولوجيا براشلس',
      batteryEcosystem: 'منظومة البطاريات',
      smartAdvisor: 'مستشار اختيار الأدوات',
      warranty: 'ضمان ١٨ شهراً',
      dealers: 'شبكة الوكلاء',
      catalog: 'كتالوج ٢٠٢٦',
      inquiryCart: 'عرض الأسعار الرسمي',
      contact: 'الدعم الفني',
      toggleTheme: 'تبديل النهاري / الليلي',
      requestQuote: 'طلب فاتورة تقديرية',
    },
    hero: {
      badge: 'الجيل الجديد من الأدوات الصناعية اللاسلكية ٢٠٢٦',
      titlePrimary: 'قمة القوة والتحمل في أصعب الظروف الصناعية مع',
      titleHighlight: 'أدوات دراوولت الصناعية (DRAWOLT)',
      description: 'مصممة للعمل المتواصل على مدار الساعة، وورش الهياكل الفولاذية، ومشاريع الخرسانة الثقيلة مع عزم دوران رائد يبلغ ٩٨٠ نيوتن.متر ومحركات رقمية عديمة الاحتكاك.',
      ctaCatalog: 'تصفح كتالوج الأدوات',
      ctaAdvisor: 'المستشار الذكي للأدوات',
      ctaWarranty: 'التحقق من الضمان الذهبي',
      kpiTorque: '٩٨٠ نيوتن.متر',
      kpiTorqueSub: 'أقصى عزم دوران لمفتاح الربط اللاسلكي',
      kpiWarranty: '١٨ شهراً ذهبياً',
      kpiWarrantySub: 'ضمان استبدال فوري غير مشروط للقطع الأساسية',
      kpiPlatform: '٤٠+ أداة',
      kpiPlatformSub: 'متوافقة مع منصة بطاريات DRA-Power الموحدة',
      kpiGears: '١٠٠٪ فولاذ Cr-Mo',
      kpiGearsSub: 'صندوق تروس كوكبي من سبيكة الكروم-موليبدينوم',
    },
    simulator: {
      tag: 'محاكي تشريح المحرك',
      title: 'تكنولوجيا المحركات عديمة الفرش (Brushless Core-Drive)',
      subtitle: 'محركات دراوولت الرقمية بدون فحمات بكفاءة ٩٢٪، بدون شرارات، بدون هدر للطاقة، ومع عمر تشغيلي أطول بـ ٣ أضعاف',
      loadControl: 'التحكم في الحمل الميكانيكي:',
      currentLoad: 'نسبة الحمل التشغيلي',
      rpmLabel: 'سرعة الدوران الحية (RPM)',
      tempLabel: 'حرارة الملف النحاسي',
      torqueLabel: 'عزم الدوران الفوري',
      efficiencyLabel: 'كفاءة الطاقة الإجمالية',
      brushlessVsCarbon: 'مقارنة كفاءة محركات دراوولت عديمة الفرش مقابل المحركات التقليدية ذات الفحمات',
      brushlessAdvantage: 'محرك دراوولت براشلس: كفاءة تتجاوز ٩٢٪، تبديد حراري من الألمنيوم، متحكم إلكتروني ذكي ESC',
      carbonDrawback: 'المحركات التقليدية: حرارة عالية، تآكل الفحمات، انخفاض الكفاءة بنسبة ٤٢٪ تحت الحمل الشاق المستمر',
      parts: {
        rotor: { name: 'دوار مغناطيسي نيوديميوم N52', desc: 'مغناطيسات أرضية نادرة ذات كثافة تدفق مغناطيسي فائقة لتوليد أقصى عزم دوران دون تأثر بالحرارة' },
        stator: { name: 'عضو ثابت من النحاس النقي ٩٩.٩٪', desc: 'ملفات نحاسية نقية مع عزل إيبوكسي مقاوم للأتربة يتحمل درجات حرارة تصل إلى ٢٠٠ درجة مئوية' },
        esc: { name: 'متحكم رقمي ذكي (Smart ESC)', desc: 'معالج دقيق ٣٢ بت مع خوارزميات توجيه العزم المتكيفة وحماية فورية من الحمل الزائد والدوائر القصيرة' },
        gearbox: { name: 'صندوق تروس كوكبي معدني بالكامل', desc: 'تروس مصنعة بدقة عالية من فولاذ الكروم-موليبدينوم المعالج حرارياً لنقل كامل القدرة الميكانيكية' },
        turbo: { name: 'مروحة تبريد توربينية طاردة مركزية', desc: 'تصميم ديناميكي هوائي لتوجيه تدفق الهواء عبر الملفات الداخلية للحفاظ على درجات حرارة منخفضة' },
      },
    },
    catalog: {
      tag: 'كتالوج المعدات الشامل',
      title: 'مجموعة أدوات دراوولت الاحترافية',
      subtitle: 'مصممة وفق معايير DIN الألمانية والمواصفات العالمية مع مقابض مضادة للاهتزاز',
      searchPlaceholder: 'ابحث عن الطراز أو الأداة (مثال: مفتاح عزم، صاروخ، دريل، ٩٨٢٠)...',
      allCategories: 'جميع الأدوات',
      catCordless: 'أدوات لاسلكية',
      catGrinding: 'القطع والتجليخ',
      catHammer: 'التكسير والتخريم',
      catLaser: 'أدوات الليزر الدقيقة',
      catBattery: 'البطاريات والشواحن',
      filterVoltage: 'جهد التشغيل:',
      allVoltages: 'جميع الفولتيات',
      btnDetails: 'المواصفات الفنية الكاملة',
      btnCompare: 'مقارنة المواصفات',
      btnAddToInquiry: 'إضافة لعرض الأسعار',
      inCart: 'مضاف في السلة',
      specsQuick: {
        torque: 'أقصى عزم دوران:',
        speed: 'السرعة بدون حمل:',
        voltage: 'جهد التشغيل:',
        weight: 'وزن الأداة:',
      },
    },
    battery: {
      tag: 'منصة البطاريات الموحدة',
      title: 'منظومة بطاريات DRA-Power',
      subtitle: 'بطارية واحدة لجميع أدوات خط الإنتاج؛ خلايا الجيل ٢١٧٠٠ مع نظام حماية وإدارة ذكي BMS بست طبقات',
      selectAh: 'اختر سعة البطارية لحساب إنتاجية العمل الحقيقية:',
      cellTech: 'خلايا الليثيوم-أيون الصناعية ٢١٧٠٠',
      cellTechDesc: 'طاقة أكبر بنسبة تصل إلى ٥٠٪ وتفريغ تيار مستمر مضاعف مقارنة بالخلايا القديمة ١٨٦٥٠',
      bmsTech: 'إدارة البطارية الذكية (حماية سداسية)',
      bmsTechDesc: 'حماية متكاملة من الشحن الزائد، الحرارة المرتفعة، التفريغ العميق، وتوازن تلقائي للفولتية بين الخلايا',
      fastCharge: 'شحن فائق السرعة بقوة ٨ أمبير',
      fastChargeDesc: 'شحن ٨٠٪ من سعة البطارية خلال ٢٥ دقيقة فقط مع نظام تبريد هوائي نشط',
      workloadEstimation: 'تقدير الإنتاجية العملية بشحنة واحدة كاملة:',
      rebarCuts: 'قطع قضبان حديد التسليح قياس ١٦ ملم',
      boltFastenings: 'ربط مسامير الهياكل المعدنية الثقيلة M24',
      concreteDrillHoles: 'تخريم خرسانة مسلحة عالية الكثافة بريشة ٢٠ ملم',
      perCharge: 'عملية منجزة لكل شحنة كاملة',
    },
    advisor: {
      tag: 'أداة التكوين الذكية',
      title: 'محرك التوصية الهندسية للأدوات',
      subtitle: 'في ٣ خطوات سريعة، احصل على أفضل باقة أدوات وبطاريات مخصصة لطبيعة مشاريعك ووردية العمل',
      step1Title: 'الخطوة ١: حدد مجالك الصناعي ونوع العمل الأساسي',
      step2Title: 'الخطوة ٢: ما هي شدة ساعات العمل اليومية وحجم الضغط؟',
      step3Title: 'الخطوة ٣: ما هي أولويتك الفنية الأساسية؟',
      industryLabel: 'الصناعة:',
      shiftLabel: 'طبيعة الوردية:',
      priorityLabel: 'الأولوية:',
      resultTitle: 'حزمة أدوات دراوولت الموصى بها لمشروعك:',
      recommendedPackage: 'الحزمة الصناعية المحسنة',
      btnRestart: 'إعادة ضبط المستشار',
      btnApplyPackage: 'إضافة الحزمة بالكامل لسلة الاستعلام',
    },
    warranty: {
      tag: 'التحقق وخدمات ما بعد البيع',
      title: 'نظام التحقق من الأصالة والضمان الذهبي ١٨ شهراً',
      subtitle: 'كل أداة أصلية من دراوولت تحمل رقماً تسلسلياً محفوراً بالليزر مع ضمان استبدال مجاني غير مشروط',
      inputPlaceholder: 'أدخل الرقم التسلسلي (مثال: DW-9820-PRO)...',
      btnCheck: 'فحص الأصالة وحالة الضمان',
      sampleSerials: 'أرقام تسلسلية تجريبية نشطة للفحص:',
      statusActive: 'الضمان الذهبي لمدة ١٨ شهراً سارٍ ونشط',
      statusExpired: 'فترة الضمان انتهت',
      statusInvalid: 'الرقم التسلسلي غير مسجل في السجل الرسمي',
      certificateTitle: 'شهادة الأصالة الرقمية والضمان الذهبي',
      serialLabel: 'الرقم التسلسلي الفريد:',
      modelLabel: 'طراز الأداة ومواصفاتها:',
      issueDate: 'تاريخ التفعيل:',
      expiryDate: 'تاريخ انتهاء التغطية:',
      daysRemaining: 'الأيام المتبقية من الضمان:',
      coverageType: 'نطاق الخدمة:',
      unconditionalReplace: 'استبدال كامل للمحرك والملفات واللوحة الإلكترونية وصندوق التروس',
      tabVerify: 'التحقق من الرقم التسلسلي',
      tabRegister: 'تسجيل وتفعيل ضمان أداة جديدة',
      regTitle: 'استمارة تفعيل بطاقة الضمان للأداة الجديدة',
      regCustomerName: 'اسم المشتري بالكامل',
      regPhone: 'رقم الهاتف للتأكيد عبر الرسائل القصيرة',
      regSerial: 'الرقم التسلسلي المطبوع على هيكل الجهاز',
      regDealer: 'اسم الموزع أو المعرض المعتمد',
      regSubmit: 'تأكيد وإصدار البطاقة الذهبية الرقمية',
      regSuccess: 'تم تفعيل الضمان بنجاح وتم تسجيل بيانات الأداة في النظام المركزي.',
    },
    dealers: {
      tag: 'شبكة الدعم والخدمات',
      title: 'شبكة الموزعين المعتمدين ومراكز الصيانة',
      subtitle: 'قطع غيار أصلية متوفرة، صيانة فورية بأعلى المعايير، واستقبال مطالبات الضمان في مختلف المناطق',
      selectCity: 'تصفية حسب المحافظة / المدينة:',
      allCities: 'كافة المدن والمناطق',
      btnCall: 'اتصال مباشر بالوكيل',
      btnMap: 'الموقع على الخريطة',
      serviceReady: 'مركز خدمة مجهز بقطع الغيار الأصلية',
      applyFranchise: 'طلب الحصول على وكالة توزيع رسمية',
      applyFranchiseSubtitle: 'انضم لشبكة موزعي أدوات دراوولت الصناعية في منطقتك',
      formName: 'اسم مقدم الطلب / اسم الشركة',
      formPhone: 'رقم الهاتف المباشر',
      formCity: 'المدينة والمحافظة المستهدفة',
      formExperience: 'الخبرة التجارية في مجال العدد الصناعية ومساحة المعرض',
      formSubmit: 'إرسال طلب الوكالة التجارية',
      formSent: 'تم استلام طلبك بنجاح! سيتواصل معك أحد مسؤولي المبيعات التجارية قريباً.',
    },
    inquiry: {
      title: 'سلة استعلام الأسعار والفاتورة التقديرية',
      subtitle: 'قائمة المعدات المختارة لإصدار فاتورة تقديرية رسمية معتمدة مع احتساب خصومات الكميات',
      emptyCart: 'سلة الاستعلام فارغة حالياً.',
      emptyCartPrompt: 'يرجى تصفح كتالوج المنتجات لإضافة الأدوات المطلوبة.',
      totalUnits: 'إجمالي عدد المعدات المختارة:',
      customerName: 'اسم مسؤول المشتريات / العميل',
      companyName: 'اسم الشركة أو المنشأة الصناعية',
      phone: 'رقم الهاتف المباشر لمتابعة العرض',
      notes: 'ملاحظات أو متطلبات خاصة بالمشروع (اختياري)',
      btnGenerateInvoice: 'إصدار وطباعة الفاتورة التقديرية الرسمية',
      btnExportPDF: 'تصدير نسخة العرض المعتمدة',
      officialStamp: 'ختم وتوقيع الشؤون التجارية لدراوولت',
      invoiceTitle: 'عرض سعر تجاري رسمي للمعدات الصناعية',
      invoiceSubtitle: 'صادر عن شركة أدوات دراوولت الصناعية (DRAWOLT Tools)',
    },
    ramax: {
      title: 'راماكس (Ramax)',
      subtitle: 'مساعد دراوولت الصناعي بالذكاء الاصطناعي',
      statusOnline: 'متصل وجاهز للإجابة التقنية',
      welcomeMsg: 'مرحباً! أنا راماكس، مساعد الذكاء الاصطناعي المتخصص في أدوات دراوولت الصناعية. تفضل بطرح أي سؤال فني حول عزم الدوران، أداء البطاريات، المحركات عديمة الفرش، أو التحقق من الضمان!',
      inputPlaceholder: 'اكتب استفسارك الفني أو اضغط زر الميكروفون...',
      listening: 'جارٍ الاستماع لصوتك...',
      speaking: 'جارٍ قراءة الإجابة الفنية...',
      btnSend: 'إرسال',
      quickPrompts: [
        'ما هو أقوى مفتاح ربط لاسلكي لدى دراوولت؟',
        'ما هي مزايا المحركات عديمة الفرش مقارنة بالمحركات التقليدية؟',
        'ما هي شروط وتغطية الضمان الذهبي لمدة ١٨ شهراً؟',
        'كيف تؤدي بطارية ٨ أمبير في أعمال قطع حديد التسليح؟',
      ],
      voiceNotSupported: 'خاصية التعرف الصوتي غير مدعومة في هذا المتصفح، يرجى كتابة السؤال.',
    },
    developer: {
      credit: 'تم التصميم والبرمجة بواسطة شركة تطوير هندسة البرمجيات والبرمجة بازل رايانه (ذ.م.م) س.ت ٥٢٧٥٩١',
      companyName: 'شركة تطوير هندسة البرمجيات والبرمجة بازل رايانه (ذات مسؤولية محدودة)',
      regNumber: 'رقم السجل التجاري الرسمي: ٥٢٧٥٩١',
      detailsBtn: 'شهادة هندسة البرمجيات',
      modalTitle: 'شهادة هندسة البرمجيات والمواصفات المعمارية للبوابة',
      modalSubtitle: 'التصميم وبنية البيانات والهندسة الشاملة بواسطة شركة بازل رايانه (س.ت ٥٢٧٥٩١)',
      techStackTitle: 'المعمارية التقنية للبرمجيات:',
      standardsTitle: 'معايير هندسة الويب المطبقة:',
      contactTitle: 'بيانات التواصل والاعتماد لشركة بازل رايانه:',
    },
    footer: {
      desc: 'دراوولت (DRAWOLT) رائدة في تصنيع الأدوات الصناعية اللاسلكية والكهربائية الشاقة، المصممة لتلائم أصعب بيئات العمل مع أقصى درجات الأمان والمتانة الميكانيكية.',
      quickLinks: 'روابط سريعة',
      products: 'فئات المعدات',
      support: 'الدعم وخدمة العملاء',
      warrantyPolicy: 'سياسة الضمان الذهبي ١٨ شهراً للاستبدال بدون قيد أو شرط',
      certifications: 'حاصلة على شهادة CE الأوروبية، ISO 9001، ومطابقة لاختبارات DIN الألمانية للصلابة',
      allRightsReserved: 'جميع الحقوق محفوظة لشركة أدوات دراوولت الصناعية (DRAWOLT).',
    },
  },
  de: {
    brand: {
      name: 'DRAWOLT',
      tagline: 'Schwerlast-Industriewerkzeuge',
      subtagline: 'Bürstenlose Digitalantriebe & Einheitliches Akkusystem',
      heavyDuty: 'Industriell konstruiert für maximales Drehmoment und höchste Baustellenzähigkeit',
    },
    nav: {
      products: 'Industriewerkzeuge',
      brushlessTech: 'Brushless-Technik',
      batteryEcosystem: 'Akku-Plattform',
      smartAdvisor: 'Werkzeugberater',
      warranty: '18M Garantie',
      dealers: 'Händlernetz',
      catalog: 'Katalog 2026',
      inquiryCart: 'Preisanfrage',
      contact: 'Support',
      toggleTheme: 'Tag- / Nachtmodus',
      requestQuote: 'Angebot anfordern',
    },
    hero: {
      badge: 'Die neue Generation kabelloser Industriewerkzeuge 2026',
      titlePrimary: 'Höchstes Drehmoment & kompromisslose Ausdauer mit',
      titleHighlight: 'DRAWOLT Industriewerkzeugen',
      description: 'Konzipiert für den 24/7-Dauereinsatz im Stahlbau, schwere Betonbauprojekte und Fertigungsstraßen mit führenden 980 N.m Drehmoment und reibungsfreien bürstenlosen Motoren.',
      ctaCatalog: 'Katalog ansehen',
      ctaAdvisor: 'Intelligenter Berater',
      ctaWarranty: 'Garantieprüfung',
      kpiTorque: '980 N.m',
      kpiTorqueSub: 'Max. Drehmoment Akku-Schlagschrauber',
      kpiWarranty: '18 Monate',
      kpiWarrantySub: 'Bedingungslose Austauschgarantie auf Hauptkomponenten',
      kpiPlatform: '40+ Geräte',
      kpiPlatformSub: 'Einheitliche DRA-Power Akkuplattform',
      kpiGears: '100% Cr-Mo',
      kpiGearsSub: 'Gehärtete Chrom-Molybdän-Planetengetriebe',
    },
    simulator: {
      tag: 'Motor-Anatomie-Simulator',
      title: 'Bürstenlose Core-Drive Technologie',
      subtitle: 'DRAWOLT bürstenlose Digitalmotoren bieten 92% Wirkungsgrad, funkenfreien Betrieb, keine Energieverschwendung und 3x längere Lebensdauer',
      loadControl: 'Steuerung der mechanischen Belastung:',
      currentLoad: 'Betriebslast in %',
      rpmLabel: 'Aktuelle Drehzahl (U/min)',
      tempLabel: 'Wicklungstemperatur (°C)',
      torqueLabel: 'Momentanes Drehmoment (N.m)',
      efficiencyLabel: 'Gesamtwirkungsgrad',
      brushlessVsCarbon: 'DRAWOLT Brushless im Vergleich zu herkömmlichen Kohlebürstenmotoren',
      brushlessAdvantage: 'DRAWOLT Brushless: 92%+ Wirkungsgrad, Aluminium-Druckguss-Kühlung, intelligenter ESC-Regler',
      carbonDrawback: 'Klassische Bürstenmotoren: Hohe Hitzeentwicklung, Bürstenfeuer, Kommutatorverschleiß, 42% Leistungsabfall unter Dauerlast',
      parts: {
        rotor: { name: 'N52 Neodym-Magnetrotor', desc: 'Seltene-Erden-Magnete mit ultrahoher magnetischer Flussdichte für maximales Drehmoment ohne thermische Entmagnetisierung' },
        stator: { name: '99,9% Reinkupfer-Stator (Klasse H)', desc: 'Hochdichte Reinkupferwicklungen mit staubdichter Epoxidharz-Isolierung bis 200°C Dauerbetrieb' },
        esc: { name: 'Intelligente digitale Motorsteuerung (Smart ESC)', desc: '32-Bit-Mikroprozessor mit adaptiver Drehmomentvektorierung und Überlastungs- sowie Kurzschlussschutz in Echtzeit' },
        gearbox: { name: 'Vollmetall-Planetengetriebe mit 2 Gängen', desc: 'Präzisionsgefräste Chrom-Molybdän-Stahlräder mit Oberflächenhärtung für verlustfreie Kraftübertragung' },
        turbo: { name: 'Turbo-Zentrifugallüfter', desc: 'Aerodynamisch optimierter Kühlluftstrom direkt über die Wicklungen für dauerhaft kühlen Lauf bei harten Schichten' },
      },
    },
    catalog: {
      tag: 'Umfassender Gerätekatalog',
      title: 'Die professionelle DRAWOLT Gerätefamilie',
      subtitle: 'Konstruiert nach deutschen DIN-Normen und internationalen Sicherheitsstandards mit ergonomischer Schwingungsdämpfung',
      searchPlaceholder: 'Modell oder Gerät suchen (z. B. Schlagschrauber, Winkelschleifer, 9820)...',
      allCategories: 'Alle Werkzeuge',
      catCordless: 'Akku-Werkzeuge',
      catGrinding: 'Trennen & Schleifen',
      catHammer: 'Bohr- & Meißelhämmer',
      catLaser: 'Präzisions-Lasertechnik',
      catBattery: 'Akkus & Ladegeräte',
      filterVoltage: 'Betriebsspannung:',
      allVoltages: 'Alle Spannungen',
      btnDetails: 'Vollständige Daten',
      btnCompare: 'Vergleichen',
      btnAddToInquiry: 'Zur Preisanfrage',
      inCart: 'In der Anfrage',
      specsQuick: {
        torque: 'Max. Drehmoment:',
        speed: 'Leerlaufdrehzahl:',
        voltage: 'Betriebsspannung:',
        weight: 'Nettogewicht:',
      },
    },
    battery: {
      tag: 'Universelle Akkuplattform',
      title: 'Das DRA-Power Akkusystem',
      subtitle: 'Ein Akku für den gesamten Maschinenpark; 21700-Zellen mit höchster Energiedichte und 6-fachem intelligentem BMS-Schutz',
      selectAh: 'Akkukapazität zur Berechnung der realen Arbeitsleistung wählen:',
      cellTech: '21700 Industrie-Lithium-Ionen-Zellen',
      cellTechDesc: 'Bis zu 50% mehr Leistungsabgabe und 3-fach höhere Dauerentladung im Vergleich zu älteren 18650-Zellen',
      bmsTech: 'Intelligentes Batteriemanagementsystem (BMS)',
      bmsTechDesc: 'Schutz vor Überladung, Überhitzung, Tiefentladung, Kurzschlüssen und automatische Zellspannungssymmetrierung',
      fastCharge: '8A Turbo-Schnellladegerät mit Aktivkühlung',
      fastChargeDesc: 'Erreicht 80% Ladekapazität in nur 25 Minuten dank integrierter Lüfterkühlung',
      workloadEstimation: 'Geschätzte Arbeitsleistung mit einer einzigen Akkuladung:',
      rebarCuts: 'Schnitte von 16mm Rippenstahl/Bewehrungsstahl',
      boltFastenings: 'Verschraubungen von M24-Stahlbau-Schrauben',
      concreteDrillHoles: 'Bohrungen in hochfesten Beton mit 20mm SDS-Bohrer',
      perCharge: 'Arbeitsgänge pro voller Akkuladung',
    },
    advisor: {
      tag: 'Intelligenter Werkzeugkonfigurator',
      title: 'Technischer Empfehlungsassistent',
      subtitle: 'Finden Sie in 3 Schritten das optimale Werkzeug- und Akku-Paket für Ihre Branche und tägliche Schichtbelastung',
      step1Title: 'Schritt 1: Wählen Sie Ihre Branche und Hauptanwendung',
      step2Title: 'Schritt 2: Wie intensiv ist Ihre tägliche Schichtbelastung?',
      step3Title: 'Schritt 3: Was ist Ihre oberste technische Priorität?',
      industryLabel: 'Branche:',
      shiftLabel: 'Schichtbelastung:',
      priorityLabel: 'Priorität:',
      resultTitle: 'Empfohlenes DRAWOLT Industriepaket:',
      recommendedPackage: 'Optimiertes Werkstatt-Paket',
      btnRestart: 'Neu konfigurieren',
      btnApplyPackage: 'Komplettes Paket zur Preisanfrage hinzufügen',
    },
    warranty: {
      tag: 'Verifizierung & Kundendienst',
      title: '18 Monate Gold-Garantie-Prüfung',
      subtitle: 'Jedes originale DRAWOLT Werkzeug besitzt eine lasergravierte Seriennummer mit bedingungsloser Austauschgarantie',
      inputPlaceholder: 'Seriennummer eingeben (z. B. DW-9820-PRO)...',
      btnCheck: 'Echtheit & Status prüfen',
      sampleSerials: 'Aktive Test-Seriennummern zum Ausprobieren:',
      statusActive: '18 Monate Gold-Garantie ist AKTIV und gültig',
      statusExpired: 'Garantiezeitraum ist abgelaufen',
      statusInvalid: 'Seriennummer nicht im offiziellen Register gefunden',
      certificateTitle: 'Digitales Echtheitszertifikat & Gold-Garantie',
      serialLabel: 'Eindeutige Laser-Seriennummer:',
      modelLabel: 'Modell & Gerätespezifikation:',
      issueDate: 'Aktivierungsdatum:',
      expiryDate: 'Garantieablaufdatum:',
      daysRemaining: 'Verbleibende Garantietage:',
      coverageType: 'Leistungsumfang:',
      unconditionalReplace: 'Vollständiger Austausch von Anker, Stator, Elektronik und Getriebe',
      tabVerify: 'Seriennummer prüfen',
      tabRegister: 'Neues Gerät registrieren',
      regTitle: 'Portal zur Garantieregistrierung für Neugeräte',
      regCustomerName: 'Name des Käufers',
      regPhone: 'Mobilnummer für SMS-Bestätigung',
      regSerial: 'Seriennummer am Werkzeuggehäuse',
      regDealer: 'Name des autorisierten Händlers',
      regSubmit: 'Registrieren & Goldkarte generieren',
      regSuccess: 'Garantie erfolgreich registriert! Bestätigung wurde vermerkt.',
    },
    dealers: {
      tag: 'Bundesweites Servicenetz',
      title: 'Autorisierte Händler & Servicezentren',
      subtitle: 'Original-Ersatzteillager, garantierte Reparatur unter 24 Stunden und offizielle Garantieabwicklung',
      selectCity: 'Nach Region / Stadt filtern:',
      allCities: 'Alle Regionen und Städte',
      btnCall: 'Händler direkt anrufen',
      btnMap: 'Auf Karte anzeigen',
      serviceReady: 'Voll ausgestattete Servicestation mit Originalteilen',
      applyFranchise: 'Als offizieller Vertriebspartner bewerben',
      applyFranchiseSubtitle: 'Werden Sie autorisierter DRAWOLT Partner in Ihrer Region',
      formName: 'Name des Bewerbers / Firma',
      formPhone: 'Direkte Telefonnummer',
      formCity: 'Zielstadt und Bundesland/Provinz',
      formExperience: 'Handelserfahrung im Werkzeugbereich und Ausstellungsfläche',
      formSubmit: 'Bewerbung absenden',
      formSent: 'Bewerbung erfolgreich eingegangen! Unser Vertriebsteam wird sich in Kürze mit Ihnen in Verbindung setzen.',
    },
    inquiry: {
      title: 'Offizielle Preisanfrage & Vorabrechnung',
      subtitle: 'Ausgewählte Geräte zur Erstellung eines offiziellen Angebots mit Firmenstempel und Mengenrabatt',
      emptyCart: 'Ihr Preisanfrage-Korb ist derzeit leer.',
      emptyCartPrompt: 'Bitte fügen Sie Werkzeuge aus dem Produktkatalog hinzu.',
      totalUnits: 'Ausgewählte Geräte gesamt:',
      customerName: 'Ansprechpartner / Einkaufsleiter',
      companyName: 'Firma oder Gewerbebetrieb',
      phone: 'Telefonnummer für Rückfragen',
      notes: 'Projektspezifische Anforderungen (optional)',
      btnGenerateInvoice: 'Offizielles Angebot erstellen & drucken',
      btnExportPDF: 'Bestätigtes Angebot exportieren',
      officialStamp: 'DRAWOLT Firmensiegel & Unterschrift',
      invoiceTitle: 'Offizielles kommerzielles Ausrüstungsangebot',
      invoiceSubtitle: 'Ausgestellt von der DRAWOLT Industrial Tools Corporation',
    },
    ramax: {
      title: 'Ramax KI',
      subtitle: 'DRAWOLT Industrie-KI-Assistent',
      statusOnline: 'Online & Technische Unterstützung bereit',
      welcomeMsg: 'Hallo! Ich bin Ramax, Ihr DRAWOLT Industrie-KI-Assistent. Fragen Sie mich nach technischen Daten, Drehmomenten, Akkutests, bürstenlosen Motoren oder Garantien!',
      inputPlaceholder: 'Technische Frage stellen oder Mikrofon drücken...',
      listening: 'Höre Ihre Stimme...',
      speaking: 'Antworte sprachlich...',
      btnSend: 'Senden',
      quickPrompts: [
        'Was ist der stärkste Akku-Schlagschrauber von DRAWOLT?',
        'Welche Vorteile haben bürstenlose Motoren?',
        'Was deckt die 18-monatige Gold-Garantie ab?',
        'Wie schlägt sich der 8.0Ah Akku beim Schneiden von Bewehrungsstahl?',
      ],
      voiceNotSupported: 'Spracherkennung wird in diesem Browser leider nicht unterstützt.',
    },
    developer: {
      credit: 'Entworfen und programmiert von der Software- & Programmiertechnik-Entwicklungsgesellschaft Puzzle Rayaneh GmbH, Reg.-Nr. 527591',
      companyName: 'Puzzle Rayaneh Software- & Programmiertechnik-Entwicklungsgesellschaft mbH',
      regNumber: 'Offizielle Registrierungsnummer: 527591',
      detailsBtn: 'Software-Zertifikat',
      modalTitle: 'Software-Engineering-Zertifikat & Systemarchitektur',
      modalSubtitle: 'Design, Datenarchitektur und Full-Stack-Entwicklung durch Puzzle Rayaneh mbH (Reg.-Nr. 527591)',
      techStackTitle: 'Softwarearchitektur & Technologien:',
      standardsTitle: 'Implementierte Webstandards:',
      contactTitle: 'Kontakt & Qualifikationen von Puzzle Rayaneh:',
    },
    footer: {
      desc: 'DRAWOLT ist ein führender Hersteller von extrem widerstandsfähigen Akku- und Elektrowerkzeugen für schwerste Baustellenbedingungen mit maximalem Anwenderschutz und höchster mechanischer Zuverlässigkeit.',
      quickLinks: 'Schnellzugriff',
      products: 'Werkzeugkategorien',
      support: 'Support & Kundendienst',
      warrantyPolicy: '18 Monate Gold-Garantie mit bedingungslosem Teileaustausch',
      certifications: 'Zertifiziert nach europäischen CE-, ISO 9001- und deutschen DIN-Prüfnormen',
      allRightsReserved: 'Alle Rechte vorbehalten von der DRAWOLT Industrial Tools Corporation.',
    },
  },
};

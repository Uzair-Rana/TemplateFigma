// src/config/globalTailwindConfig.js

const globalTailwindConfig = {
    layout: {
        fullScreenFlexCol: "relative flex flex-col items-center justify-start min-h-screen overflow-hidden",
        fullWidthFlexCol: "relative z-10 w-full flex flex-col",
    },

    background: {
        light: "bg-light",
        overlay: "absolute inset-0 bg-overlay z-10",
        coverCenter: "absolute inset-0 bg-cover bg-center z-0",
    },

    padding: {
        base: "p-4 Mobile:p-6 Tablet:p-8 Laptop:p-16",
        lgMedium: "lg:p-mbMedium", // keep your old class for other sections if needed
    },

    landingPage: {
        foreground: "relative z-20 w-full flex flex-col",
    },
    navbarSection: {
        container: "w-full px-4 lg:px-0 mx-auto mt-[20px]",
        menuWrapper: "relative w-[469px] h-6 mx-auto mt-[85px]",
        menuItem: "absolute text-white text-base font-medium font-['DM_Sans'] leading-sm",
        menuItemInactive: "absolute text-white text-base font-medium font-['DM_Sans'] leading-sm opacity-30",
        icon: "absolute text-white text-base font-normal font-['FontAwesome']",
    },
    buttonSection: {
        wrapper: "mb-mbLarge",
        button: `
        px-[41px] 
        py-[16px] 
        bg-primary 
        text-white 
        font-semibold 
        rounded-full 
        shadow-soft 
        hover:shadow-glow 
        transition-all 
        duration-300`,
    },

    heroSection: {
        container: "relative z-10 flex flex-col items-center mt-[142px] Mobile:mt-[20px] Tablet:m-[5px] text-center text-light",
        slidesWrapper: "relative flex justify-center items-center w-full min-h-minHeroHeight perspective-[1000px]",
        arrowButton: "absolute text-white text-3xl font-normal hover:opacity-100 transition-opacity",
        arrowButtonRight: "absolute text-white text-3xl font-normal hover:text-accent transition-colors",
        slideCard: "flex flex-col items-center max-w-cardMax transition-all duration-700 ease-in-out transform-gpu",
        slideCardActive: "opacity-100 scale-100",
        slideCardInactive: "opacity-0 scale-95 absolute",
        slideCardRotateNext: "rotate-y-180",
        slideCardRotatePrev: "rotate-y--180",
        slideCardRotateNone: "rotate-y-0",
        title: "text-xs leading-xs font-bold uppercase mb-3 text-white opacity-90 w-h4Width",
        heading: "text-lg leading-md text-white font-extrabold mb-mbHeading w-cardMax",
        description: "text-md leading-sm text-white opacity-90 mb-mbMedium max-w-[600px] text-center",
        dotsWrapper: "flex space-x-dotGap mb-mbMedium",
        dot: "w-dotW h-dotH rounded-full border border-white",
        dotActive: "bg-white",
        dotInactive: "bg-transparent",
    },

    contentSection: {
        container: "relative flex items-center justify-center overflow-hidden bg-[#2F1893]",
        backgroundWrapper: "relative w-full bg-cover bg-center bg-no-repeat text-white flex justify-center",
        innerContainer: "flex flex-col items-center justify-center text-center max-w-[815px] w-full pt-[107px] pb-[126px]",
        subheading: "text-[18px] text-white font-semibold uppercase tracking-wide mb-[29px]",
        heading: "text-[48px] text-white leading-[70px] font-extrabold mb-[28px] max-w-[815px]",
        paragraph: "text-[16px] text-white leading-[28px] max-w-[775px]",
    },
    featuresSection: {
        container: "relative inset-0 bg-[#2F1893]",
        sectionWrapper: "w-full h-[736px] relative bg-indigo-900 overflow-hidden",
        backgroundImage: "w-full h-[736px] left-0 top-0 absolute",
        mockupImage: "w-[983.30px] h-[535.77px] left-[-501.74px] top-[100px] absolute",
        overlay: "w-[983.30px] h-[535.77px] left-[-501.74px] top-[100px] absolute bg-black/0",
        text: {
            mainTitle: "left-[515px] top-[158px] absolute justify-start text-white text-5xl font-bold font-['DM_Sans'] leading-[52px]",
            description: "w-[600px] left-[515px] top-[230px] absolute justify-start text-white text-xl font-medium font-['DM_Sans'] leading-8",
        },
        cards: {
            title1: "left-[516px] top-[458.20px] absolute justify-start text-white text-sm font-bold font-['DM_Sans'] uppercase leading-6 tracking-widest",
            subtitle1: "w-64 left-[516px] top-[500.40px] absolute justify-start text-white text-base font-normal font-['DM_Sans'] leading-6",
            icon1: "w-9 h-9 left-[515px] top-[391.60px] absolute justify-start text-white text-4xl font-normal font-['FontAwesome']",
            title2: "left-[816px] top-[458.20px] absolute justify-start text-white text-sm font-bold font-['DM_Sans'] uppercase leading-6 tracking-widest",
            subtitle2: "w-64 left-[816px] top-[500.40px] absolute justify-start text-white text-base font-normal font-['DM_Sans'] leading-6",
            icon2: "w-11 h-9 left-[815px] top-[391.60px] absolute justify-start text-white text-4xl font-normal font-['FontAwesome']",
        },
        verticalDots: {
            wrapper: "w-24 h-2.5 left-[1285px] top-[323px] absolute origin-top-left rotate-90 overflow-hidden",
            dot: "w-2.5 h-2.5 left-[1px] absolute opacity-30 justify-start text-white text-xs font-normal font-['FontAwesome'] leading-9",
            dotActive: "w-2.5 h-2.5 left-[1px] absolute justify-start text-white text-xs font-normal font-['FontAwesome'] leading-9",
        },
    },
    formSection: {
        container: "relative min-h-screen flex items-center justify-center p-4 overflow-hidden bg-[#2F1893]",
        backgroundOverlay: "absolute inset-0 bg-cover bg-center",
        contentWrapper: "relative z-10 flex flex-row max-w-7xl mx-auto",
        leftSection: "text-white flex flex-col justify-center",
        leftSectionCustomStyles: {
            paddingTop: "216px",
            paddingBottom: "216px",
            marginRight: "130px",
            width: "369px",
            minHeight: "318px",
        },
        heading: "text-5xl font-bold leading-snug mb-4",
        paragraph: "text-base opacity-80",
        rightSection: "flex items-center justify-center",
    },
    testimonialSection: {
        container: "min-h-screen bg-[#352F7A] font-sans py-24 px-4",
        maxWrapper: "max-w-6xl mx-auto",
        headingWrapper: "mb-16 text-center md:text-left",
        heading: "text-white text-4xl sm:text-5xl font-extrabold font-['DM_Sans'] leading-tight",
        grid: "grid grid-cols-1 gap-10 md:grid-cols-2",
        card: {
            container: "p-[40px] rounded-2xl transition duration-300 ease-in-out flex flex-row gap-[30px] border border-[#ffffff] min-h-[220px] md:min-h-[230px]",
            avatar: "w-16 h-16 md:w-20 md:h-20 rounded-[10px] object-cover flex-shrink-0",
            contentWrapper: "flex flex-col justify-between flex-1",
            testimonialText: "text-white text-lg md:text-xl font-medium font-['DM_Sans'] leading-relaxed mb-4",
            clientName: "text-white font-bold font-['DM_Sans'] uppercase leading-6 tracking-wider text-base",
        },
    },
    actionSection: {
        container: "relative mx-auto h-[605px] bg-indigo-900 overflow-hidden",
        backgroundImage: "w-full h-full object-cover",
        contentWrapper: "absolute inset-0 flex flex-col items-center justify-center text-center space-y-6 px-4",
        heading: "text-white font-bold font-['DM_Sans'] text-5xl sm:text-4xl md:text-6xl leading-tight",
        subheading: "text-white font-light font-['DM_Sans'] text-2xl leading-8 max-w-[518px] opacity-90",
        buttonsWrapper: "flex items-center justify-center gap-5 mt-6",
        youtubeButton: "w-16 h-16 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition",
        youtubeIcon: "w-6 h-6",
        getStartedButton: "bg-teal-400 rounded-full w-52 h-16 text-white text-xl font-medium font-['DM_Sans'] flex items-center justify-center hover:bg-teal-500 transition",
        videoModal: "fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50",
        videoWrapper: "w-[90%] max-w-3xl aspect-video relative",
        iframe: "w-full h-full",
    },
    showcaseSection: {
        container: "bg-indigo-900 w-full py-24 min-h-screen font-sans",
        maxWrapper: "max-w-full mx-auto px-4 sm:px-8 lg:px-16",
        headerWrapper: "flex flex-col md:flex-row justify-between items-center mb-16",
        headerTitle: "text-white text-5xl font-bold font-['DM_Sans'] leading-[52px] mb-8 md:mb-0",
        headerButton: "w-44 h-12 relative",
        buttonBorder: "w-full h-full absolute top-0 left-0 rounded-[100px] border-2 border-white transition",
        buttonText: "absolute inset-0 flex items-center justify-center text-white text-sm font-medium font-['DM_Sans'] leading-6",
        grid: "grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-24",
        card: {
            container: "flex flex-col items-center",
            imageWrapper: "relative w-full h-72 overflow-hidden rounded-xl shadow-xl mb-6",
            image: "w-full h-full object-cover",
            category: "text-center text-white text-sm font-bold font-['DM_Sans'] uppercase leading-6 tracking-widest mb-1",
            title: "text-center text-white text-xl font-medium font-['DM_Sans'] leading-8",
        },
    },
    teamSection: {
        container: "w-full bg-indigo-900 py-24 px-[115px] flex flex-col",
        headerWrapper: "flex flex-col mb-16 max-w-[764px]",
        headerTitle: "text-white text-7xl font-bold font-['DM_Sans'] leading-[52px] mb-6",
        headerParagraph: "text-white text-2xl font-semibold font-['DM_Sans'] leading-8 opacity-70",
        cardsGrid: "grid grid-cols-3 gap-x-[146px] gap-y-[61px] max-w-[764px]",
        card: {
            container: "flex flex-col items-center text-center mb-10 py-8",
            avatar: "w-28 h-28 rounded-full object-cover border-2 border-white/40",
            name: "text-white text-xl font-medium font-['DM_Sans'] leading-8 mb-1",
            role: "text-white text-base font-normal font-['DM_Sans'] leading-6 opacity-60 mb-4",
            socialWrapper: "flex gap-4",
            socialIcon: "text-white opacity-70 hover:opacity-100 transition-opacity text-xl font-bold",
        },
    },

    // ---------- Contact Section (NEW) ----------
    contactSection: {
        container: "relative overflow-hidden bg-[#2F1893] w-full py-24",
        backgroundImage: "absolute inset-0 w-full h-full object-cover",
        contentWrapper: "max-w-full flex flex-row items-start px-20 gap-[100px] relative z-10",
        leftSide: "flex flex-col space-y-10 pt-8",
        heading: "text-white text-[44px] font-bold leading-[52px] max-w-[400px]",
        paragraph: "text-white text-[20px] font-medium leading-[32px] max-w-[380px]",
        infoItem: "flex items-center gap-4",
        infoIcon: "text-[22px]",
        infoText: "text-white text-[18px] leading-[28px]",
        infoTextSmall: "text-white text-[16px] leading-[28px] max-w-[230px]",
        rightSide: "bg-white rounded-[10px] w-full max-w-[470px] py-10 px-12 flex flex-col space-y-8 shadow-md",
        inputGroup: "flex flex-col space-y-2",
        label: "text-violet-950 text-sm font-bold uppercase tracking-widest",
        input: "border-2 border-gray-200 rounded-full px-6 py-3 text-slate-900/40 text-sm font-medium outline-none focus:border-teal-400 transition",
        textarea: "border-2 border-gray-200 rounded-xl px-5 py-3 text-slate-900/40 text-sm font-medium h-[110px] resize-none outline-none focus:border-teal-400 transition",
        checkboxWrapper: "flex items-center justify-between pt-2",
        checkboxLabel: "flex items-center gap-3",
        checkboxInput: "w-5 h-5 accent-teal-400 rounded-md",
        checkboxText: "text-slate-900/40 text-base font-normal",
        button: "bg-teal-400 hover:bg-teal-500 text-white text-sm font-medium rounded-full px-8 py-3 transition",
    },
    // Add this to the existing globalTailwindConfig.js

    pricingTableSection: {
        container: "relative w-full overflow-hidden bg-indigo-900 bg-cover bg-center",
        header: "text-white text-5xl font-bold leading-[52px]",
        subHeader: "text-white text-xl font-medium leading-8",
        cardContainer: "relative w-full h-full",
        cardBackground: "absolute top-0 left-0 w-full h-full rounded-[10px] border-2 border-white backdrop-blur-sm",
        cardContent: "relative w-full h-full p-10 flex flex-col justify-between",
        cardTitle: "text-white text-xl font-medium leading-8 font-['DM_Sans']",
        cardPrice: "text-white text-6xl font-bold leading-[70px] font-['DM_Sans']",
        cardDollarSign: "text-white text-base font-normal font-['DM_Sans'] mt-3 ml-1",
        featureRow: "flex items-start text-left mb-2.5",
        featureDotWrapper: "flex items-center w-6 h-6 flex-shrink-0",
        featureDot: "w-2 h-2 bg-white rounded-full",
        featureText: "text-white text-base font-normal font-['DM_Sans'] leading-6 text-left",
        getStartedButtonWrapper: "flex justify-center mt-auto pt-8",
        getStartedButton: "w-56 h-14 relative",
        buttonInner: "w-56 h-14 rounded-[100px] border-2 border-white absolute top-0 left-0 transition-colors",
        buttonText: "absolute w-full h-full text-center text-white text-xl font-medium font-['DM_Sans'] leading-6 flex justify-center items-center",
        buttonPink: "bg-pink-600 border-none opacity-100",
    },

    // Add this to your existing globalTailwindConfig.js

    footerSection: {
        container: "relative w-full overflow-hidden bg-[#2F1893]",
        logo: "absolute text-white text-2xl font-bold font-['DM_Sans']",
        policyLink: "absolute text-white text-base font-normal font-['DM_Sans']",
        socialIcon: "absolute text-white text-lg font-normal uppercase",
        separatorLine: "absolute bg-white opacity-30",
        navLink: "absolute text-white text-base font-normal font-['DM_Sans']",
        copyright: "absolute text-white text-base font-normal font-['DM_Sans'] text-right",
    },

};

export default globalTailwindConfig;

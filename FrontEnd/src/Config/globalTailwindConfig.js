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
        base: "p-4 Mobile:p-6 Tablet:p-8",
        lgMedium: "lg:p-mbMedium",
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
        menuItemPositions: {
            home: "left-0 top-0",
            features: "left-[94px] top-0",
            pricing: "left-[212px] top-0",
            blog: "left-[313px] top-0",
        },
        iconPositions: {
            first: "left-[392px] top-[4px] pt-[2px]",
            second: "left-[448px] top-[4px] pt-[2px]",
        },
        mobileTopBar: "text-white font-bold text-base text-center bg-black/50 w-[70%] rounded-md py-1 px-3 mx-auto text-[0.9rem]",
        hamburgerButton: "flex flex-col justify-center items-center w-8 h-8 space-y-1",
        hamburgerLine: "block w-6 h-[2px] bg-white transition-transform duration-300",
        hamburgerLineFade: "block w-6 h-[2px] bg-white transition-opacity duration-300",
        mobileMenuOverlay: "fixed inset-0 z-50 flex justify-center items-start pt-8 bg-black/70",
        mobileMenuContainer: "flex flex-col items-center justify-center space-y-4 text-white text-sm font-medium border border-white bg-opacity-80 rounded-lg p-3 w-10/12 max-w-xs",
        mobileMenuIconsWrapper: "flex space-x-4 mt-2 text-xl",
    },

    buttonSection: {
        wrapper: "mb-mbLarge Mobile:flex Mobile:justify-center Mobile:items-center Mobile:mb-0 Tablet:mb-0 Tablet:mt-0 Tablet:flex Tablet:justify-center Tablet:items-center",
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
            duration-300
            Mobile:px-4 Mobile:py-2 Mobile:text-sm Mobile:w-auto
            Tablet:px-5 Tablet:py-2.5 Tablet:text-base Tablet:w-auto
        `,
    },

    heroSection: {
        container: `
  relative z-10 flex flex-col items-center justify-center mt-[142px] 
  text-center text-light 
  Mobile:mt-0 Mobile:justify-start
  Tablet:mt-0 Tablet:justify-start
`,
        slidesWrapper: "relative flex justify-center items-center w-full min-h-minHeroHeight perspective-[1000px] Mobile:min-h-[400px] Tablet:min-h-[500px] Mobile:mt-0 Mobile:justify-start Tablet:mt-0 Tablet:justify-start",
        arrowButton: "absolute left-[20px] top-[80px] -translate-y-1/2 text-white text-3xl font-normal hover:opacity-100 transition-opacity Mobile:top-[175px] Tablet:left-[15px] Mobile:text-xl Tablet:text-3xl",
        arrowButtonRight: "absolute right-[20px] top-[80px] -translate-y-1/2 text-white text-3xl font-normal hover:text-accent transition-colors Mobile:top-[175px] Tablet:right-[15px] Mobile:text-xl Tablet:text-3xl",
        slideCard: "flex flex-col items-center max-w-cardMax transition-all duration-700 ease-in-out transform-gpu Mobile:px-1 Mobile:mb-1 Tablet:px-2 Tablet:mb-3",
        slideCardActive: "opacity-100 scale-100",
        slideCardInactive: "opacity-0 scale-95 absolute",
        slideCardRotateNext: "rotate-y-180",
        slideCardRotatePrev: "rotate-y--180",
        slideCardRotateNone: "rotate-y-0",
        title: "text-xs leading-xs font-bold uppercase mb-3 text-white opacity-90 w-h4Width Mobile:text-[10px] Tablet:text-[9px]",
        heading: "text-lg leading-md text-white font-extrabold mb-mbHeading w-cardMax Mobile:text-sm Mobile:font-base Mobile:mb-2 Tablet:text-xl Tablet:mb-3",
        description: "text-md leading-sm text-white opacity-90 mb-mbMedium max-w-[600px] text-center Mobile:text-[3px] Mobile:max-w-[30%] Tablet:text-base Tablet:mb-3",
        dotsWrapper: "flex space-x-dotGap mb-mbMedium Mobile:space-x-2 Tablet:space-x-3",
        dot: "w-dotW h-dotH rounded-full border border-white",
        dotActive: "bg-white",
        dotInactive: "bg-transparent",
        button: "bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg mt-4 Mobile:text-sm Tablet:text-base",
    },

    contentSection: {
        container: "relative flex items-center justify-center overflow-hidden bg-[#2F1893]",
        backgroundWrapper: `
            relative w-full bg-cover bg-center bg-no-repeat text-white flex justify-center
            Mobile:flex Mobile:flex-col Mobile:items-center Mobile:justify-center Mobile:w-full Mobile:h-auto
            Tablet:flex Tablet:flex-col Tablet:items-center Tablet:justify-center Tablet:w-full Tablet:h-auto
        `,
        innerContainer: `
            flex flex-col items-center justify-center text-center max-w-[815px] w-full pt-[107px] pb-[126px]
            Mobile:pt-0 Mobile:pb-0 Tablet:pt-0 Tablet:pb-0
        `,
        subheading: "text-[18px] text-white font-semibold uppercase tracking-wide mb-[29px] Mobile:hidden Tablet:hidden",
        heading: "text-[48px] text-white leading-[70px] font-extrabold mb-[28px] max-w-[815px] Mobile:hidden Tablet:hidden",
        paragraph: "text-[16px] text-white leading-[28px] max-w-[775px] Mobile:hidden Tablet:hidden",
        subheadingMobile: "text-[12px] Tablet:text-[14px] text-white font-semibold uppercase tracking-wide mb-2",
        headingMobile: "text-[20px] Tablet:text-[26px] text-white font-bold leading-snug mb-3",
        paragraphMobile: "text-[12px] Tablet:text-[14px] text-white opacity-90 leading-snug max-w-[90%]",
    },

    featuresSection: {
        container: "relative inset-0 bg-[#2F1893]",
        sectionWrapper: `
            w-full h-[736px] relative bg-indigo-900 overflow-hidden
            Mobile:relative Mobile:flex Mobile:flex-col Mobile:items-center Mobile:justify-center Mobile:h-auto Mobile:py-4
            Tablet:relative Tablet:flex Tablet:flex-col Tablet:items-center Tablet:justify-center Tablet:h-auto Tablet:py-6
        `,
        backgroundImage: "w-full h-[736px] left-0 top-0 absolute Mobile:hidden Tablet:hidden",
        mockupImage: "w-[983.30px] h-[535.77px] left-[-501.74px] top-[100px] absolute Mobile:hidden Tablet:hidden",
        overlay: "w-[983.30px] h-[535.77px] left-[-501.74px] top-[100px] absolute bg-black/0 Mobile:hidden Tablet:hidden",
        text: {
            mainTitle: "left-[515px] top-[158px] absolute justify-start text-white text-5xl font-bold font-['DM_Sans'] leading-[52px]",
            description: "w-[600px] left-[515px] top-[230px] absolute justify-start text-white text-xl font-medium font-['DM_Sans'] leading-8",
            mainTitleMobile: "text-white text-lg Tablet:text-xl font-bold mb-1 leading-tight text-center",
            descriptionMobile: "text-white text-xs Tablet:text-sm opacity-90 leading-snug max-w-[90%] mb-5 text-center",
        },
        cards: {
            title1: "left-[516px] top-[458.20px] absolute justify-start text-white text-sm font-bold font-['DM_Sans'] uppercase leading-6 tracking-widest",
            subtitle1: "w-64 left-[516px] top-[500.40px] absolute justify-start text-white text-base font-normal font-['DM_Sans'] leading-6",
            icon1: "w-9 h-9 left-[515px] top-[391.60px] absolute justify-start text-white text-4xl font-normal font-['FontAwesome']",

            title2: "left-[816px] top-[458.20px] absolute justify-start text-white text-sm font-bold font-['DM_Sans'] uppercase leading-6 tracking-widest",
            subtitle2: "w-64 left-[816px] top-[500.40px] absolute justify-start text-white text-base font-normal font-['DM_Sans'] leading-6",
            icon2: "w-11 h-9 left-[815px] top-[391.60px] absolute justify-start text-white text-4xl font-normal font-['FontAwesome']",

            cardWrapperMobile: "flex flex-col gap-4 w-full max-w-[320px]",
            cardMobile: "flex flex-col items-center bg-[#3D1F9A]/30 backdrop-blur-md border border-white/15 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-3 w-full",
            cardIconMobile: "text-white text-2xl mb-2",
            cardTitleMobile: "text-white text-sm Tablet:text-base font-semibold uppercase tracking-wider mb-1 text-center",
            cardSubtitleMobile: "text-white text-xs Tablet:text-sm opacity-80 leading-snug text-center",
        },
        verticalDots: {
            wrapperMobile: "flex justify-center items-center mt-6 space-x-1.5",
            dotMobile: "text-white opacity-30 text-[10px]",
            dotActiveMobile: "text-white text-[10px]",
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

    authFormSection: {
        container: `
            bg-white shadow-2xl flex flex-col justify-start
            w-[470px] Laptop:h-[550px] Laptop:p-8
            Tablet:w-[320px] Tablet:h-[500px] Tablet:p-4
            Mobile:w-[280px] Mobile:h-[450px] Mobile:p-3
            rounded-[25px]
        `,
        toggleWrapper: `
            flex justify-between items-center mb-5 border-b pb-2 border-gray-200
            Laptop:mb-5 Tablet:mb-4 Mobile:mb-3
        `,
        toggleButton: `
            font-semibold transition-colors duration-200 pb-2
            Laptop:text-xl Tablet:text-sm Mobile:text-xs
        `,
        toggleActive: "text-blue-600 border-b-2 border-blue-600",
        toggleInactive: "text-gray-500 hover:text-gray-700 border-b-2 border-transparent",
        formWrapper: "space-y-4 mb-4",
        input: `
            w-full px-4 py-3 Tablet:px-3 Tablet:py-2 Mobile:px-2 Mobile:py-2
            border border-gray-300 rounded-[25px]
            focus:outline-none focus:ring-2 focus:ring-blue-500
            transition duration-200
            text-sm Tablet:text-xs Mobile:text-[10px]
        `,
        submitButton: `
            w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold
            py-3 Tablet:py-2 Mobile:py-2 mb-2
            transition duration-200 shadow-lg rounded-full
            text-sm Tablet:text-xs Mobile:text-[10px]
        `,
        dividerWrapper: "flex items-center my-4",
        dividerLine: "flex-grow border-t border-gray-300",
        dividerText: "px-3 text-gray-500 text-sm Tablet:text-xs Mobile:text-[10px]",
        socialButton: `
            w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold
            py-3 Tablet:py-2 Mobile:py-2 flex items-center justify-center space-x-2
            transition duration-200 shadow-lg rounded-full
            text-sm Tablet:text-xs Mobile:text-[10px]
        `,
        socialIcon: "w-4 h-4 Tablet:w-3 Tablet:h-3 Mobile:w-3 Mobile:h-3",
        socialText: "Tablet:text-xs Mobile:text-[10px]",
    },

    testimonialSection: {
        container: `
            relative w-full h-auto bg-[#352F7A] overflow-hidden mx-auto
            py-10 flex flex-col items-center justify-center
            Mobile:py-10 Mobile:flex Mobile:flex-col Mobile:items-center Mobile:justify-center
            Tablet:py-14 Tablet:flex Tablet:flex-col Tablet:items-center Tablet:justify-center
        `,

        heading: `
            text-white text-5xl font-bold font-['DM_Sans'] leading-[52px] mb-10
            Mobile:text-2xl Mobile:text-center Mobile:mb-6
            Tablet:text-3xl Tablet:text-center Tablet:mb-8
        `,

        cardWrapper: `
            relative w-[470px] h-[240px] mb-6
            Mobile:w-[90%] Mobile:max-w-[340px] Mobile:h-auto
            Tablet:w-[80%] Tablet:max-w-[400px] Tablet:h-auto
        `,

        cardBorder: `
            absolute inset-0 border-2 border-white/10 rounded-[10px]
            Mobile:relative Mobile:w-full Mobile:h-full
            Tablet:relative Tablet:w-full Tablet:h-full
        `,

        avatar: `
            absolute left-[35px] top-[36px] w-[70px] h-[70px] rounded-[10px] object-cover
            Mobile:relative Mobile:top-0 Mobile:left-0 Mobile:mx-auto Mobile:w-[60px] Mobile:h-[60px] Mobile:mt-4
            Tablet:relative Tablet:top-0 Tablet:left-0 Tablet:mx-auto Tablet:w-[65px] Tablet:h-[65px] Tablet:mt-5
        `,

        testimonialText: `
            absolute left-[135px] top-[35px] w-[320px] text-white text-sm font-medium font-['DM_Sans'] leading-[28px]
            Mobile:relative Mobile:left-0 Mobile:top-0 Mobile:text-center Mobile:w-[90%] Mobile:mt-4
            Tablet:relative Tablet:left-0 Tablet:top-0 Tablet:text-center Tablet:w-[90%] Tablet:mt-4
        `,

        clientName: `
            absolute left-[135px] top-[188px] text-white text-sm font-bold font-['DM_Sans'] uppercase leading-[24px] tracking-[0.15em] opacity-30
            Mobile:relative Mobile:left-0 Mobile:top-0 Mobile:text-center Mobile:mt-3
            Tablet:relative Tablet:left-0 Tablet:top-0 Tablet:text-center Tablet:mt-3
        `,
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

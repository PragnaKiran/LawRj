workspace "LawRJ Global Venture Architecture" "C4 Model for LawRJ Web Platform" {

    model {
        founder = person "Cross-Border Tech Founder" "Founder scaling venture across multiple international jurisdictions."
        executive = person "B2B SaaS Executive" "Corporate officer managing enterprise contracts and compliance."

        lawrjSystem = softwareSystem "LawRJ Web Platform" "Static Next.js web application and venture legal portal." {
            edgeCdn = container "Firebase CDN Edge" "Delivers cached static assets with Brotli compression and ZTNA security headers." "Firebase Hosting / Google Cloud"
            staticWeb = container "Next.js Static SPA" "Pre-rendered static client application displaying practice pillars and intake funnel." "Next.js 14 / React 18 / HTML5"
            formHandler = container "Founder Scoping Controller" "Client-side validation, dual honeypots, and briefing dispatch." "Vanilla ES6 JavaScript"
        }

        emailjs = softwareSystem "EmailJS Gateway" "Third-party encrypted serverless mail relay." "External SaaS"
        whatsapp = softwareSystem "WhatsApp Cloud" "Direct peer-to-peer 256-bit E2EE messaging channel (+91-9327000022)." "Meta / WhatsApp"

        founder -> edgeCdn "Visits law-rj.web.app via HTTPS"
        executive -> edgeCdn "Submits enterprise scoping brief via HTTPS"

        edgeCdn -> staticWeb "Serves cached HTML, JS, CSS"
        staticWeb -> formHandler "User submits structured form"

        formHandler -> emailjs "Dispatches encrypted briefing payload"
        staticWeb -> whatsapp "Escalates urgent consultation via direct link"
    }

    views {
        systemContext lawrjSystem "SystemContext" {
            include *
            autoLayout lr
        }

        container lawrjSystem "Containers" {
            include *
            autoLayout lr
        }

        styles {
            element "Person" {
                shape Person
                background #071126
                color #F8FAFC
            }
            element "Software System" {
                background #0D1B3E
                color #F8FAFC
            }
            element "Container" {
                background #13234E
                color #F8FAFC
            }
        }
    }
}

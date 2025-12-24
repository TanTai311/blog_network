// TOGGLE BUTTON
(function () {
    const toggleButtons = document.querySelectorAll(".toggle-button");
    const togglePanels = document.querySelectorAll(".toggle-panel");

    function closePanel(panel) {
        panel.classList.add("close");
        panel.classList.remove("open");
    }

    function openPanel(panel) {
        panel.classList.add("open");
        panel.classList.remove("close");
    }

    function hideAllExcept(targetElement) {
        togglePanels.forEach((panel) => {
            if (panel !== targetElement) {
                closePanel(panel);
            }
        });
    }

    function toggleElement(targetElement) {
        const isHidden = targetElement.classList.contains("close");
        hideAllExcept(targetElement);
        if (isHidden) {
            openPanel(targetElement);
        } else {
            closePanel(targetElement);
        }
    }

    toggleButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const targetIds = this.getAttribute("data-target").split(" ");
            targetIds.forEach((targetId) => {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    toggleElement(targetElement);
                }
            });
        });
    });

    document.addEventListener("click", function (event) {
        const openedPanels = Array.from(document.querySelectorAll(".open"));
        const clickedOutsideAllTargets = openedPanels.every((element) => {
            return !element.contains(event.target) && !event.target.closest(".toggle-button");
        });

        if (clickedOutsideAllTargets) {
            openedPanels.forEach((element) => {
                closePanel(element);
            });
        }
    });
})();

// THEME TOGGLE
(function () {
    const themeToggle = document.getElementById("theme-toggle");
    const root = document.documentElement;
    const storageKey = "theme";

    if (!themeToggle) {
        return;
    }

    function getCurrentTheme() {
        return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
    }

    function setGiscusTheme(theme) {
        const frame = document.querySelector("iframe.giscus-frame");
        if (!frame || !frame.contentWindow) {
            return;
        }

        frame.contentWindow.postMessage(
            { giscus: { setConfig: { theme } } },
            "https://giscus.app"
        );
    }

    function applyTheme(theme) {
        if (theme === "dark") {
            root.setAttribute("data-theme", "dark");
        } else {
            root.removeAttribute("data-theme");
        }

        setGiscusTheme(theme);
    }

    const storedTheme = localStorage.getItem(storageKey);
    if (storedTheme) {
        applyTheme(storedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        applyTheme("dark");
    }

    themeToggle.addEventListener("click", () => {
        const isDark = root.getAttribute("data-theme") === "dark";
        const nextTheme = isDark ? "light" : "dark";
        applyTheme(nextTheme);
        localStorage.setItem(storageKey, nextTheme);
    });

    if (document.body) {
        const observer = new MutationObserver(() => {
            if (document.querySelector("iframe.giscus-frame")) {
                setGiscusTheme(getCurrentTheme());
                observer.disconnect();
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });
    }
})();

// SEARCH
(function () {
    const searchBar = document.getElementById("search-bar");
    if (!searchBar) {
        return;
    }

    const indexUrl = searchBar.getAttribute("data-index-url");
    const input = document.getElementById("search-input");
    const results = document.getElementById("search-results");
    const resultsList = results?.querySelector(".search-results__list");
    const status = results?.querySelector("p");

    if (!input || !results || !resultsList || !status || !indexUrl) {
        return;
    }

    let index = [];

    function normalize(text) {
        return (text || "")
            .toString()
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
    }

    function renderResults(matches, query) {
        resultsList.innerHTML = "";
        results.classList.remove("hidden");

        if (!query) {
            status.textContent = "Gõ từ khóa để tìm bài viết.";
            return;
        }

        if (!matches.length) {
            status.textContent = "Không tìm thấy kết quả phù hợp.";
            return;
        }

        status.textContent = `Có ${matches.length} kết quả.`;

        matches.slice(0, 8).forEach((item) => {
            const li = document.createElement("li");
            const link = document.createElement("a");
            link.href = item.permalink;
            link.className = "search-results__link";
            link.textContent = item.title;

            const summary = document.createElement("p");
            summary.className = "search-results__summary";
            summary.textContent = item.summary || "";

            li.appendChild(link);
            li.appendChild(summary);
            resultsList.appendChild(li);
        });
    }

    function handleInput() {
        const query = input.value.trim();
        if (!query) {
            renderResults([], "");
            return;
        }

        const normalizedQuery = normalize(query);
        const matches = index.filter((item) => {
            const haystack = [item.title, item.summary, (item.tags || []).join(" ")].join(" ");
            return normalize(haystack).includes(normalizedQuery);
        });

        renderResults(matches, query);
    }

    fetch(indexUrl)
        .then((response) => response.json())
        .then((data) => {
            index = Array.isArray(data) ? data : [];
            renderResults([], "");
        })
        .catch(() => {
            status.textContent = "Không tải được dữ liệu tìm kiếm.";
            results.classList.remove("hidden");
        });

    input.addEventListener("input", handleInput);
    document.getElementById("search")?.addEventListener("submit", (event) => {
        event.preventDefault();
        handleInput();
    });
})();


const moontip = document.getElementById("moon-tooltip");
const atlas = document.getElementById("Atlas");
const pleione = document.getElementById("Plaione")
const alcyone = document.getElementById("Alcyone") 
const merope = document.getElementById("Merope")
const electra = document.getElementById("Electra")
const celaeno = document.getElementById("Celaeno")
const taygeta = document.getElementById("Taygeta")
const maia = document.getElementById("Maia")

moontip.addEventListener("mouseover", () => showTooltip("tooltip"));
moontip.addEventListener("mouseout", () => hideTooltip("tooltip"));

atlas.addEventListener("mouseover", () => showTooltip("tooltip-atlas"));
atlas.addEventListener("mouseout", () => hideTooltip("tooltip-atlas"));

pleione.addEventListener("mouseover", () => showTooltip("tooltip-pleione"));
pleione.addEventListener("mouseout", () => hideTooltip("tooltip-pleione"));

alcyone.addEventListener("mouseover", () => showTooltip("tooltip-alcyone"));
alcyone.addEventListener("mouseout", () => hideTooltip("tooltip-alcyone"));

merope.addEventListener("mouseover", () => showTooltip("tooltip-merope"));
merope.addEventListener("mouseout", () => hideTooltip("tooltip-merope"));

electra.addEventListener("mouseover", () => showTooltip("tooltip-electra"));
electra.addEventListener("mouseout", () => hideTooltip("tooltip-electra"));

celaeno.addEventListener("mouseover", () => showTooltip("tooltip-celaeno"));
celaeno.addEventListener("mouseout", () => hideTooltip("tooltip-celaeno"));

taygeta.addEventListener("mouseover", () => showTooltip("tooltip-taygeta"));
taygeta.addEventListener("mouseout", () => hideTooltip("tooltip-taygeta"));

maia.addEventListener("mouseover", () => showTooltip("tooltip-maia"));
maia.addEventListener("mouseout", () => hideTooltip("tooltip-maia"));

function showTooltip(className) {
    const tooltip = document.querySelector('.' + className);
    tooltip.style.display = "block";

    function fadeIn(toolTip) {
        var opacity = 0;
        var interval = setInterval(function () {
            if (opacity < 1) {
                opacity += 0.1;
                toolTip.style.opacity = opacity;
            } else {
                clearInterval(interval);
                toolTip.style.display = "block";
            }
        }, 50);
    }
    fadeIn(tooltip);
}

function hideTooltip(className) {
    var element = document.querySelector('.' + className);

    function fadeOut(el) {
        var opacity = 1;
        var interval = setInterval(function () {
            if (opacity > 0) {
                opacity -= 0.1;
                el.style.opacity = opacity;
            } else {
                clearInterval(interval);
                el.style.display = 'none';
            }
        }, 50);
    }
    fadeOut(element);
}

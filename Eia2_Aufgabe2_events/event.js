var EventInspector;
(function (EventInspector) {
    /*
    Aufgabe: <L02_EventInspector>
    // Name: <David Zahn>
    // Matrikel: <275010>
    // Datum: <13.04.2024>
    // Quellen: <"">
    */
    //Window wird erst geladen, dann hndload ausgeführt, eine variable span erstellen
    window.addEventListener("load", hndload);
    //Funktion wird geladen wenn window geladen hat, Eventlistner für "keyup", "click", "mousemove", ? machts nichts wenn das Element nicht gibt
    function hndload() {
        var _a, _b, _c, _d, _e;
        document.addEventListener("mousemove", setinfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        (_a = document.getElementById("div0")) === null || _a === void 0 ? void 0 : _a.addEventListener("keyup", logInfo);
        (_b = document.getElementById("div1")) === null || _b === void 0 ? void 0 : _b.addEventListener("keyup", logInfo);
        (_c = document.getElementById("div0")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", logInfo);
        (_d = document.getElementById("div1")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", logInfo);
        (_e = document.getElementById("bt")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", button);
    }
    //Funktion Position der info Box auf der Maus position von Span
    function setinfoBox(_event) {
        var x = _event.clientX;
        var y = _event.clientY;
        var span = document.getElementById("span");
        span.style.top = y + "px";
        span.style.left = x + "px";
        span.innerHTML = "Mouseposition " + x + " " + y + _event.target;
    }
    //Funktion ausgabe der Konsole
    function logInfo(_event) {
        console.log("Type: " + _event.type);
        console.log("Target: " + _event.target);
        console.log("CurrentTarget: " + _event.currentTarget);
        console.log("Event: " + _event);
    }
    //Eine Konstante die ein Ereignis beim anklicken von Button, durch den DOM-Baum aufsteigen kann und dabei das was im detail steht anzeigt
    var customevent = new CustomEvent("button", { bubbles: true, detail: { name: "bt wurde gedrückt" } });
    //Funktion für listner für die Buttons 
    function button() {
        document.addEventListener("button", customEvent);
        document.dispatchEvent(customevent);
    }
    //Funktion ausgabe von bubbles, detail in der Konsole
    function customEvent() {
        console.log(customevent.bubbles);
        console.log(customevent.detail);
    }
})(EventInspector || (EventInspector = {}));

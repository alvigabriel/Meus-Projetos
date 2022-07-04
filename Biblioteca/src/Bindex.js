"use strict";
(function () {
    var _a;
    const $ = (query) => document.querySelector(query);
    (_a = $('.add')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        var _a, _b, _c, _d, _e;
        const numero = (_a = $('#numero')) === null || _a === void 0 ? void 0 : _a.value;
        const titulo = (_b = $('#titulo')) === null || _b === void 0 ? void 0 : _b.value;
        const autor = (_c = $('#autor')) === null || _c === void 0 ? void 0 : _c.value;
        const ano = (_d = $('#ano')) === null || _d === void 0 ? void 0 : _d.value;
        const emprestado = (_e = $('#emprestado')) === null || _e === void 0 ? void 0 : _e.value;
        if (!numero || !titulo || !autor || !ano || !emprestado) {
            alert('Os campos são obrigatórios');
            return;
        }
    });
})();

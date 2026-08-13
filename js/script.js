/* =========================================================
   VIHAN KURTI COLLECTION
   PART 12 — WHATSAPP ORDER SYSTEM
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const productGrid =
        document.getElementById("productGrid");

    const modal =
        document.getElementById("productModal");

    const modalOverlay =
        document.querySelector(".modal-overlay");

    const closeModalButton =
        document.getElementById("closeModal");

    const modalFront =
        document.getElementById("modalFront");

    const modalBack =
        document.getElementById("modalBack");

    const modalCode =
        document.getElementById("modalCode");

    const modalPrice =
        document.getElementById("modalPrice");

    const modalProductCode =
        document.getElementById("modalProductCode");

    const whatsappOrder =
        document.getElementById("whatsappOrder");
        let previousFocus = null;


    /* =====================================================
       WHATSAPP LINK
    ===================================================== */

const whatsappNumber = "917649870826";

const whatsappBase =
    `https://wa.me/${whatsappNumber}`;

    /* =====================================================
   GLOBAL WHATSAPP BUTTONS
===================================================== */

const headerWhatsapp =
    document.querySelector(".header-btn");

const floatingWhatsapp =
    document.querySelector(".floating-whatsapp");

if (headerWhatsapp) {
    headerWhatsapp.href = whatsappBase;
}

if (floatingWhatsapp) {
    floatingWhatsapp.href = whatsappBase;
}

    /* =====================================================
       CHECK PRODUCT DATA
    ===================================================== */

    if (
        !Array.isArray(products) ||
        products.length === 0
    ) {

        productGrid.innerHTML = `
            <div class="products-error">
                Products are currently unavailable.
            </div>
        `;

        return;

    }


    /* =====================================================
       CREATE PRODUCT CARDS
    ===================================================== */

    function renderProducts() {

        productGrid.innerHTML = "";

        products.forEach((product) => {

            const card =
                document.createElement("article");

            card.className = "product-card";

            card.innerHTML = `

                <div class="product-image">

                    <img
                        src="${product.front}"
                        alt="${product.name}"
                        loading="lazy"
                    >

                </div>

                <div class="product-info">

                    <div class="product-code">
                        ${product.code}
                    </div>

                    <h3 class="product-name">
                        ${product.name}
                    </h3>

                    <div class="product-bottom">

                        <div class="product-price">
                            ${product.price}
                        </div>

                        <button
                            type="button"
                            class="view-product"
                            data-product="${product.code}"
                        >
                            View
                        </button>

                    </div>

                </div>
            `;

            productGrid.appendChild(card);

        });

    }


    /* =====================================================
       CREATE WHATSAPP MESSAGE
    ===================================================== */

    function createWhatsAppMessage(product) {

        return `Hello Vihan Kurti Collection,

I want to order this product.

Product: ${product.name}
Product Code: ${product.code}
Price: ${product.price}

Please share availability and order details.

Thank you.`;

    }


    /* =====================================================
       OPEN PRODUCT MODAL
    ===================================================== */

    function openProduct(product) {

    if (!product) {
        return;
    }

    previousFocus = document.activeElement;
        /* -----------------------------------------------
           PRODUCT IMAGES
        ------------------------------------------------ */

        modalFront.src =
            product.front;

        modalBack.src =
            product.back;

        modalFront.alt =
            `${product.name} Front View`;

        modalBack.alt =
            `${product.name} Back View`;


        /* -----------------------------------------------
           PRODUCT DETAILS
        ------------------------------------------------ */

        modalCode.textContent =
            product.name;

        modalPrice.textContent =
            product.price;

        modalProductCode.textContent =
            product.code;


        /* -----------------------------------------------
           WHATSAPP MESSAGE
        ------------------------------------------------ */

        const message =
    createWhatsAppMessage(product);

whatsappOrder.href =
    `${whatsappBase}?text=${encodeURIComponent(message)}`;
        /* -----------------------------------------------
           OPEN MODAL
        ------------------------------------------------ */

        modal.classList.add("active");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow =
            "hidden";

    }


    /* =====================================================
       CLOSE MODAL
    ===================================================== */

    function closeProduct() {

        modal.classList.remove("active");

        modal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.style.overflow =
            "";
    if (
        previousFocus &&
        typeof previousFocus.focus === "function"
    ) {
        previousFocus.focus();
    }
    }


    /* =====================================================
       PRODUCT VIEW BUTTON
    ===================================================== */

    productGrid.addEventListener(
        "click",
        (event) => {

            const button =
                event.target.closest(
                    ".view-product"
                );

            if (!button) {
                return;
            }

            const productCode =
                button.dataset.product;

            const product =
                products.find(
                    item =>
                        item.code === productCode
                );

            openProduct(product);

        }
    );


    /* =====================================================
   WHATSAPP ORDER BUTTON
===================================================== */


    /* =====================================================
       CLOSE BUTTON
    ===================================================== */

    closeModalButton.addEventListener(
        "click",
        closeProduct
    );


    /* =====================================================
       CLOSE BY OVERLAY
    ===================================================== */

    modalOverlay.addEventListener(
        "click",
        closeProduct
    );


    /* =====================================================
       ESC KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                modal.classList.contains("active")
            ) {

                closeProduct();

            }

        }
    );


    /* =====================================================
       DISABLE IMAGE DRAGGING
    ===================================================== */

    document.addEventListener(
        "dragstart",
        (event) => {

            if (
                event.target.tagName === "IMG"
            ) {

                event.preventDefault();

            }

        }
    );


    /* =====================================================
       INITIALIZE
    ===================================================== */

    renderProducts();

});

/* =====================================================
   RAKHI SPECIAL SALE POPUP
===================================================== */

const salePopup = document.getElementById("salePopup");
const salePopupClose = document.getElementById("salePopupClose");
const salePopupOverlay = document.querySelector(".sale-popup-overlay");
const salePopupShop = document.getElementById("salePopupShop");

function openSalePopup() {
    salePopup.classList.add("active");
    salePopup.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeSalePopup() {

    if (document.activeElement) {
        document.activeElement.blur();
    }

    salePopup.classList.remove("active");

    salePopup.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow = "";
}

if (salePopup) {

    setTimeout(() => {
        openSalePopup();
    }, 1200);

    salePopupClose.addEventListener(
        "click",
        closeSalePopup
    );

    salePopupOverlay.addEventListener(
        "click",
        closeSalePopup
    );

    salePopupShop.addEventListener(
        "click",
        () => {
            closeSalePopup();

            const collection =
                document.getElementById("collection");

            if (collection) {
                collection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    );
}

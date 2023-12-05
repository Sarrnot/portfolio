const NAVBAR_HEIGHT = 48;

const scrollIntoView = (id: string) => {
    const target = document.querySelector(`#${id}`);

    if (!target) return;

    const y = target.getBoundingClientRect().top + window.scrollY;
    const offset = y > NAVBAR_HEIGHT ? NAVBAR_HEIGHT : 0;

    window.scrollTo({
        top: y - offset,
        behavior: "smooth",
    });
};

export default scrollIntoView;

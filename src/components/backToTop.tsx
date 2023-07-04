export default function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
    return (
        <div>ScrollToTop</div>
    );
}
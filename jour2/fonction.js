function TVA(prix, pays) {
    if (pays == "fr") {
        return 1.2 * prix;
    } else if (pays == "en") {
        return 1.5 * prix;
    }
}

export default TVA
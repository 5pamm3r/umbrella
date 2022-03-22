export const changeDayHours = (state, el, background) => {
    const weatherMain = el.weather[0].main
    if (state === true) {
        switch (weatherMain) {
            case 'Clear':
                background('url("https://i.postimg.cc/NfS4r0CP/soleado.jpg")')
                break;
            case 'Clouds' || 'Mist':
                background('url("https://i.postimg.cc/DwCbbpzf/parcial.jpg")')
                break;
            case 'Rain':
                background('url("https://i.postimg.cc/fWxtvRbr/lluvioso.jpg")')
                break;
            default:
                break;
        }
    } else {
        switch (weatherMain) {
            case 'Clear':
                background('url("https://i.postimg.cc/NfS4r0CP/noche-despejado.jpg")')
                break;
            case 'Clouds' || 'Mist':
                background('url("https://i.postimg.cc/DwCbbpzf/noche-parcial.jpg")')
                break;
            case 'Rain':
                background('url("https://i.postimg.cc/fWxtvRbr/noche-lluvioso.jpg")')
                break;
            default:
                break;
        }
    }
}
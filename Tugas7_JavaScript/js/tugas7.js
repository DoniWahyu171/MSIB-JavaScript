$("document").ready(function (){
    $(".card").click(function (){
        var hewan = $(this).attr('id');

        $("img").remove();
        $("audio").remove();

        // HEWAN UNGGAS
        if (hewan == 'ayam') {
            $(this).prepend(`
            <img src="images/ayam.jpg" class="card-img-top" alt="...">
            `);
            $(this).append(`
            <audio src="audios/suara-ayam.mp3" autoplay></audio>`
            );
        } else if (hewan == 'bebek') {
            $(this).prepend(`
            <img src="images/bebek.jpg" class="card-img-top" alt="...">
            `);
            $(this).append(`
            <audio src="audios/suara-bebek.mp3" autoplay></audio>
            `);
        } else if (hewan == 'elang') {
            $(this).prepend(`
            <img src="images/elang.jpg" class="card-img-top" alt="...">
            `);
            $(this).append(`
            <audio src="audios/suara-elang.mp3" autoplay></audio>`
            );
        } else if (hewan == 'angsa') {
            $(this).prepend(`
            <img src="images/angsa.jpg" class="card-img-top" alt="...">
            `);
            $(this).append(
            `<audio src="audios/suara-angsa.mp3" autoplay></audio>`
            );
        }

        // HEWAN TERNAK
        else if (hewan == 'sapi') {
            $(this).prepend(`
            <img src="images/sapi.jpg" class="card-img-top" alt="...">
            `);
            $(this).append(
            `<audio src="audios/suara-sapi.mp3" autoplay></audio>`
            );
        } else if (hewan == 'kuda') {
            $(this).prepend(`
            <img src="images/kuda.jpg" class="card-img-top" alt="...">
            `);
            $(this).append(
            `<audio src="audios/suara-kuda.mp3" autoplay></audio>`
            );
        } else if (hewan == 'kambing') {
            $(this).prepend(`
            <img src="images/kambing.jpg" class="card-img-top" alt="...">
            `);
            $(this).append(
            `<audio src="audios/suara-kambing.mp3" autoplay></audio>`
            );
        } else if (hewan == 'kerbau') {
            $(this).prepend(`
            <img src="images/kerbau.jpg" class="card-img-top" alt="...">
            `);
            $(this).append(
            `<audio src="audios/suara-kerbau.mp3" autoplay></audio>`
            );
        }
        
        // HEWAN BUAS
        else if (hewan == 'singa') {
            $(this).prepend(`
            <img src="images/singa.jpg" class="card-img-top" alt="...">
            `);
            $(this).append(
            `<audio src="audios/suara-singa.mp3" autoplay></audio>`
            );
        } else if (hewan == 'harimau') {
            $(this).prepend(`
            <img src="images/harimau.jpg" class="card-img-top" alt="...">
            `);
            $(this).append(
            `<audio src="audios/suara-harimau.mp3" autoplay></audio>`
            );
        } else if (hewan == 'buaya') {
            $(this).prepend(`
            <img src="images/buaya.jpg" class="card-img-top" alt="...">
            `);
            $(this).append(
            `<audio src="audios/suara-buaya.mp3" autoplay></audio>`
            );
        } else if (hewan == 'serigala') {
            $(this).prepend(`
            <img src="images/serigala.jpg" class="card-img-top" alt="...">
            `);
            $(this).append(
            `<audio src="audios/suara-serigala.mp3" autoplay></audio>`
            );
        }
    })
});
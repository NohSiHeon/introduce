// Firebase SDK 라이브러리 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAT0YdDwLRhze2iLlCoSgZaipbOnOvBHM4",
    authDomain: "introduce-3afbd.firebaseapp.com",
    projectId: "introduce-3afbd",
    storageBucket: "introduce-3afbd.appspot.com",
    messagingSenderId: "605757036291",
    appId: "1:605757036291:web:1d90bd1d11b5542daafb36",
    measurementId: "G-PPS8M12LY5"
};

// Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


$("#addBtn").click(async function () {
    let title = $('#inputTitle').val();
    let inputContent = $('#inputContent').val();
    let inputDetailContent = $('#inputDetailContent').val();

    let doc = {
        'title': title,
        'inputContent': inputContent,
        'inputDetailContent': inputDetailContent
    };


    await addDoc(collection(db, "introduce"), doc);
    if (title == '기본 정보'){
        alert('추가됐습니다.');
    }
    else if(title == 'MBTI'){
        alert('추가됐습니다.');
    }
    else if(title == '나의 장점'){
        alert('추가됐습니다.');
    }
    else if(title == '협업 스타일'){
        alert('추가됐습니다.');
    }
    else if(title == '취미'){
        alert('추가됐습니다.');
    }
    else    alert('타이틀 입력칸에 기본 정보, MBTI, 나의 장점, 협업 스타일, 취미 중 하나를 입력해주세요');
    
    window.location.reload();


})

let docs = await getDocs(collection(db, "introduce"));
docs.forEach((doc) => {
    let row = doc.data();

    let title = row['title'];
    let inputContent = row['inputContent'];
    let inputDetailContent = row['inputDetailContent'];

    if (title == '기본 정보') {
        let addText = `
            <div class="card mb-3" style="width: 400px; display: inline-block;">
                    <div class="row g-0">
                        <div class="card mb-3">
                            <img src="data:image/png;base64,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"
                                class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">
                                    <h2>${inputContent}</h2>
                                </h5>
                                <p class="card-text">${inputDetailContent}</p>
                            </div>
                        </div>
                    </div>
            </div>
        `;
        $('.cardSectionDefaultInfo').append(addText);
    }
    else if (title == 'MBTI') {
        let addText = `
            <div class="card mb-3" style="width: 400px; display: inline-block;">
                    <div class="row g-0">
                        <div class="card mb-3">
                            <img src="https://www.16personalities.com/static/images/social/intp.png"
                                class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">
                                    <h2>${inputContent}</h2>
                                </h5>
                                <p class="card-text">${inputDetailContent}</p>
                            </div>
                        </div>
                    </div>
            </div>
        `;
        $('.cardSectionMBTI').append(addText);
    }
    else if (title == '나의 장점') {
        let addText = `
            <div class="card mb-3" style="width: 400px; display: inline-block;">
                    <div class="row g-0">
                        <div class="card mb-3">
                            <img src="https://lh3.googleusercontent.com/proxy/8vEwXMrjxM8Qed8yA9mzcxm0D5pbcuCqlT5jSnSCxrMlotqHd0jcASNLkE4K_u4ZYJt0q8VxRGYDWuI4xkdRauF3Z9m5G80t7rLUIGxJ4C0utC2WjVymck7wjdyR4cuaSIXY1rVLQKV3s1CtXZAhcLCluZV8"
                                class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">
                                    <h2>${inputContent}</h2>
                                </h5>
                                <p class="card-text">${inputDetailContent}</p>
                            </div>
                        </div>
                    </div>
            </div>
        `;
        $('.cardSectionStrength').append(addText);
    }
    else if (title == '협업 스타일') {
        let addText = `
            <div class="card mb-3" style="width: 400px; display: inline-block;">
                    <div class="row g-0">
                        <div class="card mb-3">
                            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhITExMWFhUXGBgaGRgXFhYaFxcfGhsXGBsZGxcYHiggGhslHRgYIjEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGy0lICUtLSsrLy01LS8tLS0tLS8tLS0tLS0tLS0tLS0tKy0tLS0tLTUtLS0tKy0tLS0tLS0tLf/AABEIAKYBMAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAUDBgcCAQj/xABEEAABAwIEAgcFBQYEBQUAAAABAAIRAyEEBRIxQVEGEyJhcYGRFDKhscEHUmKS0SNCgpOi4RVDU/AWJDNy8XODlLLi/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECAwQFBv/EAC4RAAICAQQBAgUCBwEAAAAAAAABAhEDBBIhMUETUTJhcYGRIrEUI0Kh0eHxBf/aAAwDAQACEQMRAD8A7iiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIqvMs8p0SW3c4cBw8SVlyfMRXZqiCDBHLl8EJ2urJ6LFia4Yxzzs0SqTBdJ2OtUaWnmLj9QhKi30bAi+NM3X1CoREQEWviSDpa2THkveHxGqbEEc1gqNcxznBsg73XvC0jqc5wgna6rbstwS0RFYqEREARFqnSHHVadfs1IhtgOE7yDYlC0Y7nRfYzNKdJzWPJBMRYncwpq5tWrOcZc4k8yZKkszStDW9a4AEESdvE7x3IaPCdAXxzgBJsAvNGdIkgmBJGx8FFznDuqUXsbuRbvggx5xCrJtRbRnFJtJkb/iPD9e2hrh72hzLdlwJcLO5y027lOdjGAwXXHitXyjA1TVpzSDdFi8sGqAS7TqN9yduatsTg3l7iGEgnfV/+llgyPJG2qN8+KEJJRfj3LelUDhIMhe1Gy+mWsAIg34z9SpK3OYIiIAiIgCIiAIiIAiIgCIiAL44xcquz/G9VRJBhxs3z4+Qlaric6rVGaHOEcTEE91kLxxuR66QYllSqXM5QTwJHEKBSa42aHHmBP0VlkuVdZ23+4Nh97+y2GpVp0WjZo4AD6KkpqKtm6dfpXJpz6D2i7XAd4MLzh3gOaXCQCCRzhbfh8xpvOkG54EbqHm2TNcC6mIdyGzv0KiGWM1aZLbi6kqLjCY8PaHNMj4+B71KbVBWgYPHPpTpMTuCPjHNXGQZg57nNe6Sbie7cf75K3KMpYja14qVAASTsoza2kX2UXD0RUc47CZ77puM9pZUqwcJCyKqxeGDIIuJ2VlSqBwkbKUyGj2iIpICIiAwY0uFN+j3oOnx4brQcc55qONSdfGbcO7uXRVqHSTDPfX7NM3bYi+qNz5bIa4nTLno/Sp9Q2ADI7e2/GVqGYBgq1Az3dRjl5dyxHU2QZHMXHqFlZg6kNd1bi0kAWN+5DWMdrbs2vozUrFp6ydIDNEgC1523/d3WevhGMcXlgcwmXSJLTzHNvMcFYUPdbbTYW5dy9lDncubIrcDSNwxvoF99gpf6bfQKFWqmk5wa5oaGhwa7iSTIYZsLDnBcFZCs2QCQDEwSJ9FAdmL2Cl9xvoFJCIpK2EREAREQBERAEREAREQBeXugL0odapPgFDdEpWRcwwjawh822IOy02tTh7mi8OIHrC3QVg1up5DRve0TsPGFpmIeOsc4XGokesqsWdGP2N1w9IMa1o2AAVHnAJqkdwhX1N4cA4bEA+t1X53SGkP4tI9Fx6uG7G/lyaaae3J9eCjrsLbg+EbzwMeK21uwnda7lFMPqiRZon42+a2NZaGFRcl0zTWytqL7RqGeUdNZ0bGHeu/xlXOSYCmGMqRLiJk8OFlUdIKuqs6OAA+v1V1kmKYabGBw1AXGx/uvRfRzyvaWSiguYSQLKWvhCoZEd731CLW5BWwEbKCBGyl0ak+KvFlZGRY6NdrgS0ggEi3MWI8isioqGXV2F2l/ZcXEtIFtTnOMHcG4HkrNsRSadstMNitbqjYjQ6N97A/VSVVZaw03ubGouhzjPu9kNE95hWqiF1yJpJ8BfJWCo8k6W25u5dw718dh2ji6eeoyrEGDHZSyq9r3F0tgCCIsZ5KwUOliTdpuRF+YOxjyKOxfAlo81XciaZMVHn2dmkerYO3EyRYeHNWXXFa1nVU4is2k0CW2n5+QUqSLQjzySn9KGaGkslwEnYNB5yVRZnizWeahbAIEcRA7+K2B2T0OpqUiJL2lpdxvy5DwXzorQZQomnpc0aidLpIbwgTNjE+JKy9aO7abKMVFyXdkjo9mdI02UphwEQbT4HirZmJYXFgcC4XIm4VLm+Rse0voiHi8DZ36FUmQ0ajqwLDBF3E8uMjitjLapW0zekREMgiIgCIiAIiIAiIgMOIfaFCxPuxzIHqQD8JWeo6SouKrADe4IMCSYFzYd0rKTNIoiZ/hddIkbsv5cfh8lrBw79OvSdPOLLd2VA7Yg+BX2owOBaRINiFKlReM64KDIc0AApvMfdJ28CrzE0dbHNmNQIlapm+BFF8AyCJA4jxWLD5hVZZryBy3HoVLjfRZxvlGyZNlxotcC4OLjNuECFhxedBhqtjtNMN5bbnwWu4/NqxLHa9jptDbOgbgc9Kwgk+9ud7z8VzZ8jx0/F8/Q6cWn322/wDpX5xmr6Tm6aL6xcHOdpLQWhsS4zvup3RLpLgqhdVOIY0MbMVDoInjDt7TtzWr4/MnOfDTDaepjTA1Ee67UeMxttYK2wXRei+kOvYHlwmDbTO0Rx711ZpxxY1PJ56S7OfHP1pvHjXXb8G69EOlNHMKT6lKRoeWOB3/AAuHc4QfUcFfLUfs3yGjhKFUUnOcXVXay6LabNaI5NgzxJPgtgzbMBRbtLjty8Squm/09FJJbmkTl4q1S1rnDcAn0C1jBZ49mrV25vc7H9O5OuxOImJ091m+E8U2j035M/8AxTW+6z0P6rYsZingMDBOobwTEkcu4k3gWWq/4DW/D+Ze243E4cjVMcnXafA/3V7JcE+jccPRDBA8STuTzJ5piKulpPp3k2A9Vp+O6QVXuaW9gNvA4nv5juVxgMw9og7Fu44SbCPKUboz9N9ssWO0iBvuTzJ3K8koizsEXqS55LrNAIAmzpIMnntx5nzzimBsB6BfS4L0oJs1zpI0tczRLQATLZAv4W4Lz0bB/aOO9hPPib89lO6VZo7DYd1RrQ4yGgOnT2rSYgn1XOD0lrBsU3Gmd+zBB8Q4E/FaPDOeN7SY58akscnXzfR1RplfVy/I+mGJpv1VtVSkTDrAFs3lsRfu4rfMuzujiARSqt18iCD4gOglefLDOPaOrLFQdbk/oy6wtWD3FUbqjaGOJmGG55doT/8AZW9BsQOS1vE03YitUNMTHfFhb4rp0ze3kwaVs3ahXa8amODhzBlZFXZDhTTota4QZJPme5WK6TnfYREQgIiIAiIgCx13QFkUbEG6hvglGJYcL7vmZ8ZMrMsLuy6eDt+47A+e3kFkaI8Pwv3THLuvwPAd1xss9OYGqJ4xsvSILKnNMn612sPgwBB2t8kynKQxrusa0uJ7iAArZFNsnc6og4rK6T2PYGNGppEgCRIsR3g3WuZbhGOANSppOxa1riZFiJiN55rcVCwXZqVqfeKg8HzP9TXfmChl4TaTOW4jo3VD6obpLdb9JLrlpJIPx4raBU0UwX20sGrbgL7KR9oGINCnSqUyBUL4ggaXCJM8ZFrjmtFxud1qzdDgwDjpm/rwVcum1Gr2qdbU+12Z4tRp9LucL3NdPo6H9n9Jwwzqjv8ANqPePCzfm0q3zxzRRdrE8vHhCr8gzVnsNKo0Toa1jmixBENI+vmoObZp1waA3SBJ3mf9/VbyX62RhjcUz3kmWdadTvcHD7x5eCoPtSzzF0KmFpYSs2kxxIcRokOkaWukHS2Nud1sueYs4bCsYyzniJ5Wlx8b/FaC+mHe8ASDIm9x9VCfNnpabSPMt7fHg6L0Lzmpi8K2tVYGOJcIBkED97zV29gIIIBB4FcsyfNH4Zwcz3eLP3XDlHA966ZhMayrSbWYZY5uoHuifVUZjq9JLBL5M1zOst6p0t9x23ceSvMjLTSDmiAeHKLfSfNfMwwnWU3B3vESLkBp4C3z3VHlOadQHMLdQmReI4Hh4IpbuDGnKJtq+FYsJX6xjXxEiYWZDEi02tvq3lZML7q9GkDwXsCFBJX9IMu9ow9SlxI7PiLj4hcXr0nAlsEPBiOIItBXeVzz7RsDSpvZVaYqVJDm8DFtfceHf5Ls0uSntOPVY7W40sAmALnbxP8AdZ6OX1if+k4HviPWVseQ9F62lldzJm7G2mODj48AtryjJw4ONVrgQYAMha5NTtdRIw6RSjum6NeyarXpU3sfULtcbuJ0gTYE7TPwW29HGs6qW+8T2vHgPCFlxWTU3tAA0Qdx8Qeal4bDNpt0tED4nvJXFOe7k7koxjtRnwdY3aeB/wDBU1Vh98d7TPkWx8z6qfQfIURfgpJeTIiIrlAiIgCIiAKHUNypZUJUkWiF8c0EQbgr6vjnQCTYBULHxogeHP6lYcHjadUE03teAYJaZgjguU9KPtXc51Slhaberu01HzqcDYljQRp7iZ8FF6LfaSzD1NNShFFwYC5nvtIBBcWxDpnbfxV/SnxwdK072OT78I7Qiqq2fUuoFem4VGus0t2nkfuxxBuqjNekmtmim1zZAl0wRsYEfNVpmCi2bYqzNcO0vovdMaiww5zbPiLtI/ea0eapMn6RdW3RUDnbnVMnwv8AqrjDYsYuhUABa7bmA4XaQeNwCkolopxdmofaVhm0zhtMwes3e51+x94mLStLJXVc2/5rDt6zDnTZ0uNM6eB2MjkqnJuimDc9wc1xdEtBe6BBgmJvBI3WuLXwx1iad+DmzaDJO8lr5lf0ToVGUn6rNq6YZxsbO7ieXKFY5nlbmOpPOptnAAOs4GJDm7cjzW0ZflQpmSdRG1tu/wAUz3Da6R5t7Q+o9PouTG8s8jyZX9F4R3KWPHFY8fXl+5Q9M+1h8PUG2x/ib+rVzajmL3PGzWzcGJHOZ4rornirha2HcYdpLqZ/EO0B6j4lcSObvcS7S0TeFu8c38J2YM0o49qfT/KN1x2JDG73It+q3f7NsxpnA02PqMDtVQaS4B0F7osTOxXFW5s7YgRyuto6GYJuOqtpda1jrktIOotG5Zwce4kRvdTKE0raOnM8eeH8yW2vudazrMzRaybyS2RBBtY22Pd81S5flz60ubEC1zzusOc4SjRpNoUG2YdTnEyXGIueML7lPSI0KWgUw4yTJMD04rn3bJu/Jyw0znhTxcu69vubbRe3D0AarmsaxvacTDRfck8FIwmKZVY2pTc17HCWuaZBHcQtMxPSqpUY9j6dMtcCD72xsbTdYejGdNwlGnhxTmmyYOo6rkuO9jcnkp9aBk//ADs9XX7G/ExuvqgYRzcQ0VDDmGdLeA4S78XyXjQ93Za8lgtJn0kHU+PEd5K1OFqnTJFUl1QNDiAGkmI5gCZB71X0clo0q3Wdp7quoONV5qHYmG650jewgKfSwDQN3eR0j+iPilXBNI950d7tQ9HyFN0T8iSxgAAAAAEACwAHABfQVVUi5rQ5j5pn94CQ3v0k28RbuUl9EMGthAgSZNnjftHnyd9FVckNV2TUWp1MXVoYl1Q4ipVY8WoODA2nMEXDZDhfcmQVa4PPmPIa4aCdjMj+ylclnBrklMqOLmuO0QbEQXQbTvEDhx8QrCi6Co7wS4DgL+J2A+Z9FlUIqyci8sMgL0tjIIiIAiIgPjtlCU0qEqSLRCq+lDHOweLDPfNCqG+Oh0K0XwhVRddn5Rpv2IWZzGmCCBO4M2PkDZXHTno/7Fi6lIQaZOqmRwa64YeTm7eEHiqbCYV1V7KbLue4NaO82Hku9STVnqJ2rN16CPqNFUNrNNN7W6qbXSdTTAcWxbsgCRuuhdEcqe6o+tVaOqA00mkA6zu6oe4e6P4jyWKv0Sw+DwtM02tbVaGtfU/eqmIdfxvHcp2QZ6ymwU6kgD3XRNuRXLKV20cU5bk3EndIMopmm57WhrmibCJA3BA7lA6L5qGfsXT2nDTHCd58/msmeZ+xzDTpSdVi6IAHGJ4r70TwDHNNRwDnB1ubY+p+ip45Kf08llTaAMTSMADU4T92oC6e6H6x5KFgmBtOlXBkaxJFwWP7EyOElrv4VLzfA06lSl1jA5jtVNwMwdQ1NkcRIIg/eXv/AAKgGdW2mGtiAGlwA8BMBc7xpzUvY0WRKNPz3+xZqtz3CvqU+wdrlv3v/HJSctrF9JhO8Q7/ALmktd/UCpK2TMPhZpOEwNSpOlsxvNvK/FarnXQii9xIDqL+Okdk/wAJt6QuvtaBsFhxlIOY4RJ0mLTeLQrrI0zSOVp8HAM36FuoUqlXrg4ME6dBBNxadW6qcDl9bU11IuFWRoDJ1ybAAjit3+0Kq+m2lQLSHP7REXIBhtu93yWHobhXf4hh2OaWua8lwNi3S1xIPoonqJJ0jpU3ts3D2CtTbTbWA1lonTcExcDz4Kwf0aYKFR7gRUDXOABsIBIB5rai0GJGyObIIOxVZ1Jco54aicHcXRyWk6QCvakZjgHYeo6m7gZaebSTB+Y8lDq1g2JIBOwm5PdzXntNOj6uM1JKS6Zs/QuoXmtSkgdkm/C4IHebCeU9y2rE19MMYL24WaNhbieQ7uQWu9BMsezrKz5Bd2Q072uSfgrLF1CKVeqDDg0lp5TYHx0ho9V2Y7UOT5vWKM9S1D3X5JgwGq7zJ74dH5rDyAXmvl4DXFsAwdgG8ObI+MrJk1Vz6FJzjJLRJ5qRiT2XD8LvkrN3E5acZ17MrOj+I/ZtYeZg+pg9+5HODyWTGDqyOLAdQbwtcjy98D8J7lCw4IwzHCJ1RJ4dqQfI/Ve84xhf2IIHON7EGO65CwjljjwxlL2RvLFKeWSXuyhqOJlx3JKx6rx3fqs+IDWNkkW58fD/AGVEw4N3Hjt4Db6nzXViywyK4sSg4OmbtktcvotJ3FvT+ynKq6Ng9T4uMfBWqh9nLLsk4c2WVYMMd1nWkejN9hERSQEREAUOoIJUxRsQ28qsuiYmJERZlzk3TeiHYuu17Q4EtsRP7jYVDhsBTpnUxoaeY39fRbr9ouD01qdUR226SOMt2MeB+C1epRcGseQdLtQaeBLTcLz8jlGUlZ9ho5Qngxy+Vfhf6Oq4QMxeFpOeJ1NBniHbGD4youadHWFhNJpDxECbHbeeML50EdODZ3OeP6ifqtgXfjk3FM+Wzx9PLKK8NmtZXkTAP2rC6peW6hpA4EkKXgKjKIa2myWuN3g6pvG4H7u5mIHmo+ddp1Fr+zTNR2p83mSNPcIG681MMyliaIoDVIdqZqkAfenwn0V+yvfZdZnQL6Tw33o1M7nNIcw/mAUfDde9jXitThwBH7E8b/6im4b3R3EgeAJA+Cr8LjadEvpVKjWFriWhzgJa7tAieAJc3+FUYjdUj3lrHMqVWPcHF0VAQ3SL9lwAk8Wzv++rJU+KzKj1lFzarCdWggOBJD7bDk4MPqrhERkT4bCIikzKdvR6l7U7FvJqVCGhgfGmiGjZgjckkyZN1XU8rDM3NUNdD8OXzHZDg5rDJ5lt48VtKJSLbmF8c4AEnYXKxVKhmALqFndd3suKIHabRqR46HIQkfnzpHn1TEYutiNbhLiGwSNLG2aLcIv4kqsq4qp1gc57+sYQQXE6mkGRvsQVddAclZjMbRo1DDIL3D74ZBLB4/KVtv2w9FCyp7dSb2HANrAD3SIDXwOBEA94HNdtxUkj0fUUWoHROhOb+1YVlY2c6C4d8AO/qa5MxOmhiGH7rgPI2/pLT68lwrIemGLwcCjVhg/y3NBZuTtvuSbEbrpWQ9P8NjwKVcNo1nDSQXRSq8tLz7jpNp5xeVhkwunRh6ThNS8WbVkOat/YYaDq6kPm0bm3NScd/wBf/wBt3ycqOrl9SlV103AObQdTYHw1wdfSe12SL8CVMwLqpFPrXNdUFMtdBDiSdQkBkzYjkuHJGTio15RrJY1L1Ivtfe3ZJwbv+XY3cy4x5kN/qI9CsuJy9rWy9xc7UBM2jVf0bJ8is+W4DQBPDYG5n7zuE3MAWEneV5xLusc37k6QeB+96jsDxPctI4o7Ixkro5pZXvbi+2aL9queHD4elQpsbTdWOqQZcGsg8rEkgcbArnQ6XYsN0ioB36Rq9Tb4LYftrrE49jeDaDIHKXPJ+QWqZ/kr8G9lOrGt1NlQxcDXPZnjEb85XfihFRSo6caTir7Z2L7HcfUrYF3WOLiys9oc4yYIa/fxcVvS1P7Lst6jLqNwTUmqS0gjt3AkWMCB4grbFzz+JnFkrc6M2G3KkKPhhupCmPRi+wiIrEBERAF4rNkL690Am5jkJPoo3tw+5U/lu/RAeEWKpiL2ZU/luXn2j8FT+W5Z0zQ5tn7X4nHvptudfVt5ANsfL3iVY9OMuFGlhGsHZZrb4k6TJ7zBVn0fwjmYvF1amGrN1Pd1by1pa5pJJIDSXAnvAsp3SvDmvhqjW0arnjtMAYQS4bCTAE3F+a5vQltl7s9j+PjHLiS+GNf3VN/b/Jl6H0dODoDmC78xLvqrlVeS1nDD0WuoVqZaxrS1zJI0iN2kg7TY8VN9o/BU/I5bxi0kjy809+SUvdsxYrAtfu1rhM6XcDEEg8Co+CyhlONLA037ZMvvwFoHEKb7R+Cp+Rye0fgqfkcpplNxma0AADYKHWOivTdweDTPiO2z4Cp6rN7R+Cp+Ryi5oXPpuDGVNYhzP2Z95p1D1iPNGmTF88kvG0espvZPvNInkeB8ivOBr9ZTY/YkXHI7EeRkKKDW+/U/+OvOWl9PrGuZUILtTXdWR713CBt2pPmop2Txtqy0RYPaPwVPyOT2j8FT8jlNMoZ0WD2j8FT8jk9o/BU/I5KYD2kEkCy+dRq1ah7wI8iIX32j8FT8jk9o/BU/I5KYs4b9mGAIzdrP9Hr9X8INP5kLvK0nojkrqOMzDEvoVWddU/Zgsk6T2nO7JMS47HkFt/tH4Kn8ty0yvczXNNSlZHp6aXZfEXIeR73Ehx+981CxWCY6C6gDT1NeGuGxaQ5roA1MuAYgjnCtTXn/AC6n8tye0fgqfkcqcmdmJmPaRcO8hrHqyfivrsc0Cwd+UtHq+B8VjdWIqahSqkFsGKZ3Bn6r4+uXPYepqwNRvTO8QPqlDg8OrPqbNJZxAMau7Ud/Btu9ZqlYPboYAZF7WYNrjgeTd5Cze0fgqfy3L518SRTqc7UzJ/ulMWcL+0Gi7E5u+gyXOJo0RxJ7LZPlqJPgVvP2sdFeuwzcRTE1MO2HRu+mN/NvveEqT0T6OluKxOPxFCq2tUqP6tjmT1bSd5aSC4iBvYSOK3M15sadQj/03LWU2mq8G0stNV4Od/Ydji7D4iiTIp1Gub3CoD9WE+a6WtK6CZCcHiMfpo1WUqtSn1WpojSOskWJgAutMWhbmaul0Frz4MJHqFSauXBnlknJtEyi2AsiwUMSHGNLx/3NIHqVnVjAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgP/Z"
                                class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">
                                    <h2>${inputContent}</h2>
                                </h5>
                                <p class="card-text">${inputDetailContent}</p>
                            </div>
                        </div>
                    </div>
            </div>
            `;

        $('.cardSectionCollaboration').append(addText);
    }
    else if (title == '취미') {
        let addText = `
            <div class="card mb-3" style="width: 400px; display: inline-block;">
                    <div class="row g-0">
                        <div class="card mb-3">
                            <img src="https://blog.kakaocdn.net/dn/wHars/btrzdo1KZzp/SpXJlJJTdMEL4B1DkIaD81/img.jpg"
                                class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">
                                    <h2>${inputContent}</h2>
                                </h5>
                                <p class="card-text">${inputDetailContent}</p>
                            </div>
                        </div>
                    </div>
            </div>
        `;
        $('.cardSectionHobby').append(addText);
    }

});

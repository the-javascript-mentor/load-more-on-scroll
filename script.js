const paragraphTexts = [
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, odit asperiores obcaecati quidem consequatur laborum voluptatibus a fugiat doloribus aliquam itaque veniam quae totam qui iusto minus magni, voluptate facilis.",
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, consequuntur tempore architecto ut ipsum voluptate blanditiis illo numquam sint. Veritatis minima ad consequatur praesentium voluptatem blanditiis ratione vitae beatae corporis?",
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis veniam,magnam nemo non voluptate est maiores neque facilis officiis aspernaturerror, officia hic quos illo obcaecati delectus porro voluptas minima!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nostrumquam at ullam vitae inventore et veritatis eveniet quisquam ducimusdoloremque, molestiae incidunt dolorem cupiditate alias similiquepariatur? Assumenda, natus?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, nobislaborum maxime, optio commodi autem doloribus maiores voluptatum saepedignissimos quas veritatis culpa ullam accusamus consectetur dolores,repellat recusandae obcaecati!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequunturtenetur eius provident unde reprehenderit officiis magnam voluptatemlaudantium error recusandae! Ea facilis magnam veniam! Facilis inventoreillum repellat numquam ea!",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint itaque,veritatis quaerat quae quos labore eos! Optio, dolores blanditiis? Velitodit praesentium ab nulla repellendus, ut quidem consequuntur numquamlaborum.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquidperspiciatis amet, commodi cumque, reprehenderit pariatur optio culpa,possimus nulla molestias architecto voluptatem quisquam ducimus ipsamvitae totam saepe quasi? Quo?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ametnumquam, distinctio enim ipsam aliquam maxime sit, quaerat sunt ullamnemo soluta? Minima incidunt deleniti, officia molestias soluta temporecum.",
];

const main = document.querySelector("main");
const spinner = document.getElementById("spinner");

let loading = false;

// This is what happens when #bottomOfMain is reached
const action = (entries) => {
  // When we scroll to the bottom
  if (entries[0].isIntersecting) {
    // If we're not loading at the moment, let's load some content
    if (!loading) {
      // Show the spinner
      loading = true;
      spinner.classList.remove("hidden");

      // We're "making a request to the server"
      // After a while...
      setTimeout(() => {
        // "The server responds"
        // We render the new content we got from the server
        main.innerHTML =
          main.innerHTML +
          paragraphTexts.map((text) => `<p>${text}</p>`).join("");
        // Hide the spinner
        loading = false;
        spinner.classList.add("hidden");
      }, 2000);
    }
  }
};

// Make the viewport observe elements coming in and out
const observer = new IntersectionObserver(action);

// Specify the element which I want to observe
const target = document.getElementById("bottomOfMain");

// Start observing
observer.observe(target);

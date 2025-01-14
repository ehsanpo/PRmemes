// Import memes data
const memesData = [
  {
    name: "/3dayslater",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/3dayslater.png",
  },
  {
    name: "/???",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/questionmarks.gif",
  },
  {
    name: "/abandonship",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/abandonship.gif",
  },
  {
    name: "/acceptit",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/acceptit.gif",
  },
  {
    name: "/andthenitoldthem",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/andthenitoldthem.png",
  },
  {
    name: "/approvedarthvader",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/approvedarthvader.jpeg",
  },
  {
    name: "/approveyoda",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/approveyoda.jpeg",
  },
  {
    name: "/beautiful",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/beautiful.gif",
  },
  {
    name: "/birdbox",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/birdbox.jpeg",
  },
  {
    name: "/bow",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/bow.gif",
  },
  {
    name: "/butitcanbebetter",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/butitcanbebetter.jpeg",
  },
  {
    name: "/cathack",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/cathack.gif",
  },
  {
    name: "/celebrate",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/celebrate.gif",
  },
  {
    name: "/cheers",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/cheers.gif",
  },
  {
    name: "/ci",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/ci.gif",
  },
  {
    name: "/clap",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/clap.gif",
  },
  {
    name: "/clownmask",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/clownmask.gif",
  },
  {
    name: "/comeatme",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/comeatme.gif",
  },
  {
    name: "/confused",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/confused.gif",
  },
  {
    name: "/cool",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/cool.gif",
  },
  {
    name: "/copypasta",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/copypasta.png",
  },
  {
    name: "/crabrave",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/crabrave.gif",
  },
  {
    name: "/creamrandy",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/creamrandy.gif",
  },
  {
    name: "/deadcode",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/deadcode.jpeg",
  },
  {
    name: "/debugging",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/debugging.gif",
  },
  {
    name: "/deletethepast",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/deletethepast.gif",
  },
  {
    name: "/deletstar",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/deletstar.jpg",
  },
  {
    name: "/didntreadbadger",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/didntreadbadger.gif",
  },
  {
    name: "/didntreaddance",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/didntreaddance.gif",
  },
  {
    name: "/didntreadlol",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/didntreadlol.gif",
  },
  {
    name: "/ditto",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/ditto.png",
  },
  {
    name: "/dogscience",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/dogscience.jpg",
  },
  {
    name: "/doit",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/doit.gif",
  },
  {
    name: "/dunno",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/dunno.gif",
  },
  {
    name: "/excited",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/excited.gif",
  },
  {
    name: "/facepalm",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/facepalm.gif",
  },
  {
    name: "/fire",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/fire.gif",
  },
  {
    name: "/firsttry",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/firsttry.gif",
  },
  {
    name: "/fixit",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/fixit.gif",
  },
  {
    name: "/forkit",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/forkit.jpeg",
  },
  {
    name: "/fthis",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/fthis.gif",
  },
  {
    name: "/fuego",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/fuego.gif",
  },
  {
    name: "/gimmesomefin",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/gimmesomefin.gif",
  },
  {
    name: "/goddamnhero",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/goddamnhero.gif",
  },
  {
    name: "/goforit",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/goforit.gif",
  },
  {
    name: "/gogogo",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/gogogo.gif",
  },
  {
    name: "/goodcatch",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/goodcatch.png",
  },
  {
    name: "/goodidea",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/goodidea.gif",
  },
  {
    name: "/goodtogo",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/goodtogo.gif",
  },
  {
    name: "/gotcharandy",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/gotcharandy.gif",
  },
  {
    name: "/hackinginprogress",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/hackinginprogress.gif",
  },
  {
    name: "/hackingtime",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/hackingtime.gif",
  },
  {
    name: "/happynic",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/happynic.gif",
  },
  {
    name: "/haseverything",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/haseverything.gif",
  },
  {
    name: "/hesitantaccept",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/hesitantaccept.gif",
  },
  {
    name: "/ismellmoney",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/ismellmoney.gif",
  },
  {
    name: "/k",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/k.gif",
  },
  {
    name: "/kanyewow",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/kanyewow.gif",
  },
  {
    name: "/killitwithfire",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/killitwithfire.webp",
  },
  {
    name: "/kobeeasy",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/kobeeasy.gif",
  },
  {
    name: "/lackoftests",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/lackoftests.png",
  },
  {
    name: "/landing",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/landing.gif",
  },
  {
    name: "/leadnotread",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/leadnotread.gif",
  },
  {
    name: "/likeaboss",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/likeaboss.gif",
  },
  {
    name: "/looksgood",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/looksgood.gif",
  },
  {
    name: "/memorylane",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/memorylane.gif",
  },
  {
    name: "/mess",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/mess.gif",
  },
  {
    name: "/micdrop",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/micdrop.gif",
  },
  {
    name: "/monkeyrage",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/monkeyrage.gif",
  },
  {
    name: "/movefast",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/movefast.gif",
  },
  {
    name: "/mrbean",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/mrbean.gif",
  },
  {
    name: "/nervousrudy",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/nervousrudy.gif",
  },
  {
    name: "/nice",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/nice.gif",
  },
  {
    name: "/nicerocket",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/nicerocket.gif",
  },
  {
    name: "/nicesteve",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/nicesteve.gif",
  },
  {
    name: "/nodoubt",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/nodoubt.gif",
  },
  {
    name: "/noice",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/noice.gif",
  },
  {
    name: "/noshortcuts",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/noshortcuts.jpg",
  },
  {
    name: "/ohno",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/ohno.gif",
  },
  {
    name: "/ok",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/ok.gif",
  },
  {
    name: "/okay",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/okay.gif",
  },
  {
    name: "/omgno",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/omgno.gif",
  },
  {
    name: "/onceagain",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/onceagain.png",
  },
  {
    name: "/oops",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/oops.gif",
  },
  {
    name: "/oopsibrokeit",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/oopsibrokeit.gif",
  },
  {
    name: "/ping",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/ping.jpeg",
  },
  {
    name: "/pingballoons",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/pingballoons.gif",
  },
  {
    name: "/pleasesir",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/pleasesir.png",
  },
  {
    name: "/popcorn",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/popcorn.gif",
  },
  {
    name: "/pow",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/pow.gif",
  },
  {
    name: "/quickreviewmorty",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/quickreviewmorty.png",
  },
  {
    name: "/reboot",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/reboot.gif",
  },
  {
    name: "/responsibility",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/responsibility.gif",
  },
  {
    name: "/robothello",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/robothello.gif",
  },
  {
    name: "/sadyoda",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/sadyoda.gif",
  },
  {
    name: "/sendit",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/sendit.gif",
  },
  {
    name: "/sevchicken",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/sevchicken.jpg",
  },
  {
    name: "/shippingtime",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/shippingtime.gif",
  },
  {
    name: "/shipshipship",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/shipshipship.png",
  },
  {
    name: "/shit",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/shit.gif",
  },
  {
    name: "/skimmedit",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/skimmedit.gif",
  },
  {
    name: "/slowblink",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/slowblink.gif",
  },
  {
    name: "/slowstamp",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/slowstamp.gif",
  },
  {
    name: "/solid",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/solid.jpeg",
  },
  {
    name: "/soundsgooddoesntwork",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/soundsgooddoesntwork.gif",
  },
  {
    name: "/supercorn",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/supercorn.gif",
  },
  {
    name: "/tables",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/tables.gif",
  },
  {
    name: "/terrific",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/terrific.gif",
  },
  {
    name: "/testinprod",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/testinprod.jpeg",
  },
  {
    name: "/thankspartner",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/thankspartner.gif",
  },
  {
    name: "/thisisfine",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/thisisfine.gif",
  },
  {
    name: "/thisistheway",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/thisistheway.gif",
  },
  {
    name: "/thumbsdown",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/thumbsdown.gif",
  },
  {
    name: "/thumbsup",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/thumbsup.gif",
  },
  {
    name: "/tommylove",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/tommylove.gif",
  },
  {
    name: "/tommynice",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/tommynice.gif",
  },
  {
    name: "/trustfall",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/trustfall.gif",
  },
  {
    name: "/trustme",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/trustme.gif",
  },
  {
    name: "/typefast",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/typefast.gif",
  },
  {
    name: "/vandamme",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/vandamme.gif",
  },
  {
    name: "/victory",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/victory.gif",
  },
  {
    name: "/welldone",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/welldone.gif",
  },
  {
    name: "/wellwellwell",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/wellwellwell.gif",
  },
  {
    name: "/whatsthat",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/whatsthat.gif",
  },
  {
    name: "/whoops",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/whoops.gif",
  },
  {
    name: "/wooow",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/wooow.gif",
  },
  {
    name: "/wow",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/wow.gif",
  },
  {
    name: "/wrongnumber",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/wrongnumber.gif",
  },
  {
    name: "/wtf",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/wtf.gif",
  },
  {
    name: "/yaknow",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/yaknow.gif",
  },
  {
    name: "/yay",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/yay.gif",
  },
  {
    name: "/yess",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/yess.gif",
  },
  {
    name: "/yesyes",
    link: "https://raw.githubusercontent.com/ehsanpo/PRmemes/main/img/yesyes.gif",
  },
];

// Create a map for faster lookups
const memeMap = new Map(memesData.map((meme) => [meme.name, meme.link]));

function handleTextChange(element: HTMLTextAreaElement) {
  const text = element.value;
  const cursorPosition = element.selectionStart;

  // Find the last word being typed (from the last space/newline to the cursor)
  const lastWord =
    text
      .substring(0, cursorPosition)
      .split(/[\s\n]/)
      .pop() || "";

  // Check if it matches a meme command
  if (memeMap.has(lastWord)) {
    const memeLink = memeMap.get(lastWord);
    const markdownImage = `![${lastWord}](${memeLink})`;

    // Replace the command with the markdown image
    const beforeCommand = text.substring(0, cursorPosition - lastWord.length);
    const afterCommand = text.substring(cursorPosition);

    element.value = beforeCommand + markdownImage + afterCommand;

    // Move cursor after the inserted markdown
    const newPosition = beforeCommand.length + markdownImage.length;
    element.selectionStart = newPosition;
    element.selectionEnd = newPosition;

    // Trigger input event to ensure GitHub's preview updates
    element.dispatchEvent(new Event("input", { bubbles: true }));
  }
}

function initMemeListener() {
  // GitHub uses both textarea and rich-text div elements
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node instanceof HTMLElement) {
          // Find textareas and rich-text editors
          const textareas = node.querySelectorAll("textarea");
          textareas.forEach((textarea) => {
            if (!textarea.dataset.memeEnabled) {
              textarea.dataset.memeEnabled = "true";
              textarea.addEventListener("input", (e) => {
                handleTextChange(e.target as HTMLTextAreaElement);
              });
            }
          });
        }
      }
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  // Handle existing textareas
  document.querySelectorAll("textarea").forEach((textarea) => {
    if (!textarea.dataset.memeEnabled) {
      textarea.dataset.memeEnabled = "true";
      textarea.addEventListener("input", (e) => {
        handleTextChange(e.target as HTMLTextAreaElement);
      });
    }
  });
}

// Initialize when the page loads
initMemeListener();

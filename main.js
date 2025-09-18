 // Check localStorage for visit count
        function checkVisit() {
            let visitCount = localStorage.getItem('visitCount') || 0;

            // Increment the visit count
            visitCount = parseInt(visitCount) + 1;

            // Store the updated visit count in localStorage
            localStorage.setItem('visitCount', visitCount);

            return visitCount;
        }

        // Show the popup if it's the 3rd visit
        function showPopup() {
            const visitCount = checkVisit();

            // If it's the 3rd visit, set a timeout to show the popup after 5 seconds
            if (visitCount === 3) {
                setTimeout(function() {
                    document.getElementById('popup').style.display = 'block';
                }, 5000); // 5 seconds delay
            }
        }

        // Close the popup when the user clicks the "Close" button
        document.getElementById('closePopup').addEventListener('click', function() {
            document.getElementById('popup').style.display = 'none';
        });

        // Run the function to check visit count and show the popup
        showPopup();

// script for accordian 
const accGroups = document.querySelectorAll("[acc-group]");

if (accGroups.length > 0) {
  accGroups.forEach((group) => {
    const heads = group.querySelectorAll("[acc-head]");

    heads.forEach((head) => {
      const content = head.nextElementSibling;
      content.style.cssText = "height:0;overflow:hidden;transition:height 0.3s";

      head.addEventListener("click", () => {
        // Close others in the same group
        heads.forEach((h) => {
          if (h !== head) {
            h.classList.remove("open");
            h.nextElementSibling.style.height = "0px";
          }
        });

        // Toggle current
        const isOpen = head.classList.toggle("open");
        content.style.height = isOpen ? content.scrollHeight + "px" : "0px";
      });
    });

    // âœ… Open first item in each group
  //  heads[0]?.click();
  });
}

// Function to detect Safari browser
  function isSafari() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  }

  if (isSafari()) {
    // Show alert
   // alert('Safari browser is detected!');

    // Add the CSS rule
    const style = document.createElement('style');
    style.innerHTML = `
      h1, h2, h3, h4, h5, h6, p {
        text-wrap: balance !important;
      }
    `;
    document.head.appendChild(style);
  }

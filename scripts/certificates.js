/*
 * File: certificates.js
 * Created Date: Monday January 20th 2025 09:20:20
 * Author: ristoxxx@github.com
 * -----
 * Last Modified: Tuesday January 21st 2025 12:26:15
 * Modified By: ristoxxx@github.com
 * -----
 * Copyright (c) 2025 ristoxxx@github.com
 */


    // List of GitHub repositories
    const certs = [
        'AWS cloud practitioner.png',
        'Build web apps with ASP.NET.png',
        'Learn C sharp.PNG',
        'Cellular IoT Fundamentals.PNG',
        'nRf connect SDK fundamentals.PNG',
        'Cybersecurity for Managers certificate.png'
    ];
    
    const repoContainer = document.getElementById('certificates');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const captionText = document.getElementById('caption');
    const span = document.getElementsByClassName('close')[0];
    
    async function displayCerts() {
        for (const cert of certs) {
            const card = document.createElement('li');
            if ((repoContainer.children.length) % 3 === 0) {
                card.className = 'last';
            }
            const title = cert.slice(0, -4);
            card.innerHTML = `
              <div class="imgholder" id="myImg"><img src="/images/certs/${cert}" alt="${cert}" width="284" height="144">
              </div>
              <h2>${title}</h2>
            `;
    
            // Add click event to image to open modal
            const img = card.querySelector('img');
            img.addEventListener('click', function () {
                modal.style.display = 'block';
                modalImg.src = this.src;
                captionText.innerHTML = title;
            });
    
            repoContainer.appendChild(card);
        }
    }
    
    // Add event listener to close the modal
    span.addEventListener('click', function () {
        modal.style.display = 'none';
    });
    
    // Also close modal when clicking outside of the image
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    displayCerts();
    
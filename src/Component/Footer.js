import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Footer = () => {
  return (
    <>
      <div id="footer" class="bg-black text-white brygada-1918-400">
        <div class="container  mx-auto py-10">
          <div class="ml-20 grid grid-cols-3 gap-10 ">
            <div>
              <h2 class="text-xl font-semibold mb-4">Service</h2>
              <ul>
                <li>UI Design</li>
                <li>UX Design</li>
                <li>UX Research</li>
                <li>Poster Design</li>
                <li>Logo Design</li>
              </ul>
            </div>
            <div>
              <h2 class="text-xl font-semibold mb-4">Project</h2>
              <ul>
                <li>Fashion Mania</li>
                <li>Coffee Station</li>
                <li>Plantify</li>
                <li>Tourist</li>
                <li>Spotify Clone</li>
              </ul>
            </div>
            <div>
              <h2 class="text-xl font-semibold mb-4">Contact</h2>
              <ul>
                <li>LinkedIn</li>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>G-mail</li>
              </ul>
            </div>
          </div>
          <div class="flex justify-center space-x-10 mt-10">
            <a href="#" class="text-2xl hover:text-red-400">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" class="text-2xl hover:text-blue-700">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#" class="text-2xl hover:text-sky-400">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" class="text-2xl hover:text-red-700">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

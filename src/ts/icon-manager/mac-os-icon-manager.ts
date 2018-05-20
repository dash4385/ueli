import { IconManager } from "./icon-manager";

export class MacOsIconManager implements IconManager {
    public getFileIcon(): string {
        return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" version="1.1">
                    <g id="surface1">
                        <path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z "></path>
                    </g>
                </svg>`;
    }

    public getFolderIcon(): string {
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                    <path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" d="M 5 4 C 3.3544268 4 2 5.3555411 2 7 L 2 16 L 2 26 L 2 43 C 2 44.644459 3.3544268 46 5 46 L 45 46 C 46.645063 46 48 44.645063 48 43 L 48 26 L 48 16 L 48 11 C 48 9.3549372 46.645063 8 45 8 L 18 8 C 18.08657 8 17.96899 8.000364 17.724609 7.71875 C 17.480227 7.437136 17.179419 6.9699412 16.865234 6.46875 C 16.55105 5.9675588 16.221777 5.4327899 15.806641 4.9628906 C 15.391504 4.4929914 14.818754 4 14 4 L 5 4 z M 5 6 L 14 6 C 13.93925 6 14.06114 6.00701 14.308594 6.2871094 C 14.556051 6.5672101 14.857231 7.0324412 15.169922 7.53125 C 15.482613 8.0300588 15.806429 8.562864 16.212891 9.03125 C 16.619352 9.499636 17.178927 10 18 10 L 45 10 C 45.562937 10 46 10.437063 46 11 L 46 13.1875 C 45.685108 13.07394 45.351843 13 45 13 L 5 13 C 4.6481575 13 4.3148915 13.07394 4 13.1875 L 4 7 C 4 6.4364589 4.4355732 6 5 6 z M 5 15 L 45 15 C 45.56503 15 46 15.43497 46 16 L 46 26 L 46 43 C 46 43.562937 45.562937 44 45 44 L 5 44 C 4.4355732 44 4 43.563541 4 43 L 4 26 L 4 16 C 4 15.43497 4.4349698 15 5 15 z" font-weight="400" font-family="sans-serif" white-space="normal" overflow="visible"></path>
                </svg>`;
    }

    public getProgramIcon(): string {
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                    <path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" d="M 7 7 C 5.3550302 7 4 8.3550302 4 10 L 4 40 C 4 41.64497 5.3550302 43 7 43 L 43 43 C 44.64497 43 46 41.64497 46 40 L 46 10 C 46 8.3550302 44.64497 7 43 7 L 7 7 z M 7 9 L 43 9 C 43.56503 9 44 9.4349698 44 10 L 44 13 L 6 13 L 6 10 C 6 9.4349698 6.4349698 9 7 9 z M 8 10 A 1 1 0 0 0 7 11 A 1 1 0 0 0 8 12 A 1 1 0 0 0 9 11 A 1 1 0 0 0 8 10 z M 11 10 A 1 1 0 0 0 10 11 A 1 1 0 0 0 11 12 A 1 1 0 0 0 12 11 A 1 1 0 0 0 11 10 z M 14 10 A 1 1 0 0 0 13 11 A 1 1 0 0 0 14 12 A 1 1 0 0 0 15 11 A 1 1 0 0 0 14 10 z M 6 15 L 44 15 L 44 40 C 44 40.56503 43.56503 41 43 41 L 7 41 C 6.4349698 41 6 40.56503 6 40 L 6 15 z" font-weight="400" font-family="sans-serif" white-space="normal" overflow="visible"></path>
                </svg>`;
    }

    public getSearchIcon(): string {
        return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" version="1.1">
                    <g id="surface1">
                        <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z "></path>
                    </g>
                </svg>`;
    }

    public getEmailIcon(): string {
        return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" version="1.1">
                    <g id="surface1">
                        <path d="M 0 7 L 0 43 L 50 43 L 50 7 Z M 2 9 L 48 9 L 48 11.5 C 47.609375 11.839844 30.074219 27.136719 28.4375 28.5625 L 28.34375 28.65625 C 27.046875 29.785156 25.71875 30 25 30 C 24.285156 30 22.953125 29.785156 21.65625 28.65625 C 21.285156 28.332031 18.613281 26.023438 16.6875 24.34375 C 10.972656 19.359375 2.292969 11.757813 2 11.5 Z M 2 14.15625 C 3.734375 15.667969 9.886719 21.023438 15.125 25.59375 L 2 35.96875 Z M 48 14.15625 L 48 35.96875 L 34.875 25.59375 C 40.113281 21.023438 46.265625 15.667969 48 14.15625 Z M 16.65625 26.9375 C 17.871094 27.996094 20.066406 29.914063 20.34375 30.15625 L 20.375 30.1875 C 22.066406 31.640625 23.863281 32 25 32 C 26.144531 32 27.957031 31.636719 29.65625 30.15625 C 29.9375 29.914063 32.148438 28.007813 33.375 26.9375 L 48 38.5 L 48 41 L 2 41 L 2 38.5 Z "></path>
                    </g>
                </svg>`;
    }

    public getCustomShortCutIcon(): string {
        return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" version="1.1">
                    <g id="surface1">
                        <path d="M 28.875 11 C 28.371094 11.0625 27.996094 11.492188 28 12 L 28 19.0625 C 16.488281 19.414063 10.28125 25.507813 7.21875 31.5625 C 4.113281 37.699219 4.003906 43.683594 4 43.875 C 4 43.875 4 43.9375 4 43.9375 L 4 44 C 3.984375 44.550781 4.417969 45.015625 4.96875 45.03125 C 5.519531 45.046875 5.984375 44.613281 6 44.0625 C 6 44.0625 6 44 6 44 C 6.007813 43.90625 6.230469 40.878906 9.09375 37.65625 C 11.90625 34.496094 17.394531 31.308594 28 31.09375 L 28 38 C 28 38.382813 28.21875 38.734375 28.566406 38.902344 C 28.914063 39.070313 29.324219 39.023438 29.625 38.78125 L 45.625 25.78125 C 45.863281 25.589844 46 25.304688 46 25 C 46 24.695313 45.863281 24.410156 45.625 24.21875 L 29.625 11.21875 C 29.414063 11.046875 29.144531 10.96875 28.875 11 Z M 30 14.09375 L 43.40625 25 L 30 35.90625 L 30 30 C 30 29.449219 29.550781 29 29 29 C 17.246094 29 10.910156 32.613281 7.59375 36.34375 C 7.46875 36.484375 7.398438 36.609375 7.28125 36.75 C 7.703125 35.375 8.257813 33.90625 9 32.4375 C 11.917969 26.671875 17.488281 21 29 21 C 29.550781 21 30 20.550781 30 20 Z "></path>
                    </g>
                </svg>`;
    }
}

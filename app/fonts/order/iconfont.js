;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-tuikuan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M687.18 302.302c-6.474-6.474-15.082-10.04-24.238-10.04-9.154 0-17.764 3.565-24.237 10.04l-90.225 90.223-90.2-90.2c-6.476-6.473-15.083-10.039-24.239-10.039-9.155 0-17.762 3.564-24.237 10.039-13.363 13.366-13.363 35.111 0 48.476l55.908 55.91-54.557 0c-3.664 0-6.635 2.972-6.635 6.634l0 55.287c0 3.663 2.972 6.634 6.635 6.634l103.06 0 0 45.896-103.06 0c-3.664 0-6.635 2.971-6.635 6.635l0 55.286c0 3.664 2.972 6.635 6.635 6.635l103.06 0 0 103.062c0 18.901 15.376 34.277 34.277 34.277s34.277-15.376 34.277-34.277L582.769 589.718l103.062 0c3.662 0 6.634-2.971 6.634-6.635l0-55.286c0-3.664-2.972-6.635-6.634-6.635L582.77 521.162l0-45.896 103.062 0c3.662 0 6.634-2.972 6.634-6.634l0-55.287c0-3.663-2.972-6.634-6.634-6.634l-54.586 0 55.934-55.931C700.545 337.413 700.545 315.667 687.18 302.302zM967.704 294.895c-22.91-54.165-55.699-102.804-97.46-144.564-41.763-41.762-90.4-74.551-144.564-97.458-56.092-23.726-115.661-35.756-177.053-35.756-61.385 0-120.95 12.031-177.041 35.756-54.162 22.908-102.797 55.698-144.557 97.458-41.76 41.761-74.547 90.398-97.458 144.562-9.399 22.221-17.022 45.213-22.752 68.583l-22.663-51.011c-5.497-12.371-17.799-20.368-31.342-20.368-4.805 0-9.482 0.995-13.901 2.96-8.368 3.717-14.786 10.47-18.074 19.016-3.287 8.546-3.05 17.859 0.667 26.227l70.27 158.166c0.356 0.826 0.765 1.672 1.216 2.518 0.049 0.092 0.099 0.185 0.149 0.278 0.407 0.747 0.803 1.42 1.211 2.059 0.03 0.048 0.07 0.11 0.113 0.171 0.333 0.514 0.705 1.05 1.099 1.588 0.156 0.216 0.343 0.464 0.534 0.712 0.263 0.338 0.525 0.666 0.794 0.987 0.375 0.454 0.787 0.922 1.208 1.373l0.115 0.126c0.205 0.22 0.412 0.445 0.622 0.658 0.22 0.224 0.453 0.445 0.685 0.668l0.089 0.085c0.285 0.27 0.577 0.544 0.874 0.808 0.251 0.222 0.485 0.427 0.723 0.625 0.398 0.335 0.838 0.688 1.287 1.028 0.136 0.108 0.249 0.195 0.358 0.275 0.599 0.445 1.223 0.875 1.906 1.313l0 0c0.043 0.028 0.089 0.057 0.131 0.083 0.604 0.385 1.244 0.759 1.897 1.115l0.215 0.116c1.396 0.751 2.842 1.407 4.302 1.949 0.034 0.014 0.067 0.024 0.101 0.037 0.628 0.229 1.279 0.445 1.991 0.659l0.214 0.063 0.186 0.056c0.652 0.185 1.259 0.34 1.843 0.473l0.023 0.005 0.283 0.069c0.042 0.011 0.085 0.02 0.128 0.027 0.652 0.139 1.34 0.263 2.044 0.368 0.231 0.036 0.475 0.066 0.719 0.098l0.127 0.016c0.417 0.05 0.828 0.096 1.238 0.134l0.143 0.014c0.29 0.024 0.581 0.048 0.874 0.065 0.412 0.025 0.834 0.038 1.256 0.047l0.096 0.006c0.228 0.011 0.456 0.02 0.685 0.02 0.903 0 1.843-0.042 2.869-0.129l0.062-0.005c0.042-0.003 0.084-0.006 0.126-0.01 0.932-0.085 1.869-0.21 2.781-0.369 0.153-0.027 0.285-0.052 0.414-0.075 0.934-0.174 1.782-0.364 2.59-0.58 0.129-0.035 0.263-0.074 0.398-0.115 0.022-0.006 0.04-0.012 0.062-0.018 0.672-0.192 1.363-0.413 2.058-0.656l0.125-0.044c0.207-0.069 0.413-0.143 0.618-0.221 0.612-0.231 1.215-0.479 1.79-0.731 0.025-0.012 0.052-0.023 0.078-0.035 0.101-0.046 0.198-0.094 0.295-0.141 0.289-0.134 0.537-0.252 0.784-0.373 0.811-0.397 1.526-0.779 2.203-1.175 0.101-0.057 0.21-0.123 0.319-0.19l0.081-0.05c1.866-1.123 3.596-2.397 5.174-3.806l130.201-114.071c14.217-12.456 15.649-34.156 3.195-48.373-6.51-7.428-15.911-11.688-25.794-11.688-8.306 0-16.324 3.016-22.575 8.495l-61.817 54.157C203.877 219.108 363.781 85.671 548.632 85.671c212.994 0 386.277 173.283 386.277 386.276 0 212.983-173.283 386.257-386.277 386.257-92.161 0-181.405-32.992-251.295-92.899-6.21-5.32-14.128-8.251-22.297-8.251-10.028 0-19.519 4.363-26.038 11.972-12.299 14.35-10.631 36.031 3.717 48.332 82.308 70.548 187.397 109.399 295.912 109.399 61.389 0 120.958-12.029 177.052-35.754 54.165-22.908 102.803-55.698 144.563-97.457 41.761-41.758 74.55-90.393 97.461-144.558 23.726-56.091 35.757-115.657 35.757-177.042C1003.46 410.56 991.428 350.99 967.704 294.895z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fenxiang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M787.008 629.888c-69.504 0-130.368 36.224-165.248 90.752L411.456 600.384C425.088 573.76 433.408 544.064 433.408 512c0-19.776-3.712-38.4-9.216-56.448l218.752-125.056c35.904 38.912 86.848 63.68 144 63.68 108.352 0 196.352-87.936 196.352-196.352s-88-196.352-196.352-196.352c-108.48 0-196.352 87.936-196.352 196.352 0 19.776 3.776 38.464 9.152 56.448L380.992 379.264C345.088 340.352 294.144 315.648 237.056 315.648 128.576 315.648 40.64 403.52 40.64 512c0 108.48 87.936 196.352 196.352 196.352 44.8 0 85.568-15.616 118.592-40.768l-0.768 1.344 237.888 136c-0.896 6.976-2.112 13.888-2.112 21.376 0 108.224 87.872 196.224 196.352 196.224 108.352 0 196.352-88 196.352-196.224C983.36 717.76 895.36 629.888 787.008 629.888zM787.008 79.936c65.024 0 117.888 52.8 117.888 117.824 0 65.088-52.864 117.824-117.888 117.824-65.152 0-117.888-52.736-117.888-117.824C669.12 132.736 721.856 79.936 787.008 79.936zM237.056 629.888c-65.088 0-117.76-52.736-117.76-117.888 0-65.088 52.736-117.824 117.76-117.824 65.088 0 117.824 52.736 117.824 117.824C354.88 577.152 302.144 629.888 237.056 629.888zM787.008 944.128c-65.152 0-117.888-52.864-117.888-117.76 0-65.28 52.736-118.016 117.888-118.016 65.024 0 117.888 52.736 117.888 118.016C904.896 891.264 852.032 944.128 787.008 944.128z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-daifukuan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M798.367635 897.077286 159.108253 897.077286c-52.906977 0-95.959515-43.063795-95.959515-95.959515L63.148737 222.881207c0-52.910047 43.052538-95.956446 95.959515-95.956446l642.200364 0c52.910047 0 95.958492 43.046399 95.958492 95.956446l0 94.002954c0 17.657148-14.300704 31.988552-31.988552 31.988552-17.683754 0-31.978319-14.331403-31.978319-31.988552l0-94.002954c0-17.619286-14.334473-31.988552-31.992645-31.988552L159.108253 190.892655c-17.629519 0-31.988552 14.369266-31.988552 31.988552l0 578.23554c0 17.654079 14.359033 31.978319 31.988552 31.978319l639.258359 0c17.658172 0 31.988552-14.32424 31.988552-31.978319l0-98.896404c0-17.693987 14.292518-31.988552 31.982412-31.988552s31.994692 14.294564 31.994692 31.988552l0 98.896404C894.332267 854.013491 851.303264 897.077286 798.367635 897.077286L798.367635 897.077286z"  ></path>' +
    '' +
    '<path d="M691.725826 510.830361c0-0.024559 0.00614-0.051165 0.00614-0.075725l-0.00614 0c-0.044002-8.142447-3.409656-16.223496-9.165754-21.989827-5.8001-5.792936-13.95278-9.165754-22.145369-9.165754-8.194636 0-16.349363 3.372817-22.141276 9.165754-5.760191 5.76633-9.121751 13.847379-9.165754 21.989827l-0.00614 0c0 0.024559 0 0.051165 0 0.075725 0 0.022513 0 0.048095 0 0.085958l0.00614 0c0.044002 8.142447 3.405563 16.213263 9.165754 21.978571 5.791913 5.801123 13.936407 9.16473 22.141276 9.16473 8.192589 0 16.34527-3.363607 22.13923-9.16473 5.756097-5.765307 9.127891-13.836123 9.171893-21.978571l0.00614 0C691.731966 510.877433 691.725826 510.852874 691.725826 510.830361z"  ></path>' +
    '' +
    '<path d="M903.146003 638.09486 572.486094 638.09486c-31.336706 0-56.831356-25.495674-56.831356-56.833403L515.654738 440.042131c0-31.337729 25.494651-56.83238 56.831356-56.83238l330.659909 0c31.336706 0 56.831356 25.494651 56.831356 56.83238L959.977359 581.261457C959.977359 612.599186 934.482709 638.09486 903.146003 638.09486zM577.652767 576.095807l320.324516 0L897.977283 445.208804 577.652767 445.208804 577.652767 576.095807z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconfonttaobaozhongchoudisiqiqiche" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M933.268556 479.029074c14.360056 0 26.001187-11.641131 26.001187-26.001187L959.269743 261.296121c0-67.571978-54.974056-122.546034-122.546034-122.546034L491.697605 138.750087c-67.571978 0-122.546034 54.974056-122.546034 122.546034l0 10.852162L247.056815 272.148283c-32.383548 0-62.537312 14.520715-82.728166 39.839357L71.782883 428.03875c-20.38119 25.557072-31.604812 57.633628-31.604812 90.321098l0 250.075569 70.228481 0c2.961448 62.83714 55.006801 113.049752 118.563326 113.049752 63.557548 0 115.602901-50.211589 118.564349-113.049752l21.617343 0 28.262694 0 205.888184 0c2.961448 62.83714 55.006801 113.049752 118.563326 113.049752 63.578014 0 115.635647-50.244334 118.566396-113.110127 65.863057-1.967818 118.837572-56.153928 118.837572-122.484635l0-36.854373c0-14.360056-11.641131-26.001187-26.001187-26.001187s-26.001187 11.641131-26.001187 26.001187l0 36.854373c0 38.897915-31.645744 70.543659-70.543659 70.543659l-5.582135 0c-18.088984-42.487673-60.259432-72.351841-109.275799-72.351841s-91.185792 29.864168-109.275799 72.351841L421.153946 716.434066 421.153946 261.296121c0-38.897915 31.645744-70.543659 70.543659-70.543659l345.026104 0c38.897915 0 70.543659 31.645744 70.543659 70.543659l0 191.731766C907.266345 467.387943 918.907477 479.029074 933.268556 479.029074zM228.969878 829.482795c-36.777625 0-66.699098-29.921473-66.699098-66.700121s29.921473-66.699098 66.699098-66.699098c36.777625 0 66.699098 29.92045 66.699098 66.699098S265.748526 829.482795 228.969878 829.482795zM338.246701 716.433042c-18.090007-42.487673-60.259432-72.351841-109.275799-72.351841-49.015344 0-91.185792 29.864168-109.275799 72.351841l-27.514657 0L92.180446 518.359848c0-20.954241 7.194866-41.515532 20.259416-57.898665l92.545766-116.050086c10.267854-12.875239 25.602098-20.259416 42.070164-20.259416L369.151571 324.151681l0 392.281361L338.246701 716.433042zM721.865775 696.084599c36.777625 0 66.699098 29.92045 66.699098 66.699098s-29.92045 66.700121-66.699098 66.700121-66.699098-29.921473-66.699098-66.700121S685.087127 696.084599 721.865775 696.084599zM303.583227 337.717651c-14.360056 0-26.001187 11.641131-26.001187 26.001187l0 100.613512-100.614535 0c-14.360056 0-26.001187 11.641131-26.001187 26.001187s11.641131 26.001187 26.001187 26.001187l152.61691 0L329.584414 363.718839C329.584414 349.358783 317.943282 337.717651 303.583227 337.717651z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-daifahuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M878.449531 896.436696 142.136719 896.436696c-43.831274 0-79.490425-35.659151-79.490425-79.489402L62.646294 204.665333c0-43.831274 35.659151-79.489402 79.490425-79.489402l736.312812 0c43.830251 0 79.489402 35.659151 79.489402 79.489402l0 612.281961C957.938933 860.777545 922.279782 896.436696 878.449531 896.436696zM142.136719 164.060543c-22.388916 0-40.60479 18.21485-40.60479 40.603767l0 612.281961c0 22.388916 18.21485 40.603767 40.60479 40.603767l736.312812 0c22.388916 0 40.603767-18.21485 40.603767-40.603767L919.053298 204.665333c0-22.388916-18.21485-40.603767-40.603767-40.603767L142.136719 164.061566z"  ></path>' +
    '' +
    '<path d="M384.009466 656.718009c-2.501984 0-5.025457-0.484024-7.429203-1.477654-7.268544-3.007497-12.008498-10.099009-12.008498-17.966187L364.571764 144.617725c0-10.737552 8.704243-19.442818 19.442818-19.442818s19.442818 8.705266 19.442818 19.442818l0 445.667246 93.078909-93.217055c7.303336-7.316639 19.058055-7.636934 26.751271-0.726547l108.3538 97.331769L631.641379 144.617725c0-10.737552 8.705266-19.442818 19.442818-19.442818s19.442818 8.705266 19.442818 19.442818l0 492.656443c0 7.674796-4.514827 14.631232-11.524474 17.757432-7.011694 3.127224-15.201214 1.835811-20.912285-3.292999L511.021208 537.594935l-113.249297 113.417119C394.052193 654.737912 389.073808 656.718009 384.009466 656.718009z"  ></path>' +
    '' +
    '<path d="M938.496116 391.18233 651.083174 391.18233c-10.737552 0-19.442818-8.704243-19.442818-19.442818s8.705266-19.442818 19.442818-19.442818l287.412942 0c10.737552 0 19.442818 8.704243 19.442818 19.442818S949.233668 391.18233 938.496116 391.18233z"  ></path>' +
    '' +
    '<path d="M384.013559 391.18233 82.090135 391.18233c-10.737552 0-19.442818-8.705266-19.442818-19.442818s8.705266-19.442818 19.442818-19.442818l301.923424 0c10.737552 0 19.442818 8.705266 19.442818 19.442818S394.751111 391.18233 384.013559 391.18233z"  ></path>' +
    '' +
    '<path d="M278.106484 512.852414l-85.038792 0c-10.738575 0-19.442818-8.704243-19.442818-19.442818s8.704243-19.442818 19.442818-19.442818l85.038792 0c10.738575 0 19.442818 8.704243 19.442818 19.442818S288.845059 512.852414 278.106484 512.852414z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-youhuiquan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M430.144 956.96c-22.72 0-44-8.96-59.872-25.248l-68.064-70.176c-12.288-12.672-12-32.832 0.608-45.184 14.272-13.92 22.24-32.544 22.464-52.48 0.224-19.904-7.328-38.688-21.248-52.928-27.904-28.576-77.056-29.152-105.504-1.312-6.08 5.952-15.328 9.056-22.784 9.12-8.512-0.128-16.64-3.584-22.56-9.728l-67.968-70.048c-15.52-15.808-24.032-36.928-23.808-59.296 0.256-22.4 9.216-43.328 25.248-59.008L530.112 86.144c32.192-31.328 87.168-30.624 118.4 1.312l68.128 70.208c12.288 12.672 12 32.864-0.64 45.184-14.24 13.952-22.24 32.608-22.464 52.544s7.328 38.72 21.216 52.992c27.872 28.48 77.056 29.12 105.6 1.248 6.08-5.952 14.688-8.384 22.784-9.12 8.512 0.128 16.64 3.616 22.528 9.728l67.936 70.112c15.488 15.712 24 36.768 23.808 59.104-0.192 22.4-9.12 43.392-25.12 59.072L488.672 933.12C472.864 948.512 452.096 956.96 430.144 956.96zM367.808 837.216l48.352 49.888c7.264 7.392 20.224 7.648 27.808 0.224l443.52-434.464c3.776-3.712 5.888-8.672 5.952-13.952 0.032-5.216-1.952-10.112-5.6-13.824l-48.352-49.92c-21.312 12.832-45.824 19.68-71.296 19.68-37.664 0-72.864-14.816-99.2-41.76-25.888-26.464-39.872-61.408-39.456-98.432 0.32-26.176 7.776-51.136 21.504-72.672l-48.384-49.856c-7.2-7.328-20.256-7.552-27.84-0.192L131.392 566.432c-3.808 3.712-5.92 8.672-5.984 13.92-0.032 5.248 1.952 10.176 5.6 13.952l48.32 49.824c21.312-12.832 45.792-19.68 71.232-19.68 37.664 0 72.928 14.848 99.232 41.824 25.856 26.432 39.904 61.376 39.456 98.368C388.96 790.752 381.504 815.712 367.808 837.216zM354.208 583.232c-8.192 0-16.384-3.136-22.624-9.376-12.512-12.512-12.512-32.736 0-45.248L510.24 349.92c12.512-12.512 32.768-12.512 45.28 0 12.48 12.48 12.48 32.736 0 45.248L376.864 573.856C370.592 580.096 362.4 583.232 354.208 583.232zM449.824 678.816c-8.192 0-16.384-3.136-22.624-9.376-12.512-12.512-12.512-32.736 0-45.248l178.656-178.688c12.512-12.512 32.736-12.512 45.248 0 12.512 12.48 12.512 32.736 0 45.248L472.448 669.44C466.176 675.68 457.984 678.816 449.824 678.816z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-guanzhu" viewBox="0 0 1055 1024">' +
    '' +
    '<path d="M1050.708375 401.504235c-8.972726-28.054211-32.711466-48.156182-61.311801-52.408405L717.630144 301.34103 596.215556 57.159315C583.536731 30.918624 556.414214 13.987576 527.213021 13.987576c-29.344717 0-55.856646 16.457903-69.075513 42.968616L336.657238 301.474825l-271.023264 49.171802c-29.274171 4.383585-53.021426 24.619349-61.855492 52.409621-9.10652 27.585932-1.483899 58.611591 19.968176 79.530922L219.018079 662.950267 167.822336 925.883847c-4.859162 28.870356 7.21394 58.480229 30.624276 75.141256 23.202347 16.934697 56.390607 19.15933 80.403017 6.474423l248.296495-121.413372 246.133894 121.149433c11.13411 5.734906 23.467503 8.76352 35.749811 8.76352l0 0.003649c16.054088 0 32.17264-5.327442 45.061887-14.696685 23.80807-17.135388 35.886037-46.751343 30.823751-75.892936l-49.507503-262.458003 195.877143-182.661925C1052.121729 459.98568 1059.746782 428.953939 1050.708375 401.504235zM1007.182689 439.071214 783.844895 647.354728l56.529266 299.498319c1.519172 8.807307-2.218551 17.817739-9.647778 23.238836-7.21394 5.194864-16.436009 6.233593-25.518203 1.446194L527.210588 834.763915 246.865517 971.965003c-7.837908 4.157351-17.614615 3.532167-25.180069-2.020292-7.145827-5.130399-10.820302-14.216242-9.43614-22.466479l58.403601-300.05539L47.725012 441.495321c-6.379551-6.31387-8.807307-15.743929-5.893026-24.415009 2.705075-8.596886 9.987129-14.84021 19.838031-16.296134l306.915383-55.76299 137.258255-276.260699c8.189421-16.44574 34.4739-16.512637 42.451684-0.077844l137.469893 276.473554 307.680443 53.965283c9.087059 1.317265 16.371545 7.491259 19.21528 16.29735C1015.432926 423.880707 1013.080581 433.310765 1007.182689 439.071214z"  ></path>' +
    '' +
    '<path d="M527.206939 825.984582"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fankui" viewBox="0 0 1026 1024">' +
    '' +
    '<path d="M992.956271 1023.992906l-960.927178 0c-17.714653 0-32.030906-14.316252-32.030906-32.030906l0 0c0-17.714653 14.316252-32.030906 32.030906-32.030906l960.927178 0c17.714653 0 32.030906 14.316252 32.030906 32.030906l0 0C1024.987177 1009.676654 1010.670924 1023.992906 992.956271 1023.992906zM1004.674895 117.811234 907.175942 20.312282C893.562807 6.816333 875.848154 0 858.016314 0c-17.812309 0-35.526962 6.816333-49.042442 20.312282L328.217318 501.088367 195.582024 783.15565c-11.406127 24.433331 7.617106 49.647904 31.230133 49.647904 4.902291 0 9.902237-1.093738 15.01937-3.398401L523.89881 696.867514l480.756554-480.756554C1031.783979 188.88469 1031.783979 144.939849 1004.674895 117.811234zM486.457806 643.625899l-198.298651 93.182593L381.361278 538.529371l348.238447-348.238447 105.096527 105.096527L486.457806 643.625899zM959.32382 170.759884l-79.374147 79.374147-105.096527-105.096527 79.374147-79.374147c0.390621-0.410152 1.601545-1.601545 3.808553-1.601545 2.207008 0 3.398401 1.191393 3.808553 1.601545l97.498953 97.498953c0.390621 0.390621 1.601545 1.601545 1.601545 3.808553S959.714441 170.369264 959.32382 170.759884z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-kefu" viewBox="0 0 1033 1024">' +
    '' +
    '<path d="M967.287347 487.800855c-26.963095-28.529777-62.562894-45.329395-106.061594-50.121538l0-58.481949c-4.370541-117.831662-83.285868-340.658633-350.493629-340.658633-267.314185 0-345.411891 222.932372-349.387435 342.159824l0 56.559157C83.087347 454.899514 7.411807 512.156566 7.411807 627.02678c0 124.177184 89.657996 180.973748 173.575244 192.730513 2.475378 0.355087 4.976338 0.527003 7.451716 0.527003 12.876262 0 25.38311-4.634554 35.231409-13.19144 11.796674-10.255575 18.563798-25.120121 18.563798-40.786938L242.233973 587.911924c0-22.341844-18.11559-40.444131-40.444131-40.444131s-40.444131 18.102287-40.444131 40.444131l0 144.650471c-38.021965-12.704346-73.042573-41.721217-73.042573-105.535615 0-87.221504 67.013253-108.668978 106.904799-113.684202 26.805506-3.330862 47.02706-26.318412 47.02706-53.465702l-0.026606-77.70271c0.421602-10.730389 13.244652-262.745123 268.524756-262.745123 255.438717 0 269.209348 252.146741 269.63095 261.270539l0 385.368928c0 1.092891 0.286526 2.13257 0.350994 3.215228 0 0.026606-0.008186 0.049119-0.008186 0.075725 0 40.562834-32.992415 73.569576-73.569576 73.569576L599.639013 842.929038c-8.218172-24.1357-30.824029-41.612747-57.741076-41.612747l-59.83783 0c-33.828456 0-61.251016 27.423583-61.251016 61.251016 0 33.827433 27.42256 61.251016 61.251016 61.251016l59.83783 0c0.817622 0 1.577938-0.208754 2.387373-0.240477 0.806365 0.048095 1.569752 0.240477 2.388397 0.240477l160.461575 0c68.625984 0 126.860293-45.00296 146.932444-107.021455 103.09503-20.579711 162.351622-89.031732 162.300456-188.256618C1016.841973 619.97006 1019.606946 543.188326 967.287347 487.800855zM935.532109 626.25009c0 54.584176-24.356734 89.472777-74.27975 105.904005l-0.026606-212.795501c19.695574 3.541663 35.178197 11.375072 46.948265 23.658839C937.480484 573.653175 935.610904 623.695918 935.532109 626.25009z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jifen" viewBox="0 0 1026 1024">' +
    '' +
    '<path d="M513.969231 953.391262C269.278523 953.391262 70.894277 866.613169 70.199138 759.689846 47.119754 753.539938 24.656738 746.925292 3.2768 740.001477 2.349292 746.306954 1.9712 752.612431 1.9712 759.079385 1.9712 905.385354 231.1936 1024 513.969231 1024 796.738954 1024 1025.969231 905.385354 1025.969231 759.079385 1025.969231 750.849969 1025.274092 742.614646 1023.812923 734.615631 1002.655508 741.840738 980.503631 748.770462 957.577846 755.152738L957.733415 759.079385C957.739323 866.3808 759.045908 953.391262 513.969231 953.391262L513.969231 953.391262 513.969231 953.391262ZM513.969231 706.158277C269.278523 706.158277 70.894277 619.541662 70.199138 512.462769 47.119754 506.306954 24.656738 499.845908 3.2768 492.768492 2.349292 499.073969 1.9712 505.540923 1.9712 512 1.9712 658.152369 231.1936 776.765046 513.969231 776.765046 796.738954 776.765046 1025.969231 658.152369 1025.969231 512 1025.969231 503.693785 1025.274092 495.541169 1023.812923 487.384615 1002.655508 494.692431 980.503631 501.537477 957.577846 507.998523L957.733415 512C957.739323 619.230523 759.045908 706.158277 513.969231 706.158277L513.969231 706.158277 513.969231 706.158277ZM70.199138 264.772923C70.199138 157.536492 268.892554 70.616615 513.969231 70.616615 759.045908 70.616615 957.739323 157.536492 957.739323 264.772923 957.739323 371.999508 759.045908 458.925292 513.969231 458.925292 268.892554 458.925292 70.199138 371.999508 70.199138 264.772923L70.199138 264.772923 70.199138 264.772923ZM1.9712 264.772923C1.9712 411.072985 231.201477 529.539938 513.969231 529.539938 796.738954 529.539938 1025.969231 411.072985 1025.969231 264.772923 1025.969231 118.466954 796.738954 0.001969 513.969231 0.001969 231.201477 0.001969 1.9712 118.466954 1.9712 264.772923L1.9712 264.772923 1.9712 264.772923Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-combinedshapecopy10" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M782.892568 963.764706C816.377934 963.764706 843.294118 936.855203 843.294118 903.523015L843.294118 120.476984C843.294118 87.035931 816.407594 60.235294 782.892568 60.235294L241.107434 60.235294C207.622063 60.235294 180.705882 87.144797 180.705882 120.476984L180.705882 903.523015C180.705882 936.964072 207.592403 963.764706 241.107434 963.764706L512 625.232601 782.892568 963.764706ZM512 722.823529 275.732252 1024 241.107434 1024C174.481544 1024 120.470588 970.38707 120.470588 903.523015L120.470588 120.476984C120.470588 53.939383 174.293393 0 241.107434 0L782.892568 0C849.518453 0 903.529412 53.61293 903.529412 120.476984L903.529412 903.523015C903.529412 970.060619 849.70661 1024 782.892568 1024L748.267749 1024 512 722.823529Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon01" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M130.387118 961.353195l-1.280156-26.155706c-0.152473-3.120061-2.611477-78.499865 95.198176-269.40173 2.898003-11.80179 33.384341-131.441635 108.003829-262.029832 45.99966-80.501452 99.55132-149.448754 159.167093-204.927299 74.709539-69.52547 159.180396-117.962645 251.065106-143.967926l11.142781-3.15383-1.436722 11.490705c-0.341784 2.728134-34.505885 274.062889-68.079538 386.063753l-0.907673 3.024893L635.313002 478.419184l44.61001-13.31219-3.897773 13.501502c-0.118704 0.410346-12.039197 41.529859-28.372188 83.47518-9.656941 24.800849-18.968004 45.095058-27.677363 60.32083-11.82328 20.671809-22.705118 32.264844-33.270754 35.443233l-69.706595 20.971637 63.712067 11.353582-8.240685 10.115382c-0.783853 0.961908-19.583011 23.826662-53.196573 46.89096-31.087019 21.330818-81.214696 46.756907-143.484925 46.756907-30.302143 0-61.07603-5.992481-91.466178-17.810644l-8.395204-3.264347 235.906871-402.301576c-13.743002 17.312294-30.067806 38.60525-48.974411 64.424288-63.83998 87.174432-171.080423 245.318218-319.43117 503.661078L130.387118 961.353195zM735.519238 72.939219C539.117103 132.995013 415.290913 289.484114 345.636506 411.382395c-77.117378 134.957715-106.327654 257.629615-106.613156 258.853489l-0.214894 0.916882-0.429789 0.837064c-50.036603 97.544617-72.912613 163.710572-83.293031 202.041576-2.411933 8.90788-4.28049 16.766872-5.725398 23.617907 139.099035-239.888556 240.353137-388.832819 301.713646-472.553593 69.774133-95.200222 103.799064-128.420835 105.213273-129.787972l40.3418-39.008432L298.358737 764.952082c25.832342 9.05319 51.838645 13.635555 77.429487 13.635555 88.849584 0 152.732543-55.023174 175.573761-78.051657l-100.368942-17.886369 131.290185-39.499619c5.89936-1.774413 22.680559-13.759375 51.031257-86.544075 10.441816-26.806529 19.057031-53.287647 23.852244-68.689429l-157.806095 47.090505 170.995489-93.158726C699.322851 342.79325 728.655923 125.56888 735.519238 72.939219z"  ></path>' +
    '' +
    '<path d="M155.206386 942.129364l676.405397 0 0 15.349593-676.405397 0 0-15.349593Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)
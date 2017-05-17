;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-iconfontshuaxin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M870.797622 153.143912C778.509018 60.923558 650.974257 3.75758 510.141088 3.75758c-218.641397 0-405.33489 137.620357-477.821708 330.972017l119.502501 44.710294c54.42677-144.905274 194.230451-248.151753 358.32023-248.151753 105.584966 0 201.236292 42.845831 270.484214 112.088868L637.646171 386.348232l382.606328 0L1020.252499 3.75758 870.797622 153.143912z"  ></path>' +
    '' +
    '<path d="M510.141088 896.469442c-105.677068 0-201.329417-42.837644-270.576315-112.084775l143.040531-142.975319L0 641.409348l0 382.590652 149.393476-149.449777c92.288604 92.28687 219.823365 149.449777 360.748635 149.449777 218.673121 0 405.243812-137.617287 477.729606-330.967924l-119.442123-44.710294C814.003848 793.227056 674.136719 896.469442 510.141088 896.469442z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jingyin" viewBox="0 0 1195 1024">' +
    '' +
    '<path d="M294.755 272v480h-160.084c-44.137 0-79.916-36.078-79.916-79.262v-321.475c0-43.776 35.413-79.262 79.916-79.262h160.084zM930.734 427.147l-113.187-113.186c-23.278-23.278-61.372-23.382-84.803 0.050-23.595 23.595-23.453 61.399-0.050 84.803l113.186 113.186-113.186 113.186c-23.278 23.278-23.382 61.372 0.050 84.803 23.595 23.595 61.399 23.453 84.803 0.050l113.187-113.186 113.186 113.186c23.278 23.278 61.372 23.382 84.803-0.050 23.595-23.595 23.453-61.399 0.050-84.803l-113.187-113.186 113.187-113.186c23.278-23.278 23.382-61.372-0.050-84.803-23.595-23.595-61.399-23.453-84.803-0.050l-113.186 113.186zM550.767 79.991c35.339-26.505 63.988-11.53 63.988 32.207v799.604c0 44.292-28.398 58.899-63.988 32.207l-256.012-192.009v-480l256.012-192.009z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bofangqiquanping" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M963.968 1024 723.84 1024c-33.152 0-60.032-26.88-60.032-60.032 0-33.152 26.88-60.032 60.032-60.032l95.168 0-230.144-230.144 0.064-0.064c-10.432-10.816-16.96-25.472-16.96-41.664 0-33.152 26.88-60.032 60.032-60.032 16.192 0 30.848 6.528 41.664 16.96l0.064-0.064 230.144 230.208L903.872 723.84c0-33.152 26.88-60.032 60.032-60.032 33.152 0 60.032 26.88 60.032 60.032l0 240.128C1024 997.12 997.12 1024 963.968 1024zM963.968 360.128c-33.152 0-60.032-26.88-60.032-60.032L903.936 204.928l-230.144 230.144-0.064-0.064c-10.816 10.432-25.472 16.96-41.664 16.96-33.152 0-60.032-26.88-60.032-60.032 0-16.192 6.464-30.848 16.96-41.664L588.928 350.144l230.144-230.144L723.84 120c-33.152 0-60.032-26.88-60.032-60.032S690.688 0 723.84 0l240.128 0C997.12 0 1024 26.816 1024 60.032l0 240.128C1024 333.248 997.12 360.128 963.968 360.128zM435.072 673.728l-230.144 230.144L300.16 903.872c33.152 0 60.032 26.88 60.032 60.032C360.192 997.12 333.312 1024 300.16 1024L60.032 1024C26.88 1024 0 997.12 0 963.904L0 723.84c0-33.152 26.88-60.032 60.032-60.032 33.152 0 60.032 26.88 60.032 60.032l0 95.168 230.144-230.208 0.064 0.064c10.816-10.432 25.472-16.96 41.664-16.96 33.152 0 60.032 26.88 60.032 60.032C451.968 648.256 445.504 662.912 435.072 673.728L435.072 673.728zM391.936 451.968c-16.192 0-30.848-6.464-41.664-16.96L350.208 435.072 120.064 204.928l0 95.168c0 33.152-26.88 60.032-60.032 60.032C26.88 360.128 0 333.248 0 300.096L0 60.032C0 26.816 26.88 0 60.032 0L300.16 0c33.152 0 60.032 26.88 60.032 60.032S333.312 120.064 300.16 120.064L204.928 120.064l230.144 230.144L435.008 350.272C445.504 361.024 451.968 375.68 451.968 391.872 451.968 425.088 425.088 451.968 391.936 451.968z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bofangqixiashou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M64 118.144l0 787.648 0 0C64 971.072 114.112 1024 176 1024c21.824 0 42.112-6.592 59.328-17.984l0 0 513.792-305.408 0 215.552c0 65.28 36.992 107.776 98.816 107.776S960 971.072 960 905.856L960 118.144C960 52.928 909.824 0 848 0s-98.816 42.56-98.816 107.776l0 269.504L235.392 17.984l0 0C218.112 6.592 197.824 0 176 0 114.112 0 64 52.928 64 118.144L64 118.144z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bofangqiyinliang1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M581.824 130.368c-40.704 0-116.352 54.528-116.352 54.528L232.704 348.416 58.176 348.416C16.896 348.544 0 369.536 0 407.872l0 213.184c0 38.336 16.832 54.528 58.176 54.528l174.528 0 232.704 163.52c0 0 72.256 54.528 116.352 54.528 52.288 0 58.176-70.656 58.176-109.056L639.936 239.424C640 201.024 612.288 130.368 581.824 130.368z"  ></path>' +
    '' +
    '<path d="M864.32 202.048c-12.416-13.312-32.64-13.312-45.184-0.448-12.608 12.992-12.8 34.24-0.512 47.552C819.584 250.24 918.464 358.528 918.464 512c0 153.472-98.88 261.76-99.904 262.912-12.288 13.248-12.096 34.56 0.512 47.488C825.344 828.8 833.408 832 841.536 832c8.256 0 16.512-3.328 22.72-10.048 4.8-5.12 118.208-128.256 118.208-309.952S869.12 207.168 864.32 202.048z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-quanping" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M843.617212 67.898413 175.411567 67.898413c-61.502749 0-111.367437 49.856501-111.367437 111.367437l0 668.205645c0 61.510936 49.864688 111.367437 111.367437 111.367437L843.617212 958.838931c61.510936 0 111.367437-49.856501 111.367437-111.367437L954.984648 179.26585C954.984648 117.754914 905.12917 67.898413 843.617212 67.898413zM398.146441 736.104057c15.380292 0 27.842115 12.461823 27.842115 27.842115 0 15.379269-12.461823 27.841092-27.842115 27.841092L259.725858 791.787264c-7.785314 0-14.781658-3.217275-19.838837-8.365528-5.383614-4.577249-8.791224-11.228739-8.791224-19.475564L231.095797 624.736621c0-15.371082 12.471033-27.842115 27.842115-27.842115 15.380292 0 27.842115 12.471033 27.842115 27.842115l-0.61603 71.426773 133.036969-133.037992 39.378869 39.378869L324.962651 736.113267 398.146441 736.104057zM419.199942 463.611943 286.162974 330.565764l0.61603 71.435982c0 15.380292-12.461823 27.842115-27.842115 27.842115-15.371082 0-27.842115-12.461823-27.842115-27.842115L231.094774 262.791172c0-8.256034 3.40761-14.908548 8.791224-19.476587 5.057179-5.148253 12.053524-8.374738 19.838837-8.374738l138.420583 0.00921c15.380292 0 27.842115 12.461823 27.842115 27.842115s-12.461823 27.842115-27.842115 27.842115l-73.175603-0.00921 133.607974 133.607974L419.199942 463.611943zM787.932981 763.946172c0 8.247848-3.40761 14.899338-8.791224 19.475564-5.057179 5.148253-12.053524 8.365528-19.839861 8.365528L620.881314 791.787264c-15.379269 0-27.841092-12.461823-27.841092-27.841092 0-15.380292 12.461823-27.842115 27.841092-27.842115l73.185836 0.00921L560.449967 602.50427l39.378869-39.378869L732.875015 696.163393l-0.62524-71.426773c0-15.371082 12.462846-27.842115 27.842115-27.842115 15.380292 0 27.842115 12.471033 27.842115 27.842115L787.934005 763.946172zM787.932981 402.000724c0 15.380292-12.461823 27.842115-27.842115 27.842115-15.379269 0-27.842115-12.461823-27.842115-27.842115l0.62524-71.435982L599.828836 463.611943l-39.378869-39.378869 133.617184-133.607974-73.185836 0.00921c-15.379269 0-27.841092-12.461823-27.841092-27.842115s12.461823-27.842115 27.841092-27.842115l138.421606-0.00921c7.785314 0 14.781658 3.226484 19.839861 8.374738 5.383614 4.568039 8.791224 11.219529 8.791224 19.476587L787.934005 402.000724z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tuichuquanping" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M482.172671 50.618864c0-27.762297-22.509666-50.271964-50.275034-50.271964-27.762297 0-50.271964 22.509666-50.271964 50.271964l0 255.509325L145.709593 92.036159c-20.827351-18.3663-52.592822-16.371876-70.959122 4.455475-18.36016 20.827351-16.364713 52.592822 4.458545 70.959122l226.078015 205.167776-240.272295 0c-27.762297 0-50.271964 22.509666-50.271964 50.275034 0 27.762297 22.509666 50.271964 50.271964 50.271964l367.380228 0c27.76639 0 50.275034-22.509666 50.275034-50.271964 0-2.384303-0.178055-4.726651-0.49835-7.021927L482.171648 50.618864zM1009.256204 601.106434c0-27.76639-22.505573-50.275034-50.271964-50.275034L591.604012 550.8314c-8.324596 0-16.170285 2.036379-23.084765 5.618974-15.243169 3.206018-26.690896 16.726963-26.690896 32.9259l0 4.733814c-0.318248 2.288113-0.49528 4.621251-0.49528 6.996344s0.177032 4.708232 0.49528 6.996344l0 381.89992c0 18.58631 15.068184 33.651424 33.651424 33.651424l33.248242 0c18.582217 0 33.647331-15.065114 33.647331-33.651424L642.37535 717.865671l235.916081 214.097146c20.827351 18.36323 52.595892 16.367783 70.959122-4.458545 18.36323-20.823258 16.367783-52.592822-4.458545-70.956052L718.708875 651.378397l240.275365 0C986.750631 651.378397 1009.256204 628.871801 1009.256204 601.106434z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sx" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M532.106943 106.432031c-71.450309 0-159.430082 27.27111-219.150232 58.517765-1.24741-2.110057-1.916653-3.257184-1.916653-3.257184l-58.20668-96.7843c0 0-5.608741-6.569626-17.350157 5.13802C223.734644 81.756025 69.37709 357.529883 69.37709 357.529883S53.043077 390.118092 77.54819 390.118092l334.240457 0c0 0 31.991622 0.678452 14.97711-29.871331-7.568373-13.574157-31.256888-54.293557-55.254441-95.349625 42.937928-21.523199 110.465904-42.899042 160.595628-42.899042 171.432441 0 310.409702 138.584312 310.409702 309.541939 0 170.963767-138.977261 309.553195-310.409702 309.553195-136.570445 0-252.537643-87.951121-294.063409-210.146161l-123.050524-0.326435c51.052746 188.855252 221.026976 326.043774 417.113933 326.043774 235.44229 0 426.306292-190.32779 426.306292-425.12335 0-234.785328-190.865026-425.114141-426.306292-425.114141l0 0L532.106943 106.432031zM532.106943 106.432031"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bofangqikaishi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M32.131929 56.557555C32.131929 103.800537 32.131929 933.467705 32.131929 966.035207 32.131929 1008.319351 75.890321 1039.814672 119.112624 1015.087494 153.757477 995.252143 903.011059 595.395589 962.115045 561.219815 1000.9146 538.771023 1000.244487 485.161966 962.115045 462.713173 919.562856 437.583928 167.695831 35.717034 117.303318 7.840325 80.447091-12.66514 32.131929 9.917676 32.131929 56.557555Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bofangqitingzhi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M-1.4e-05 0l1024.000065 0 0 1024.000065-1024.000065 0 0-1024.000065Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bofangqiyinliang" viewBox="0 0 1097 1024">' +
    '' +
    '<path d="M592.376709 6.010119C575.589824-1.865209 555.83242 0.7599 541.601562 12.572893L267.484853 240.750184 48.979019 239.852121 48.771773 239.852121C36.19888 239.852121 24.109559 244.826012 15.198003 253.737569 6.217365 262.649125 1.105309 274.738446 1.105309 287.449503L0.138164 737.793965C0.138164 750.505022 5.112056 762.663425 14.023612 771.644063 22.935168 780.624701 35.093571 785.667675 47.804628 785.667675L268.86649 785.667675 541.670644 1012.946902C550.374955 1020.200494 561.289885 1023.999995 572.204814 1023.999995 579.043915 1023.999995 585.952099 1022.480195 592.376709 1019.440594 609.163594 1011.634347 619.802196 994.847462 619.802196 976.333531L619.802196 49.186264C619.802196 30.672333 609.163594 13.885448 592.376709 6.010119L592.376709 6.010119 592.376709 6.010119ZM777.170609 244.34244C753.682786 233.220265 725.773726 243.375294 714.306142 266.724953 702.90764 290.212776 712.786342 318.605409 736.066919 330.34932 739.10652 331.938202 810.537134 369.035146 810.537134 474.730349 810.537134 587.610063 743.735003 694.065166 741.524384 695.308639 717.967479 707.121632 708.434187 735.790592 720.178098 759.278415 728.606082 776.0653 745.392967 785.667675 762.939752 785.667675 770.055181 785.667675 777.377855 784.078793 784.147874 780.693783 789.121766 778.137755 905.870062 648.678402 905.870062 474.730349 905.870062 306.861497 782.420829 246.829386 777.170609 244.34244L777.170609 244.34244 777.170609 244.34244ZM925.558384 104.382648C903.590362 90.220873 874.437829 96.645483 860.068808 118.613505 845.768868 140.512446 852.055315 170.07947 873.954256 184.517573 879.066311 187.902583 1001.20299 271.077109 1001.20299 478.184441 1001.20299 685.775346 884.040203 838.169867 879.411721 841.347631 857.443698 855.99298 851.571742 885.490922 866.148009 907.458944 875.335893 921.206229 890.464814 928.667067 905.870062 928.667067 914.919782 928.667067 924.176748 926.041957 932.259322 920.653574 938.96026 916.163255 1096.535918 739.10652 1096.535918 478.184441 1096.535918 216.778789 932.604731 108.803885 925.558384 104.382648L925.558384 104.382648 925.558384 104.382648Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bofangqizanting" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M884.100959 1024 765.031192 1024C694.859409 1024 638.02344 967.164031 638.02344 896.992248L638.02344 127.007752C638.02344 56.835969 694.859409 0 765.031192 0L884.100959 0C954.209238 0 1011.108711 56.835969 1011.108711 127.007752L1011.108711 896.992248C1011.108711 967.164031 954.209238 1024 884.100959 1024ZM258.968804 1024 139.899037 1024C69.727254 1024 12.891285 967.164031 12.891285 896.992248L12.891285 127.007752C12.891285 56.835969 69.727254 0 139.899037 0L258.968804 0C329.140587 0 385.976556 56.835969 385.976556 127.007752L385.976556 896.992248C385.976556 967.164031 329.140587 1024 258.968804 1024Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tuichuquanping1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M823.855634 182.874027H200.146413c-29.731138 0-53.844326 22.272259-53.844326 49.738821v591.758532c0 27.51261 24.103978 49.733705 53.844326 49.733705h623.707174c29.723975 0 53.844326-22.267143 53.844326-49.733705V232.612848c0.00307-27.510564-24.107047-49.738821-53.842279-49.738821z m-385.111055 597.592401a2.952238 2.952238 0 0 1-3.203972-0.651846l-61.847603-61.470004-82.920548 82.445734a8.800433 8.800433 0 0 1-6.230911 2.559289 8.786107 8.786107 0 0 1-6.206352-2.559289l-56.306401-55.975872c-1.608637-1.581008-2.587941-3.78828-2.587941-6.247285a8.7902 8.7902 0 0 1 2.587941-6.247284l82.864267-82.395592-60.10082-59.763128c-0.828878-0.802272-1.105171-2.057869-0.62831-3.212158 0.453325-1.128707 1.557472-1.806135 2.713808-1.806136h156.763346c20.057825 0 36.367279 16.422018 36.428678 36.229133l0.483 156.384723a2.956332 2.956332 0 0 1-1.808182 2.709715z m1.327228-342.476025c-0.061398 19.807115-16.371876 36.229133-36.428677 36.229132H246.87876c-1.156336 0-2.261507-0.676405-2.713808-1.806135-0.476861-1.154289-0.200568-2.408863 0.62831-3.211135l60.10082-59.763129-82.864266-82.395592a8.7902 8.7902 0 0 1-2.587942-6.247284c0-2.459005 0.979304-4.666276 2.587942-6.247284l56.3064-55.974849a8.78406 8.78406 0 0 1 6.206352-2.559289 8.800433 8.800433 0 0 1 6.230912 2.559289l82.920547 82.445734 61.847604-61.471027a2.952238 2.952238 0 0 1 3.203971-0.651846 2.961448 2.961448 0 0 1 1.810229 2.709715l-0.484024 156.3837z m363.593996 306.824037l-56.307424 55.975872a8.783037 8.783037 0 0 1-6.206352 2.559289 8.800433 8.800433 0 0 1-6.230912-2.559289l-82.920547-82.445734-61.847604 61.470004a2.952238 2.952238 0 0 1-3.203971 0.651846 2.961448 2.961448 0 0 1-1.810229-2.709715l0.483-156.384723c0.061398-19.807115 16.371876-36.229133 36.428678-36.229133h156.763346c1.156336 0 2.261507 0.677429 2.713808 1.806136 0.476861 1.154289 0.201591 2.408863-0.62831 3.212158l-60.100819 59.763128 82.864266 82.395592a8.794293 8.794293 0 0 1 2.587941 6.247284c0.002047 2.457981-0.977257 4.666276-2.584871 6.247285z m0-417.771919l-82.864266 82.395592 60.100819 59.763129c0.828878 0.802272 1.105171 2.056845 0.62831 3.211134-0.452301 1.128707-1.557472 1.806135-2.713808 1.806136H622.052488c-20.057825 0-36.368302-16.422018-36.428677-36.229133l-0.483-156.385746c0-1.128707 0.678452-2.232854 1.810228-2.709715a2.952238 2.952238 0 0 1 3.203972 0.651846l61.847603 61.471027 82.920548-82.445734a8.800433 8.800433 0 0 1 6.230912-2.559289c2.411933 0 4.623297 0.979304 6.206352 2.559289l56.307423 55.974849c1.607614 1.581008 2.587941 3.78828 2.587942 6.247284a8.807596 8.807596 0 0 1-2.589988 6.249331z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bofangqixiashou1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M960 905.856v-787.648c0-65.28-50.112-118.208-112-118.208-21.824 0-42.112 6.592-59.328 17.984v0l-513.792 305.408v-215.552c0-65.28-36.992-107.776-98.816-107.777s-112.064 52.864-112.064 118.080v787.711c0 65.216 50.176 118.144 112 118.143s98.816-42.56 98.816-107.777v-269.504l513.792 359.296c17.28 11.392 37.568 17.984 59.392 17.984 61.887 0 112-52.928 112-118.143v0z"  ></path>' +
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

        const countryData = {
            // Tier 1
            germany: { facebook: [109, 158], google: [122, 183], seo: [146, 219], push: [61, 97], aso: [97, 146] },
            uk: { facebook: [109, 158], google: [122, 183], seo: [146, 219], push: [61, 97], aso: [97, 146] },
            canada: { facebook: [103, 146], google: [109, 170], seo: [134, 195], push: [54, 91], aso: [85, 134] },
            australia: { facebook: [103, 146], google: [109, 170], seo: [134, 195], push: [54, 91], aso: [85, 134] },
            norway: { facebook: [97, 134], google: [109, 158], seo: [134, 183], push: [48, 85], aso: [85, 122] },
            sweden: { facebook: [97, 134], google: [109, 158], seo: [134, 183], push: [48, 85], aso: [85, 122] },
            netherlands: { facebook: [97, 134], google: [109, 158], seo: [134, 183], push: [48, 79], aso: [85, 122] },
            finland: { facebook: [97, 134], google: [109, 158], seo: [134, 183], push: [48, 79], aso: [85, 122] },
            switzerland: { facebook: [103, 146], google: [122, 170], seo: [146, 195], push: [54, 85], aso: [85, 134] },
            belgium: { facebook: [91, 134], google: [109, 158], seo: [134, 183], push: [48, 79], aso: [73, 109] },
            france: { facebook: [91, 134], google: [109, 158], seo: [134, 183], push: [48, 79], aso: [73, 109] },
            ireland: { facebook: [85, 122], google: [103, 146], seo: [122, 170], push: [42, 73], aso: [73, 109] },
            
            // Tier 2
            poland: { facebook: [73, 109], google: [85, 122], seo: [109, 146], push: [36, 61], aso: [61, 97] },
            spain: { facebook: [73, 109], google: [85, 122], seo: [109, 146], push: [36, 61], aso: [61, 97] },
            italy: { facebook: [79, 115], google: [91, 134], seo: [109, 158], push: [42, 67], aso: [67, 103] },
            portugal: { facebook: [67, 103], google: [79, 115], seo: [97, 146], push: [36, 61], aso: [61, 91] },
            czech: { facebook: [61, 97], google: [73, 109], seo: [91, 134], push: [30, 48], aso: [48, 85] },
            hungary: { facebook: [54, 85], google: [67, 103], seo: [85, 122], push: [30, 48], aso: [48, 79] },
            romania: { facebook: [54, 85], google: [67, 103], seo: [85, 122], push: [30, 48], aso: [48, 79] },
            greece: { facebook: [61, 91], google: [73, 109], seo: [91, 128], push: [30, 48], aso: [48, 79] },
            slovakia: { facebook: [54, 85], google: [67, 97], seo: [85, 122], push: [30, 48], aso: [42, 73] },
            croatia: { facebook: [54, 85], google: [67, 97], seo: [85, 122], push: [30, 42], aso: [42, 67] },
            bulgaria: { facebook: [48, 79], google: [61, 91], seo: [79, 109], push: [24, 36], aso: [36, 61] },
            slovenia: { facebook: [48, 79], google: [61, 91], seo: [79, 109], push: [24, 36], aso: [36, 61] },
            latvia: { facebook: [42, 73], google: [54, 85], seo: [73, 103], push: [21, 36], aso: [30, 54] },
            lithuania: { facebook: [42, 73], google: [54, 85], seo: [73, 103], push: [21, 36], aso: [30, 54] },
            estonia: { facebook: [42, 73], google: [54, 85], seo: [73, 103], push: [21, 36], aso: [30, 54] },
            
            // Tier 3
            ukraine: { facebook: [24, 48], google: [30, 54], seo: [48, 73], push: [18, 30], aso: [24, 48] },
            kazakhstan: { facebook: [24, 48], google: [30, 54], seo: [48, 73], push: [18, 30], aso: [24, 48] },
            india: { facebook: [18, 36], google: [24, 48], seo: [36, 61], push: [12, 24], aso: [18, 36] },
            pakistan: { facebook: [12, 30], google: [18, 36], seo: [30, 48], push: [9, 18], aso: [14, 30] },
            philippines: { facebook: [24, 42], google: [30, 48], seo: [42, 67], push: [14, 26], aso: [24, 42] },
            indonesia: { facebook: [24, 42], google: [30, 48], seo: [42, 67], push: [14, 26], aso: [24, 42] },
            vietnam: { facebook: [24, 42], google: [30, 48], seo: [42, 67], push: [14, 26], aso: [24, 42] },
            thailand: { facebook: [30, 48], google: [36, 54], seo: [48, 73], push: [18, 30], aso: [30, 48] },
            mexico: { facebook: [36, 61], google: [42, 67], seo: [61, 91], push: [24, 36], aso: [36, 61] },
            brazil: { facebook: [42, 67], google: [48, 73], seo: [67, 97], push: [26, 42], aso: [42, 67] },
            argentina: { facebook: [36, 61], google: [42, 67], seo: [61, 85], push: [24, 36], aso: [36, 61] },
            colombia: { facebook: [36, 61], google: [42, 67], seo: [61, 85], push: [24, 36], aso: [36, 61] },
            turkey: { facebook: [30, 54], google: [36, 61], seo: [54, 85], push: [21, 34], aso: [36, 54] },
            egypt: { facebook: [24, 42], google: [30, 54], seo: [48, 73], push: [18, 30], aso: [30, 48] },
            morocco: { facebook: [24, 36], google: [30, 48], seo: [42, 67], push: [14, 24], aso: [24, 42] },
            nigeria: { facebook: [24, 36], google: [30, 48], seo: [42, 67], push: [14, 24], aso: [24, 42] }
        };

        const countrySelect = document.getElementById('country');
        const trafficSourceSelect = document.getElementById('traffic-source');
        const depositsInput = document.getElementById('deposits');
        const resultDiv = document.getElementById('result');
        const payoutSpan = document.getElementById('payout');

        function calculateAndDisplay() {
            const country = countrySelect.value;
            const trafficSource = trafficSourceSelect.value;
            const deposits = parseInt(depositsInput.value);
            
            if (country && trafficSource && !isNaN(deposits) && deposits > 0) {
                const sourceKey = {
                    'facebook': 'facebook',
                    'google': 'google',
                    'seo': 'seo',
                    'push': 'push',
                    'aso': 'aso'
                }[trafficSource];
                
                const range = countryData[country][sourceKey];
                const average = (range[0] + range[1]) / 2;
                const payout = average * deposits;
                
                payoutSpan.textContent = payout.toFixed(2);
                resultDiv.classList.remove('hidden');
            } else {
                resultDiv.classList.add('hidden');
            }
        }

        countrySelect.addEventListener('change', calculateAndDisplay);
        trafficSourceSelect.addEventListener('change', calculateAndDisplay);
        depositsInput.addEventListener('input', calculateAndDisplay);

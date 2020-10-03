﻿import { StarRatingView } from "../StarRatingView.js";

const section = document.getElementById("feedback");
const form = section.querySelector("form");
const sent = document.getElementById("feedback-sent");

function formSubmitting(event) {
    event.preventDefault();
    // TODO: Trigger the animation by adding the "sending" CSS class to the form
    form.classList.add("sending");
};

function animationEnded() {
    section.style.display = "none";
    sent.style.display = "block";
};

form.addEventListener("submit", formSubmitting, false);

// TODO: Add listener for the animationend event,
//       calling the animationEnded function.
form.addEventListener("animationend", animationEnded, false);

const questions = form.querySelectorAll(".feedback-question");
for (let i = 0; i < questions.length; i++) {
    new StarRatingView(questions[i]);
}
// SIG // Begin signature block
// SIG // MIIaaAYJKoZIhvcNAQcCoIIaWTCCGlUCAQExCzAJBgUr
// SIG // DgMCGgUAMGcGCisGAQQBgjcCAQSgWTBXMDIGCisGAQQB
// SIG // gjcCAR4wJAIBAQQQEODJBs441BGiowAQS9NQkAIBAAIB
// SIG // AAIBAAIBAAIBADAhMAkGBSsOAwIaBQAEFGvBwK4SIN7l
// SIG // JeOuFVSYB909PlU1oIIVLzCCBJkwggOBoAMCAQICEzMA
// SIG // AACdHo0nrrjz2DgAAQAAAJ0wDQYJKoZIhvcNAQEFBQAw
// SIG // eTELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0
// SIG // b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1p
// SIG // Y3Jvc29mdCBDb3Jwb3JhdGlvbjEjMCEGA1UEAxMaTWlj
// SIG // cm9zb2Z0IENvZGUgU2lnbmluZyBQQ0EwHhcNMTIwOTA0
// SIG // MjE0MjA5WhcNMTMwMzA0MjE0MjA5WjCBgzELMAkGA1UE
// SIG // BhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNV
// SIG // BAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBD
// SIG // b3Jwb3JhdGlvbjENMAsGA1UECxMETU9QUjEeMBwGA1UE
// SIG // AxMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMIIBIjANBgkq
// SIG // hkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuqRJbBD7Ipxl
// SIG // ohaYO8thYvp0Ka2NBhnScVgZil5XDWlibjagTv0ieeAd
// SIG // xxphjvr8oxElFsjAWCwxioiuMh6I238+dFf3haQ2U8pB
// SIG // 72m4aZ5tVutu5LImTXPRZHG0H9ZhhIgAIe9oWINbSY+0
// SIG // 39M11svZMJ9T/HprmoQrtyFndNT2eLZhh5iUfCrPZ+kZ
// SIG // vtm6Y+08Tj59Auvzf6/PD7eBfvT76PeRSLuPPYzIB5Mc
// SIG // 87115PxjICmfOfNBVDgeVGRAtISqN67zAIziDfqhsg8i
// SIG // taeprtYXuTDwAiMgEPprWQ/grZ+eYIGTA0wNm2IZs7uW
// SIG // vJFapniGdptszUzsErU4RwIDAQABo4IBDTCCAQkwEwYD
// SIG // VR0lBAwwCgYIKwYBBQUHAwMwHQYDVR0OBBYEFN5R3Bvy
// SIG // HkoFPxIcwbzDs2UskQWYMB8GA1UdIwQYMBaAFMsR6MrS
// SIG // tBZYAck3LjMWFrlMmgofMFYGA1UdHwRPME0wS6BJoEeG
// SIG // RWh0dHA6Ly9jcmwubWljcm9zb2Z0LmNvbS9wa2kvY3Js
// SIG // L3Byb2R1Y3RzL01pY0NvZFNpZ1BDQV8wOC0zMS0yMDEw
// SIG // LmNybDBaBggrBgEFBQcBAQROMEwwSgYIKwYBBQUHMAKG
// SIG // Pmh0dHA6Ly93d3cubWljcm9zb2Z0LmNvbS9wa2kvY2Vy
// SIG // dHMvTWljQ29kU2lnUENBXzA4LTMxLTIwMTAuY3J0MA0G
// SIG // CSqGSIb3DQEBBQUAA4IBAQAqpPfuwMMmeoNiGnicW8X9
// SIG // 7BXEp3gT0RdTKAsMAEI/OA+J3GQZhDV/SLnP63qJoc1P
// SIG // qeC77UcQ/hfah4kQ0UwVoPAR/9qWz2TPgf0zp8N4k+R8
// SIG // 1W2HcdYcYeLMTmS3cz/5eyc09lI/R0PADoFwU8GWAaJL
// SIG // u78qA3d7bvvQRooXKDGlBeMWirjxSmkVXTP533+UPEdF
// SIG // Ha7Ki8f3iB7q/pEMn08HCe0mkm6zlBkB+F+B567aiY9/
// SIG // Wl6EX7W+fEblR6/+WCuRf4fcRh9RlczDYqG1x1/ryWlc
// SIG // cZGpjVYgLDpOk/2bBo+tivhofju6eUKTOUn10F7scI1C
// SIG // dcWCVZAbtVVhMIIEwzCCA6ugAwIBAgITMwAAACs5MkjB
// SIG // sslI8wAAAAAAKzANBgkqhkiG9w0BAQUFADB3MQswCQYD
// SIG // VQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4G
// SIG // A1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0
// SIG // IENvcnBvcmF0aW9uMSEwHwYDVQQDExhNaWNyb3NvZnQg
// SIG // VGltZS1TdGFtcCBQQ0EwHhcNMTIwOTA0MjExMjM0WhcN
// SIG // MTMxMjA0MjExMjM0WjCBszELMAkGA1UEBhMCVVMxEzAR
// SIG // BgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1v
// SIG // bmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlv
// SIG // bjENMAsGA1UECxMETU9QUjEnMCUGA1UECxMebkNpcGhl
// SIG // ciBEU0UgRVNOOkMwRjQtMzA4Ni1ERUY4MSUwIwYDVQQD
// SIG // ExxNaWNyb3NvZnQgVGltZS1TdGFtcCBTZXJ2aWNlMIIB
// SIG // IjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAprYw
// SIG // DgNlrlBahmuFn0ihHsnA7l5JB4XgcJZ8vrlfYl8GJtOL
// SIG // ObsYIqUukq3YS4g6Gq+bg67IXjmMwjJ7FnjtNzg68WL7
// SIG // aIICaOzru0CKsf6hLDZiYHA5YGIO+8YYOG+wktZADYCm
// SIG // DXiLNmuGiiYXGP+w6026uykT5lxIjnBGNib+NDWrNOH3
// SIG // 2thc6pl9MbdNH1frfNaVDWYMHg4yFz4s1YChzuv3mJEC
// SIG // 3MFf/TiA+Dl/XWTKN1w7UVtdhV/OHhz7NL5f5ShVcFSc
// SIG // uOx8AFVGWyiYKFZM4fG6CRmWgUgqMMj3MyBs52nDs9TD
// SIG // Ts8wHjfUmFLUqSNFsq5cQUlPtGJokwIDAQABo4IBCTCC
// SIG // AQUwHQYDVR0OBBYEFKUYM1M/lWChQxbvjsav0iu6nljQ
// SIG // MB8GA1UdIwQYMBaAFCM0+NlSRnAK7UD7dvuzK7DDNbMP
// SIG // MFQGA1UdHwRNMEswSaBHoEWGQ2h0dHA6Ly9jcmwubWlj
// SIG // cm9zb2Z0LmNvbS9wa2kvY3JsL3Byb2R1Y3RzL01pY3Jv
// SIG // c29mdFRpbWVTdGFtcFBDQS5jcmwwWAYIKwYBBQUHAQEE
// SIG // TDBKMEgGCCsGAQUFBzAChjxodHRwOi8vd3d3Lm1pY3Jv
// SIG // c29mdC5jb20vcGtpL2NlcnRzL01pY3Jvc29mdFRpbWVT
// SIG // dGFtcFBDQS5jcnQwEwYDVR0lBAwwCgYIKwYBBQUHAwgw
// SIG // DQYJKoZIhvcNAQEFBQADggEBAH7MsHvlL77nVrXPc9uq
// SIG // UtEWOca0zfrX/h5ltedI85tGiAVmaiaGXv6HWNzGY444
// SIG // gPQIRnwrc7EOv0Gqy8eqlKQ38GQ54cXV+c4HzqvkJfBp
// SIG // rtRG4v5mMjzXl8UyIfruGiWgXgxCLBEzOoKD/e0ds77O
// SIG // kaSRJXG5q3Kwnq/kzwBiiXCpuEpQjO4vImSlqOZNa5Us
// SIG // HHnsp6Mx2pBgkKRu/pMCDT8sJA3GaiaBUYNKELt1Y0Sq
// SIG // aQjGA+vizwvtVjrs73KnCgz0ANMiuK8icrPnxJwLKKCA
// SIG // yuPh1zlmMOdGFxjn+oL6WQt6vKgN/hz/A4tjsk0SAiNP
// SIG // LbOFhDvioUfozxUwggW8MIIDpKADAgECAgphMyYaAAAA
// SIG // AAAxMA0GCSqGSIb3DQEBBQUAMF8xEzARBgoJkiaJk/Is
// SIG // ZAEZFgNjb20xGTAXBgoJkiaJk/IsZAEZFgltaWNyb3Nv
// SIG // ZnQxLTArBgNVBAMTJE1pY3Jvc29mdCBSb290IENlcnRp
// SIG // ZmljYXRlIEF1dGhvcml0eTAeFw0xMDA4MzEyMjE5MzJa
// SIG // Fw0yMDA4MzEyMjI5MzJaMHkxCzAJBgNVBAYTAlVTMRMw
// SIG // EQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRt
// SIG // b25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRp
// SIG // b24xIzAhBgNVBAMTGk1pY3Jvc29mdCBDb2RlIFNpZ25p
// SIG // bmcgUENBMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIB
// SIG // CgKCAQEAsnJZXBkwZL8dmmAgIEKZdlNsPhvWb8zL8epr
// SIG // /pcWEODfOnSDGrcvoDLs/97CQk4j1XIA2zVXConKriBJ
// SIG // 9PBorE1LjaW9eUtxm0cH2v0l3511iM+qc0R/14Hb873y
// SIG // NqTJXEXcr6094CholxqnpXJzVvEXlOT9NZRyoNZ2Xx53
// SIG // RYOFOBbQc1sFumdSjaWyaS/aGQv+knQp4nYvVN0UMFn4
// SIG // 0o1i/cvJX0YxULknE+RAMM9yKRAoIsc3Tj2gMj2QzaE4
// SIG // BoVcTlaCKCoFMrdL109j59ItYvFFPeesCAD2RqGe0VuM
// SIG // JlPoeqpK8kbPNzw4nrR3XKUXno3LEY9WPMGsCV8D0wID
// SIG // AQABo4IBXjCCAVowDwYDVR0TAQH/BAUwAwEB/zAdBgNV
// SIG // HQ4EFgQUyxHoytK0FlgByTcuMxYWuUyaCh8wCwYDVR0P
// SIG // BAQDAgGGMBIGCSsGAQQBgjcVAQQFAgMBAAEwIwYJKwYB
// SIG // BAGCNxUCBBYEFP3RMU7TJoqV4ZhgO6gxb6Y8vNgtMBkG
// SIG // CSsGAQQBgjcUAgQMHgoAUwB1AGIAQwBBMB8GA1UdIwQY
// SIG // MBaAFA6sgmBAVieX5SUT/CrhClOVWeSkMFAGA1UdHwRJ
// SIG // MEcwRaBDoEGGP2h0dHA6Ly9jcmwubWljcm9zb2Z0LmNv
// SIG // bS9wa2kvY3JsL3Byb2R1Y3RzL21pY3Jvc29mdHJvb3Rj
// SIG // ZXJ0LmNybDBUBggrBgEFBQcBAQRIMEYwRAYIKwYBBQUH
// SIG // MAKGOGh0dHA6Ly93d3cubWljcm9zb2Z0LmNvbS9wa2kv
// SIG // Y2VydHMvTWljcm9zb2Z0Um9vdENlcnQuY3J0MA0GCSqG
// SIG // SIb3DQEBBQUAA4ICAQBZOT5/Jkav629AsTK1ausOL26o
// SIG // SffrX3XtTDst10OtC/7L6S0xoyPMfFCYgCFdrD0vTLqi
// SIG // qFac43C7uLT4ebVJcvc+6kF/yuEMF2nLpZwgLfoLUMRW
// SIG // zS3jStK8cOeoDaIDpVbguIpLV/KVQpzx8+/u44YfNDy4
// SIG // VprwUyOFKqSCHJPilAcd8uJO+IyhyugTpZFOyBvSj3KV
// SIG // KnFtmxr4HPBT1mfMIv9cHc2ijL0nsnljVkSiUc356aNY
// SIG // Vt2bAkVEL1/02q7UgjJu/KSVE+Traeepoiy+yCsQDmWO
// SIG // mdv1ovoSJgllOJTxeh9Ku9HhVujQeJYYXMk1Fl/dkx1J
// SIG // ji2+rTREHO4QFRoAXd01WyHOmMcJ7oUOjE9tDhNOPXwp
// SIG // SJxy0fNsysHscKNXkld9lI2gG0gDWvfPo2cKdKU27S0v
// SIG // F8jmcjcS9G+xPGeC+VKyjTMWZR4Oit0Q3mT0b85G1NMX
// SIG // 6XnEBLTT+yzfH4qerAr7EydAreT54al/RrsHYEdlYEBO
// SIG // sELsTu2zdnnYCjQJbRyAMR/iDlTd5aH75UcQrWSY/1AW
// SIG // Lny/BSF64pVBJ2nDk4+VyY3YmyGuDVyc8KKuhmiDDGot
// SIG // u3ZrAB2WrfIWe/YWgyS5iM9qqEcxL5rc43E91wB+YkfR
// SIG // zojJuBj6DnKNwaM9rwJAav9pm5biEKgQtDdQCNbDPTCC
// SIG // BgcwggPvoAMCAQICCmEWaDQAAAAAABwwDQYJKoZIhvcN
// SIG // AQEFBQAwXzETMBEGCgmSJomT8ixkARkWA2NvbTEZMBcG
// SIG // CgmSJomT8ixkARkWCW1pY3Jvc29mdDEtMCsGA1UEAxMk
// SIG // TWljcm9zb2Z0IFJvb3QgQ2VydGlmaWNhdGUgQXV0aG9y
// SIG // aXR5MB4XDTA3MDQwMzEyNTMwOVoXDTIxMDQwMzEzMDMw
// SIG // OVowdzELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hp
// SIG // bmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoT
// SIG // FU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEhMB8GA1UEAxMY
// SIG // TWljcm9zb2Z0IFRpbWUtU3RhbXAgUENBMIIBIjANBgkq
// SIG // hkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAn6Fssd/bSJIq
// SIG // fGsuGeG94uPFmVEjUK3O3RhOJA/u0afRTK10MCAR6wfV
// SIG // VJUVSZQbQpKumFwwJtoAa+h7veyJBw/3DgSY8InMH8sz
// SIG // JIed8vRnHCz8e+eIHernTqOhwSNTyo36Rc8J0F6v0LBC
// SIG // BKL5pmyTZ9co3EZTsIbQ5ShGLieshk9VUgzkAyz7apCQ
// SIG // MG6H81kwnfp+1pez6CGXfvjSE/MIt1NtUrRFkJ9IAEpH
// SIG // ZhEnKWaol+TTBoFKovmEpxFHFAmCn4TtVXj+AZodUAiF
// SIG // ABAwRu233iNGu8QtVJ+vHnhBMXfMm987g5OhYQK1HQ2x
// SIG // /PebsgHOIktU//kFw8IgCwIDAQABo4IBqzCCAacwDwYD
// SIG // VR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUIzT42VJGcArt
// SIG // QPt2+7MrsMM1sw8wCwYDVR0PBAQDAgGGMBAGCSsGAQQB
// SIG // gjcVAQQDAgEAMIGYBgNVHSMEgZAwgY2AFA6sgmBAVieX
// SIG // 5SUT/CrhClOVWeSkoWOkYTBfMRMwEQYKCZImiZPyLGQB
// SIG // GRYDY29tMRkwFwYKCZImiZPyLGQBGRYJbWljcm9zb2Z0
// SIG // MS0wKwYDVQQDEyRNaWNyb3NvZnQgUm9vdCBDZXJ0aWZp
// SIG // Y2F0ZSBBdXRob3JpdHmCEHmtFqFKoKWtTHNY9AcTLmUw
// SIG // UAYDVR0fBEkwRzBFoEOgQYY/aHR0cDovL2NybC5taWNy
// SIG // b3NvZnQuY29tL3BraS9jcmwvcHJvZHVjdHMvbWljcm9z
// SIG // b2Z0cm9vdGNlcnQuY3JsMFQGCCsGAQUFBwEBBEgwRjBE
// SIG // BggrBgEFBQcwAoY4aHR0cDovL3d3dy5taWNyb3NvZnQu
// SIG // Y29tL3BraS9jZXJ0cy9NaWNyb3NvZnRSb290Q2VydC5j
// SIG // cnQwEwYDVR0lBAwwCgYIKwYBBQUHAwgwDQYJKoZIhvcN
// SIG // AQEFBQADggIBABCXisNcA0Q23em0rXfbznlRTQGxLnRx
// SIG // W20ME6vOvnuPuC7UEqKMbWK4VwLLTiATUJndekDiV7uv
// SIG // WJoc4R0Bhqy7ePKL0Ow7Ae7ivo8KBciNSOLwUxXdT6uS
// SIG // 5OeNatWAweaU8gYvhQPpkSokInD79vzkeJkuDfcH4nC8
// SIG // GE6djmsKcpW4oTmcZy3FUQ7qYlw/FpiLID/iBxoy+cwx
// SIG // SnYxPStyC8jqcD3/hQoT38IKYY7w17gX606Lf8U1K16j
// SIG // v+u8fQtCe9RTciHuMMq7eGVcWwEXChQO0toUmPU8uWZY
// SIG // sy0v5/mFhsxRVuidcJRsrDlM1PZ5v6oYemIp76KbKTQG
// SIG // dxpiyT0ebR+C8AvHLLvPQ7Pl+ex9teOkqHQ1uE7FcSMS
// SIG // JnYLPFKMcVpGQxS8s7OwTWfIn0L/gHkhgJ4VMGboQhJe
// SIG // GsieIiHQQ+kr6bv0SMws1NgygEwmKkgkX1rqVu+m3pmd
// SIG // yjpvvYEndAYR7nYhv5uCwSdUtrFqPYmhdmG0bqETpr+q
// SIG // R/ASb/2KMmyy/t9RyIwjyWa9nR2HEmQCPS2vWY+45CHl
// SIG // tbDKY7R4VAXUQS5QrJSwpXirs6CWdRrZkocTdSIvMqgI
// SIG // bqBbjCW/oO+EyiHW6x5PyZruSeD3AWVviQt9yGnI5m7q
// SIG // p5fOMSn/DsVbXNhNG6HY+i+ePy5VFmvJE6P9MYIEpTCC
// SIG // BKECAQEwgZAweTELMAkGA1UEBhMCVVMxEzARBgNVBAgT
// SIG // Cldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAc
// SIG // BgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEjMCEG
// SIG // A1UEAxMaTWljcm9zb2Z0IENvZGUgU2lnbmluZyBQQ0EC
// SIG // EzMAAACdHo0nrrjz2DgAAQAAAJ0wCQYFKw4DAhoFAKCB
// SIG // vjAZBgkqhkiG9w0BCQMxDAYKKwYBBAGCNwIBBDAcBgor
// SIG // BgEEAYI3AgELMQ4wDAYKKwYBBAGCNwIBFTAjBgkqhkiG
// SIG // 9w0BCQQxFgQUhvYe27PDYcMwwjHy85ul/ZIi0IMwXgYK
// SIG // KwYBBAGCNwIBDDFQME6gJoAkAE0AaQBjAHIAbwBzAG8A
// SIG // ZgB0ACAATABlAGEAcgBuAGkAbgBnoSSAImh0dHA6Ly93
// SIG // d3cubWljcm9zb2Z0LmNvbS9sZWFybmluZyAwDQYJKoZI
// SIG // hvcNAQEBBQAEggEAnsllLcpVHi3IAQbolhVlGru/11ZS
// SIG // iwjM46lJgx2/irQxxqDLsfrs/tf4ZjH1Ad/CCQ+6Ytfy
// SIG // EQlBp/+FIs50/4CGifdDyzXC76RqaqBh2WaOzBmE/r55
// SIG // MJv/BVBfIt9cKtvYVs9OOzeiM9R+RP7dVRi1eV4mZa5L
// SIG // LY0IE7o8AG0uVkft5jY4vUySiH74mr5/vwk3HQ6MGhJ5
// SIG // 0wN+EiCQz2LvYamIzPQClaCy1o/+At7tr5Sqbw50V05K
// SIG // 1CFU/q76KMaYIJ2xQ5rzl/FAmwvrOJh7mAEDepbsts2t
// SIG // KtWCQoF4+ujdtToEORMcCRJ7SQo94kWTioDU2yiKHxQb
// SIG // xwugSKGCAigwggIkBgkqhkiG9w0BCQYxggIVMIICEQIB
// SIG // ATCBjjB3MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2Fz
// SIG // aGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UE
// SIG // ChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSEwHwYDVQQD
// SIG // ExhNaWNyb3NvZnQgVGltZS1TdGFtcCBQQ0ECEzMAAAAr
// SIG // OTJIwbLJSPMAAAAAACswCQYFKw4DAhoFAKBdMBgGCSqG
// SIG // SIb3DQEJAzELBgkqhkiG9w0BBwEwHAYJKoZIhvcNAQkF
// SIG // MQ8XDTEyMTExNTAwMDgwNVowIwYJKoZIhvcNAQkEMRYE
// SIG // FNwUAnwCIa3zlW5+S0rme+pJVpKHMA0GCSqGSIb3DQEB
// SIG // BQUABIIBAIoqrrPNooj8EwXfd6R7abzclAu3mzoG3WWD
// SIG // Wa6mE3H+RaKyS7JilZKB82sE73hdoGLCobih2u6QoxAW
// SIG // Y6IWZcaXxxStVdwIX97/hpN9SpbikgZSB70fvQNi+VRG
// SIG // nhzKkDI4vMGNq367UCAg/bKNlpTlN+1V2Ji+AdOCgfPV
// SIG // ntoFhTeucufVVHN6XpYfOgufQwrDnXEtsrM+ve++gucn
// SIG // QFo0YvIGJ/PnPNyEdbNiIUjhy40V0h7ClcxVX8y4qazs
// SIG // +/UmdZX6BnecDOghtA0XoZ00zqaDmN4B3WA+d4N8olMc
// SIG // aJk7/oNm+wYEFO78LP/QL5/5ZDuHPRyZGkGrFL1clYY=
// SIG // End signature block

// SIG // Begin signature block
// SIG // MIIdkAYJKoZIhvcNAQcCoIIdgTCCHX0CAQExCzAJBgUr
// SIG // DgMCGgUAMGcGCisGAQQBgjcCAQSgWTBXMDIGCisGAQQB
// SIG // gjcCAR4wJAIBAQQQEODJBs441BGiowAQS9NQkAIBAAIB
// SIG // AAIBAAIBAAIBADAhMAkGBSsOAwIaBQAEFMCO4Dc/lrch
// SIG // Pz6xFZanIURzKpIpoIIYbjCCBN4wggPGoAMCAQICEzMA
// SIG // AAD7G2GN1F+WNgEAAAAAAPswDQYJKoZIhvcNAQEFBQAw
// SIG // dzELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0
// SIG // b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1p
// SIG // Y3Jvc29mdCBDb3Jwb3JhdGlvbjEhMB8GA1UEAxMYTWlj
// SIG // cm9zb2Z0IFRpbWUtU3RhbXAgUENBMB4XDTE4MDgyMzIw
// SIG // MjAwOVoXDTE5MTEyMzIwMjAwOVowgc4xCzAJBgNVBAYT
// SIG // AlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQH
// SIG // EwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29y
// SIG // cG9yYXRpb24xKTAnBgNVBAsTIE1pY3Jvc29mdCBPcGVy
// SIG // YXRpb25zIFB1ZXJ0byBSaWNvMSYwJAYDVQQLEx1UaGFs
// SIG // ZXMgVFNTIEVTTjpCMUI3LUY2N0YtRkVDMjElMCMGA1UE
// SIG // AxMcTWljcm9zb2Z0IFRpbWUtU3RhbXAgU2VydmljZTCC
// SIG // ASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALB1
// SIG // wod1BNTabhn9R0EL0EX6slJ9/jyXDqju8izYk0mysCdv
// SIG // bzWDBfg+kkXNGCh4906VY5MU6IazTU5kAFXnuXbIsX0R
// SIG // R9vAgpuxVrj0JjZQwfeiXv4XSeBsxskTLo0mh9EqeABv
// SIG // LYaw9EhaAJ2pAObyeyKXEqTeQVnaT2lgdvx5oJtjjQKH
// SIG // c4yF2U4t1uIMfs5ZDXqyWVyWdKWXDnuCpD1dJbjqQ+dQ
// SIG // /OMKU/igONxdpS/s8QtBmtf8TGFO1gX0+zDOkCZzpM6a
// SIG // mjmgOCCzk94HtKqZnjeg9LdV8VBUb1dyLAxabmGfYSCT
// SIG // kFN5/eKUyo6UzIx1FjmZYmZk9bO4ZXMCAwEAAaOCAQkw
// SIG // ggEFMB0GA1UdDgQWBBSXsUlIljK7csTs5uqSF646s071
// SIG // lTAfBgNVHSMEGDAWgBQjNPjZUkZwCu1A+3b7syuwwzWz
// SIG // DzBUBgNVHR8ETTBLMEmgR6BFhkNodHRwOi8vY3JsLm1p
// SIG // Y3Jvc29mdC5jb20vcGtpL2NybC9wcm9kdWN0cy9NaWNy
// SIG // b3NvZnRUaW1lU3RhbXBQQ0EuY3JsMFgGCCsGAQUFBwEB
// SIG // BEwwSjBIBggrBgEFBQcwAoY8aHR0cDovL3d3dy5taWNy
// SIG // b3NvZnQuY29tL3BraS9jZXJ0cy9NaWNyb3NvZnRUaW1l
// SIG // U3RhbXBQQ0EuY3J0MBMGA1UdJQQMMAoGCCsGAQUFBwMI
// SIG // MA0GCSqGSIb3DQEBBQUAA4IBAQBDAR989eQGHbkCc1NY
// SIG // YXcQj7CopptwOhroJxWVXX+iA+My1q9ZL/3oiyFsY9+4
// SIG // QLAIwylzQ+R3DjuAizceRYtfcp0vKq7Y7BaxyDgvvI/R
// SIG // 9DPw7sk9LM+JxWu/DdAUEKPOjDESFcbGxBMVxEn9MUqA
// SIG // ZpIAZ9AE3wHiFlOH3IQu2nDXVQza/ofxIijkob1yzWNO
// SIG // c+B7qJsO1vbp3gmeXNj8YKUz50oA7r2Lpe0nDW6JaoN8
// SIG // EcUCRTYa8OshI3QKnXoloWg8J8CUKdpTdAuwHTpS99I8
// SIG // I6kOF/616/f+vXcPVx2PYYoekKBgRjmI13x2K7Ol/SKw
// SIG // qOAWKN/RwwU2cOeDMIIF/zCCA+egAwIBAgITMwAAAQNe
// SIG // JRyZH6MeuAAAAAABAzANBgkqhkiG9w0BAQsFADB+MQsw
// SIG // CQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQ
// SIG // MA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9z
// SIG // b2Z0IENvcnBvcmF0aW9uMSgwJgYDVQQDEx9NaWNyb3Nv
// SIG // ZnQgQ29kZSBTaWduaW5nIFBDQSAyMDExMB4XDTE4MDcx
// SIG // MjIwMDg0OFoXDTE5MDcyNjIwMDg0OFowdDELMAkGA1UE
// SIG // BhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNV
// SIG // BAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBD
// SIG // b3Jwb3JhdGlvbjEeMBwGA1UEAxMVTWljcm9zb2Z0IENv
// SIG // cnBvcmF0aW9uMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8A
// SIG // MIIBCgKCAQEA0ZR2NuaGqzb+aflGfIuIUMuQcH+wVakk
// SIG // HX455wWfD6x7l7LOcwr71JskXBa1Od0bfjNsEfw7JvOY
// SIG // ql1Ta6rD7BO40u/PV3/MZcuvTS4ysVYrTjQHif5pIb0+
// SIG // RPveEp2Fv3x2hn1ysXabYeaKZExGzrbVOox3k3dnIZy2
// SIG // WgZeR4b1PNEJyg09zbLpoVB40YSI4gE8IvyvlgjMXZnA
// SIG // 7eulWpiS9chATmpzr97jdHrTX0aXvOJnKHeZrMEOMRaP
// SIG // AA8B/kteVA/KxGU/CuOjRtv2LAM6Gb5oBRac5n80v6eH
// SIG // jWU5Jslj1O/F3b0l/v0o9DSGeawq1V8wkTvkFGrrscoE
// SIG // IwIDAQABo4IBfjCCAXowHwYDVR0lBBgwFgYKKwYBBAGC
// SIG // N0wIAQYIKwYBBQUHAwMwHQYDVR0OBBYEFEe+wMvhpj/9
// SIG // ZdY48gNdt69390D/MFAGA1UdEQRJMEekRTBDMSkwJwYD
// SIG // VQQLEyBNaWNyb3NvZnQgT3BlcmF0aW9ucyBQdWVydG8g
// SIG // UmljbzEWMBQGA1UEBRMNMjMwMDEyKzQzNzk2NTAfBgNV
// SIG // HSMEGDAWgBRIbmTlUAXTgqoXNzcitW2oynUClTBUBgNV
// SIG // HR8ETTBLMEmgR6BFhkNodHRwOi8vd3d3Lm1pY3Jvc29m
// SIG // dC5jb20vcGtpb3BzL2NybC9NaWNDb2RTaWdQQ0EyMDEx
// SIG // XzIwMTEtMDctMDguY3JsMGEGCCsGAQUFBwEBBFUwUzBR
// SIG // BggrBgEFBQcwAoZFaHR0cDovL3d3dy5taWNyb3NvZnQu
// SIG // Y29tL3BraW9wcy9jZXJ0cy9NaWNDb2RTaWdQQ0EyMDEx
// SIG // XzIwMTEtMDctMDguY3J0MAwGA1UdEwEB/wQCMAAwDQYJ
// SIG // KoZIhvcNAQELBQADggIBAJ/1yVMNPw0m7KJE2A3Rn2OW
// SIG // Bks/HlzFM6Okw2yvH8ABuutl7J4zEA+nrFvUvZBhF+cx
// SIG // 58MmtKz1J9NIk4aI/hI1kWQi0WstO6gsFZQp0jeW5jX/
// SIG // DM7IBhYWniSx4jn5bg542AwbtilgJ3Y0JJvduZd1ywE7
// SIG // rYISFiKAiRWEu5hQILAXJoZJr859RRVDNJbPgVwYLNST
// SIG // 8mer4nPIPaPN/DIeYBzpsBsw+yy7By6WhJNFKFRczZb9
// SIG // oNuB2LYwykOx80jAskYcXV52Klif1O7y9PpITLVhi7CM
// SIG // QemquJ2Q9P9qQg+5PukO7JT8jYC7eOMjp3hbsm0f+VnB
// SIG // fbbROcl54IMcYAraPbDR7Ta/RQfpGzZu5T07BQOn1Kcl
// SIG // Eo/mdqMTs0VaQzGC2tiErrmwH3X19h19URE3J+i1NYRx
// SIG // 91eqrvqJccmY0p5aZHa+jMN9FWqR8RT08tk1Mbjbcvq0
// SIG // dciIm2q/mEXHZrLX/86SkHXk6+aG0sgb2yfAW5VvSW9Y
// SIG // XWkq3lNL+OjKe/ZsFfkDGQ8RhapPmr+qV91gxvVxIPRR
// SIG // qJrK6dHrNEc9dfoi7FU/ahk5axDpWj+O9CN4MLLypjjL
// SIG // NY2qmFkkQLg6Z6QHX6D+2DtJE/sM4e0LbYNQzvB/PuDZ
// SIG // COiMIUpBwt7rjlvuA8Mdbm7mVDVmZ3J8GupS9iLEcj+u
// SIG // MIIGBzCCA++gAwIBAgIKYRZoNAAAAAAAHDANBgkqhkiG
// SIG // 9w0BAQUFADBfMRMwEQYKCZImiZPyLGQBGRYDY29tMRkw
// SIG // FwYKCZImiZPyLGQBGRYJbWljcm9zb2Z0MS0wKwYDVQQD
// SIG // EyRNaWNyb3NvZnQgUm9vdCBDZXJ0aWZpY2F0ZSBBdXRo
// SIG // b3JpdHkwHhcNMDcwNDAzMTI1MzA5WhcNMjEwNDAzMTMw
// SIG // MzA5WjB3MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2Fz
// SIG // aGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UE
// SIG // ChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSEwHwYDVQQD
// SIG // ExhNaWNyb3NvZnQgVGltZS1TdGFtcCBQQ0EwggEiMA0G
// SIG // CSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCfoWyx39tI
// SIG // kip8ay4Z4b3i48WZUSNQrc7dGE4kD+7Rp9FMrXQwIBHr
// SIG // B9VUlRVJlBtCkq6YXDAm2gBr6Hu97IkHD/cOBJjwicwf
// SIG // yzMkh53y9GccLPx754gd6udOo6HBI1PKjfpFzwnQXq/Q
// SIG // sEIEovmmbJNn1yjcRlOwhtDlKEYuJ6yGT1VSDOQDLPtq
// SIG // kJAwbofzWTCd+n7Wl7PoIZd++NIT8wi3U21StEWQn0gA
// SIG // SkdmEScpZqiX5NMGgUqi+YSnEUcUCYKfhO1VeP4Bmh1Q
// SIG // CIUAEDBG7bfeI0a7xC1Un68eeEExd8yb3zuDk6FhArUd
// SIG // DbH895uyAc4iS1T/+QXDwiALAgMBAAGjggGrMIIBpzAP
// SIG // BgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBQjNPjZUkZw
// SIG // Cu1A+3b7syuwwzWzDzALBgNVHQ8EBAMCAYYwEAYJKwYB
// SIG // BAGCNxUBBAMCAQAwgZgGA1UdIwSBkDCBjYAUDqyCYEBW
// SIG // J5flJRP8KuEKU5VZ5KShY6RhMF8xEzARBgoJkiaJk/Is
// SIG // ZAEZFgNjb20xGTAXBgoJkiaJk/IsZAEZFgltaWNyb3Nv
// SIG // ZnQxLTArBgNVBAMTJE1pY3Jvc29mdCBSb290IENlcnRp
// SIG // ZmljYXRlIEF1dGhvcml0eYIQea0WoUqgpa1Mc1j0BxMu
// SIG // ZTBQBgNVHR8ESTBHMEWgQ6BBhj9odHRwOi8vY3JsLm1p
// SIG // Y3Jvc29mdC5jb20vcGtpL2NybC9wcm9kdWN0cy9taWNy
// SIG // b3NvZnRyb290Y2VydC5jcmwwVAYIKwYBBQUHAQEESDBG
// SIG // MEQGCCsGAQUFBzAChjhodHRwOi8vd3d3Lm1pY3Jvc29m
// SIG // dC5jb20vcGtpL2NlcnRzL01pY3Jvc29mdFJvb3RDZXJ0
// SIG // LmNydDATBgNVHSUEDDAKBggrBgEFBQcDCDANBgkqhkiG
// SIG // 9w0BAQUFAAOCAgEAEJeKw1wDRDbd6bStd9vOeVFNAbEu
// SIG // dHFbbQwTq86+e4+4LtQSooxtYrhXAstOIBNQmd16QOJX
// SIG // u69YmhzhHQGGrLt48ovQ7DsB7uK+jwoFyI1I4vBTFd1P
// SIG // q5Lk541q1YDB5pTyBi+FA+mRKiQicPv2/OR4mS4N9wfi
// SIG // cLwYTp2OawpylbihOZxnLcVRDupiXD8WmIsgP+IHGjL5
// SIG // zDFKdjE9K3ILyOpwPf+FChPfwgphjvDXuBfrTot/xTUr
// SIG // XqO/67x9C0J71FNyIe4wyrt4ZVxbARcKFA7S2hSY9Ty5
// SIG // ZlizLS/n+YWGzFFW6J1wlGysOUzU9nm/qhh6Yinvopsp
// SIG // NAZ3GmLJPR5tH4LwC8csu89Ds+X57H2146SodDW4TsVx
// SIG // IxImdgs8UoxxWkZDFLyzs7BNZ8ifQv+AeSGAnhUwZuhC
// SIG // El4ayJ4iIdBD6Svpu/RIzCzU2DKATCYqSCRfWupW76be
// SIG // mZ3KOm+9gSd0BhHudiG/m4LBJ1S2sWo9iaF2YbRuoROm
// SIG // v6pH8BJv/YoybLL+31HIjCPJZr2dHYcSZAI9La9Zj7jk
// SIG // IeW1sMpjtHhUBdRBLlCslLCleKuzoJZ1GtmShxN1Ii8y
// SIG // qAhuoFuMJb+g74TKIdbrHk/Jmu5J4PcBZW+JC33Iacjm
// SIG // buqnl84xKf8OxVtc2E0bodj6L54/LlUWa8kTo/0wggd6
// SIG // MIIFYqADAgECAgphDpDSAAAAAAADMA0GCSqGSIb3DQEB
// SIG // CwUAMIGIMQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2Fz
// SIG // aGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UE
// SIG // ChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMTIwMAYDVQQD
// SIG // EylNaWNyb3NvZnQgUm9vdCBDZXJ0aWZpY2F0ZSBBdXRo
// SIG // b3JpdHkgMjAxMTAeFw0xMTA3MDgyMDU5MDlaFw0yNjA3
// SIG // MDgyMTA5MDlaMH4xCzAJBgNVBAYTAlVTMRMwEQYDVQQI
// SIG // EwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4w
// SIG // HAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xKDAm
// SIG // BgNVBAMTH01pY3Jvc29mdCBDb2RlIFNpZ25pbmcgUENB
// SIG // IDIwMTEwggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIK
// SIG // AoICAQCr8PpyEBwurdhuqoIQTTS68rZYIZ9CGypr6VpQ
// SIG // qrgGOBoESbp/wwwe3TdrxhLYC/A4wpkGsMg51QEUMULT
// SIG // iQ15ZId+lGAkbK+eSZzpaF7S35tTsgosw6/ZqSuuegmv
// SIG // 15ZZymAaBelmdugyUiYSL+erCFDPs0S3XdjELgN1q2jz
// SIG // y23zOlyhFvRGuuA4ZKxuZDV4pqBjDy3TQJP4494HDdVc
// SIG // eaVJKecNvqATd76UPe/74ytaEB9NViiienLgEjq3SV7Y
// SIG // 7e1DkYPZe7J7hhvZPrGMXeiJT4Qa8qEvWeSQOy2uM1jF
// SIG // tz7+MtOzAz2xsq+SOH7SnYAs9U5WkSE1JcM5bmR/U7qc
// SIG // D60ZI4TL9LoDho33X/DQUr+MlIe8wCF0JV8YKLbMJyg4
// SIG // JZg5SjbPfLGSrhwjp6lm7GEfauEoSZ1fiOIlXdMhSz5S
// SIG // xLVXPyQD8NF6Wy/VI+NwXQ9RRnez+ADhvKwCgl/bwBWz
// SIG // vRvUVUvnOaEP6SNJvBi4RHxF5MHDcnrgcuck379GmcXv
// SIG // whxX24ON7E1JMKerjt/sW5+v/N2wZuLBl4F77dbtS+dJ
// SIG // KacTKKanfWeA5opieF+yL4TXV5xcv3coKPHtbcMojyyP
// SIG // QDdPweGFRInECUzF1KVDL3SV9274eCBYLBNdYJWaPk8z
// SIG // hNqwiBfenk70lrC8RqBsmNLg1oiMCwIDAQABo4IB7TCC
// SIG // AekwEAYJKwYBBAGCNxUBBAMCAQAwHQYDVR0OBBYEFEhu
// SIG // ZOVQBdOCqhc3NyK1bajKdQKVMBkGCSsGAQQBgjcUAgQM
// SIG // HgoAUwB1AGIAQwBBMAsGA1UdDwQEAwIBhjAPBgNVHRMB
// SIG // Af8EBTADAQH/MB8GA1UdIwQYMBaAFHItOgIxkEO5FAVO
// SIG // 4eqnxzHRI4k0MFoGA1UdHwRTMFEwT6BNoEuGSWh0dHA6
// SIG // Ly9jcmwubWljcm9zb2Z0LmNvbS9wa2kvY3JsL3Byb2R1
// SIG // Y3RzL01pY1Jvb0NlckF1dDIwMTFfMjAxMV8wM18yMi5j
// SIG // cmwwXgYIKwYBBQUHAQEEUjBQME4GCCsGAQUFBzAChkJo
// SIG // dHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20vcGtpL2NlcnRz
// SIG // L01pY1Jvb0NlckF1dDIwMTFfMjAxMV8wM18yMi5jcnQw
// SIG // gZ8GA1UdIASBlzCBlDCBkQYJKwYBBAGCNy4DMIGDMD8G
// SIG // CCsGAQUFBwIBFjNodHRwOi8vd3d3Lm1pY3Jvc29mdC5j
// SIG // b20vcGtpb3BzL2RvY3MvcHJpbWFyeWNwcy5odG0wQAYI
// SIG // KwYBBQUHAgIwNB4yIB0ATABlAGcAYQBsAF8AcABvAGwA
// SIG // aQBjAHkAXwBzAHQAYQB0AGUAbQBlAG4AdAAuIB0wDQYJ
// SIG // KoZIhvcNAQELBQADggIBAGfyhqWY4FR5Gi7T2HRnIpsL
// SIG // lhHhY5KZQpZ90nkMkMFlXy4sPvjDctFtg/6+P+gKyju/
// SIG // R6mj82nbY78iNaWXXWWEkH2LRlBV2AySfNIaSxzzPEKL
// SIG // UtCw/WvjPgcuKZvmPRul1LUdd5Q54ulkyUQ9eHoj8xN9
// SIG // ppB0g430yyYCRirCihC7pKkFDJvtaPpoLpWgKj8qa1hJ
// SIG // Yx8JaW5amJbkg/TAj/NGK978O9C9Ne9uJa7lryft0N3z
// SIG // Dq+ZKJeYTQ49C/IIidYfwzIY4vDFLc5bnrRJOQrGCsLG
// SIG // ra7lstnbFYhRRVg4MnEnGn+x9Cf43iw6IGmYslmJaG5v
// SIG // p7d0w0AFBqYBKig+gj8TTWYLwLNN9eGPfxxvFX1Fp3bl
// SIG // QCplo8NdUmKGwx1jNpeG39rz+PIWoZon4c2ll9DuXWNB
// SIG // 41sHnIc+BncG0QaxdR8UvmFhtfDcxhsEvt9Bxw4o7t5l
// SIG // L+yX9qFcltgA1qFGvVnzl6UJS0gQmYAf0AApxbGbpT9F
// SIG // dx41xtKiop96eiL6SJUfq/tHI4D1nvi/a7dLl+LrdXga
// SIG // 7Oo3mXkYS//WsyNodeav+vyL6wuA6mk7r/ww7QRMjt/f
// SIG // dW1jkT3RnVZOT7+AVyKheBEyIXrvQQqxP/uozKRdwaGI
// SIG // m1dxVk5IRcBCyZt2WwqASGv9eZ/BvW1taslScxMNelDN
// SIG // MYIEjjCCBIoCAQEwgZUwfjELMAkGA1UEBhMCVVMxEzAR
// SIG // BgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1v
// SIG // bmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlv
// SIG // bjEoMCYGA1UEAxMfTWljcm9zb2Z0IENvZGUgU2lnbmlu
// SIG // ZyBQQ0EgMjAxMQITMwAAAQNeJRyZH6MeuAAAAAABAzAJ
// SIG // BgUrDgMCGgUAoIGiMBkGCSqGSIb3DQEJAzEMBgorBgEE
// SIG // AYI3AgEEMBwGCisGAQQBgjcCAQsxDjAMBgorBgEEAYI3
// SIG // AgEVMCMGCSqGSIb3DQEJBDEWBBS6YfD3nGmezPBRiLbg
// SIG // yOY/qBImGDBCBgorBgEEAYI3AgEMMTQwMqAUgBIATQBp
// SIG // AGMAcgBvAHMAbwBmAHShGoAYaHR0cDovL3d3dy5taWNy
// SIG // b3NvZnQuY29tMA0GCSqGSIb3DQEBAQUABIIBAI4OvDuG
// SIG // TOnLmHhzJCj+wDWnbHRcTBiFB0AjDx8eAjJWI70fTC2m
// SIG // tQ6vKeliE9ZlD3Z6mVeQ6jOLvgc41GLqwQ9GcCB6pSrt
// SIG // xcolnNRdaIrkjYkC9DlpMp1lAgSPH3W0FZV9TqCsQlc2
// SIG // v3kg0ywwkQkTvCvQkjnW4Tb8++zak92o8BvwmOgpudJR
// SIG // AaLv2YSKVUKwFZyYFTi+drdxSEK8QPIXxM0OEozS6goV
// SIG // RQgVz+yWQ1X18Yv7NMIGhFnbM7XApCH5fCBiHjeAtQw/
// SIG // KokYQ2Q5GwjH/XOGHkDQlb5phXOH4BGvHVWA7d6YbdO+
// SIG // 90PBOGiqXILpgz7t3hrWGWN2Nv+hggIoMIICJAYJKoZI
// SIG // hvcNAQkGMYICFTCCAhECAQEwgY4wdzELMAkGA1UEBhMC
// SIG // VVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcT
// SIG // B1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jw
// SIG // b3JhdGlvbjEhMB8GA1UEAxMYTWljcm9zb2Z0IFRpbWUt
// SIG // U3RhbXAgUENBAhMzAAAA+xthjdRfljYBAAAAAAD7MAkG
// SIG // BSsOAwIaBQCgXTAYBgkqhkiG9w0BCQMxCwYJKoZIhvcN
// SIG // AQcBMBwGCSqGSIb3DQEJBTEPFw0xODEwMTYwMzA4NDRa
// SIG // MCMGCSqGSIb3DQEJBDEWBBTlHAHYcO8i29K6YkhZOlRU
// SIG // ZSQoDzANBgkqhkiG9w0BAQUFAASCAQBFp/j1JGumAuQ3
// SIG // +WuuN2tV+vdk//YaiRJ7wFLxfAf7x4lfDsAZk/0TFpFw
// SIG // FDDYXWIJXJIzez3kmMirifmYaeRwYhmF5KaZO8LD0Lg1
// SIG // oRPU8xSAnJ/9ZEbiYLSSUF799Gk8X/U8nRB11R57WNE7
// SIG // /BmNHvD6O533t2MmC0PFFA89OrcPakMcHhjKtfXAWWG+
// SIG // rom6PA5NqJ7ZxP8BN9Jfnq8L2miPSyRge+IrnHKyZ73f
// SIG // 64hTr0O9EjD6s7TGal1+QGsXGd3f/MC2f6iuJvMPCAQt
// SIG // gHsmH0loUDyqBwKp8MTkntbWtXW9dNHMRNi6qaNbtit0
// SIG // KGnPvEhGDeH96LLN59EM
// SIG // End signature block

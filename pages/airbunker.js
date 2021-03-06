import Link from 'next/link'
import {MdChat} from "react-icons/md";
import Layout from '../components/ar/layout'

export default function header() {
    return (
        <Layout>
            <div class="language rtl">
                <Link href="/en/airbunker">
                    <a>
                        <MdChat/>
                        English
                    </a>
                </Link>
            </div>
            <section class="airbunkerBanner rtl">
                <div class="background-overlay-red"></div>
                <div class="container">
                    <div class="airbunkerLogo">
                        <img src="/img/airbunker-logo.png" class="nortlimg"/>
                    </div>
                    <div class="airbunkerBannerContent">
                        <div class="row">

                            <div class="col-md-6"></div>

                            <div class="col-md-6">
                                <h2 class="whiteTitle">كرة الطلاء
                                    <br/>
                                    ليزر تاغ
                                    <br/>
                                    ألعاب الرماية
                                    <br/>مسدسات نيرف
                                    <br/>
                                    سباق الطائرات الآلية
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="airbunkerTableIntro rtl">
                <div class="background-overlay"
                    style={
                        {opacity: '0.25'}
                }></div>
                <div class="container">
                    <div class="airbunkerLogo">
                        <img src="/img/airbunker-logo.png" class="nortlimg"/>
                    </div>

                    <div class="airbunkerBannerContent">
                        <div class="row">


                            <div class="col-md-6"></div>
                            <div class="col-md-6">
                                <h2 class="whiteTitle">
                                    <span>مجموعة المخابئ</span><br/>
                                    لحقل إن-إكس-إل 2021</h2>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* page 7 */}
            <section class="airbunkerTableIntro airbunkerPspSec rtl">
                <div class="background-overlay"
                    style={
                        {opacity: '0.25'}
                }></div>
                <div class="container">
                    <div class="airbunkerLogo">
                        <img src="/img/airbunker-logo.png" class="nortlimg"/>
                    </div>

                    <div class="airbunkerBannerContent">
                        <div class="row">
                            <div class="col-md-6"></div>
                            <div class="col-md-6">
                                <h2 class="whiteTitle">
                                    <span>مجموعة المخابئ</span><br/>
                                    لحقول بي-إس-بي أو إن-إكس-إل (PSP / NXL)</h2>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* <section>
                <div class="container">
                    <table class="table airtable">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Bunker</th>
                                <th scope="col">Pcs</th>
                                <th scope="col">Price for one, $</th>
                                <th scope="col">Total price, $</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Cylinder</td>
                                <td>4</td>
                                <td>144</td>
                                <td>576</td>
                            </tr>
                            <tr>
                                <td>Tree</td>
                                <td>4</td>
                                <td>107</td>
                                <td>428</td>
                            </tr>
                            <tr>
                                <td>Tall Cakе</td>
                                <td>4</td>
                                <td>105</td>
                                <td>420</td>
                            </tr>
                            <tr>
                                <td scope="row">Cakе</td>
                                <td>4</td>
                                <td>89</td>
                                <td>356</td>
                            </tr>
                            <tr>
                                <td scope="row">Dorito medium</td>
                                <td>6</td>
                                <td>145</td>
                                <td>870</td>
                            </tr>
                            <tr>
                                <td scope="row">Dorito Small</td>
                                <td>2</td>
                                <td>125</td>
                                <td>250</td>
                            </tr>
                            <tr>
                                <td scope="row">Snake Beam</td>
                                <td>6</td>
                                <td>109</td>
                                <td>654</td>
                            </tr>
                            <tr>
                                <td>Temple</td>
                                <td>4</td>
                                <td>140</td>
                                <td>560</td>
                            </tr>
                            <tr>
                                <td>Temple maya</td>
                                <td>4</td>
                                <td>158</td>
                                <td>632</td>
                            </tr>
                            <tr>
                                <td scope="row">Mini Win
                                </td>
                                <td>4</td>
                                <td>190</td>
                                <td>760</td>
                            </tr>
                            <tr>
                                <td scope="row">Giant Wing</td>
                                <td>4</td>
                                <td>239</td>
                                <td>956</td>
                            </tr>
                            <tr>
                                <td scope="row">Giant Brick</td>
                                <td>2</td>
                                <td>301</td>
                                <td>602</td>
                            </tr>


                            <tr class="tfoot">
                                <td>Total</td>
                                <td>48</td>
                                <td></td>
                                <td>7064</td>
                            </tr>
                            <tr class="tPostFooter">
                                <td></td>
                                <td></td>
                                <td>PRO series*</td>
                                <td>8477</td>
                            </tr>
                            <tr class="tPostFooter">
                                <td scope="row"></td>
                                <td></td>
                                <td>With loads</td>
                                <td>8192</td>
                            </tr>

                        </tbody>
                    </table>


                </div>
            </section> */}

            {/* section 9 */}
            <section class="airbunkerTableIntro airbunkerTrainSec rtl">
                <div class="background-overlay"
                    style={
                        {opacity: '0.3'}
                }></div>
                <div class="container">
                    <div class="airbunkerLogo">
                        <img src="/img/airbunker-logo.png" class="nortlimg"/>
                    </div>

                    <div class="airbunkerBannerContent">
                        <div class="row">
                            <div class="col-md-6"></div>
                            <div class="col-md-6">
                                <h2 class="whiteTitle">
                                    <span>مجموعة المخابئ</span><br/>
                                    للتدريب</h2>
                                <h4 class="smallTitleWhite">((كرات الطلاء، الليزر  تاغ، مسدسات النيرف، ألعاب الرماية))</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="utilitySet rtl">
                <div class="container">
                    <div class="bunker">
                        <div class="row">

                            <div class="col-md-6">
                                <img src="/img/img77.jpg" class="nortlimg"/>
                            </div>
                            <div class="col-md-6">
                                <h4>المجموعة العملية</h4>
                                <h2>ذات الـ20 مخبئ</h2>
                                <h4 class="smallTitleWhite"
                                    style={
                                        {color: "#202331"}
                                }>(سلسلة تكتيكية لألعاب الليزر تاغ ومسدسات النيرف)
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div class="bunker">
                        <div class="row">

                            <div class="col-md-6">
                                <br/>
                                <br/>
                                <br/>

                                <h2>مجموعة الألعاب الخارجية</h2>
                                <h4 class="smallTitleWhite"
                                    style={
                                        {color: "#202331"}
                                }>وبطولات الليزر تاغ</h4>
                            </div>
                            <div class="col-md-6">
                                <img src="/img/img93.jpg" class="nortlimg"/>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section class="utilitySet rtl">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="dimentionItem">
                                <div class="dimentionTitle">الأبعاد:</div>
                                <div class="dimentionValue">2 × 1،2 م</div>
                                <img src="/img/dimentions1.png"/>
                                <div class="dimentionName">
                                    <h4>الاسطوانة</h4>
                                </div>
                            </div>

                        </div>
                        <div class="col-md-6">
                            <div class="dimentionItem">
                                <div class="dimentionTitle">الأبعاد</div>
                                <div class="dimentionValue">1,5 х 1 م</div>
                                <img src="/img/dimentions2.png"/>
                                <div class="dimentionName">
                                    <h4>الشجرة</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="dimentionItem">
                                <div class="dimentionTitle">الأبعاد</div>
                                <div class="dimentionValue">2,1 х 2,5 х 2,75 م</div>
                                <img src="/img/dimentions3.png"/>
                                <div class="dimentionName">
                                    <h4>الدوريتو المتوسط</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="dimentionItem">
                                <div class="dimentionTitle">الأبعاد</div>
                                <div class="dimentionValue">1,7 х 1,7 х 1,7م</div>
                                <img src="/img/dimentions4.png"/>
                                <div class="dimentionName">
                                    <h4>الدوريتو الصغير</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <div class="dimentionItem">
                                <div class="dimentionTitle">الأبعاد</div>
                                <div class="dimentionValue">1,5 х 1 х 1 م</div>
                                <img src="/img/dimentions5.png"/>
                                <div class="dimentionName">
                                    <h4>الكيك الطويل</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="dimentionItem">
                                <div class="dimentionTitle">الأبعاد</div>
                                <div class="dimentionValue">1 х 1 х 1 م</div>
                                <img src="/img/dimentions6.png"/>
                                <div class="dimentionName">
                                    <h4>الكيك</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="dimentionItem">
                                <div class="dimentionTitle">الأبعاد</div>
                                <div class="dimentionValue">1,95 х 1,5 х 0,5م</div>
                                <img src="/img/dimentions7.png"/>
                                <div class="dimentionName">
                                    <h4>الجناح</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="dimentionItem">
                                <div class="dimentionTitle">الأبعاد</div>
                                <div class="dimentionValue">0,75 х 0,5 х 3م</div>
                                <img src="/img/dimentions8.png"/>
                                <div class="dimentionName">
                                    <h4>شعاع الأفعى</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* section 23 */}
            <section class="airbunkerTableIntro airbunkerDroneRaceSec rtl">
                <div class="background-overlay"
                    style={
                        {opacity: '0.3'}
                }></div>
                <div class="container">
                    <div class="airbunkerLogo">
                        <img src="/img/airbunker-logo.png" class="nortlimg"/>
                    </div>

                    <div class="airbunkerBannerContent">
                        <div class="row">
                            <div class="col-md-6"></div>
                            <div class="col-md-6">
                                <h2 class="whiteTitle">
                                    <span>مجموعة مخابئ</span><br/>
                                    سباق الطائرات الآلية</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="airbunkerRequirement rtl">
                <div class="bunker">
                    <div class="row">

                        <div class="col-md-6">
                            <br/><br/>
                            <h2>مجموعة الألعاب الخارجية</h2>
                            <h5 class="smallTitleWhite"
                                style={
                                    {color: "#202331"}
                            }>(لرسم شعار على الشكل)</h5>
                            <ul>
                                <li>الصيغ المقبولة:
                                    <b>cdr و ai و eps و svg</b>
                                </li>
                                <li>صورة فيكتور فقط (صور بيت-ماب المتخفية على هيئة فيكتور غير مقبولة)</li>

                                <li>
                                    يجب دمج كل الطبقات في طبقة واحدة  (مدمجة ليس مجمعة)</li>
                                <li>يجب أن يكون الشعار من لون واحد خالص (اللون غير مهم)</li>
                                <li>يجب أن يكون سُمك الخطوط 1 مم على الأقل</li>

                            </ul>
                        </div>
                        <div class="col-md-6">
                            <img src="/img/airbunker-require.png" class="nortlimg"/>
                        </div>

                    </div>
                </div>
            </section>
        </Layout>
    )
}

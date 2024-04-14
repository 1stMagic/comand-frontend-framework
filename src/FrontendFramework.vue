<template>
    <div id="frontend-framework-demo" class="demopage">
        <div :id="templateId">
            <div class="site-header sticky" id="anchor-back-to-top" role="banner">
                <header class="grid-container-create-columns">
                    <div class="company-logo">
                        <a href="./" title="Tooltip">
                            <picture>
                                <source srcset="./assets/images/logos/logo-darkmode.svg"
                                        media="(prefers-color-scheme: dark)">
                                <img src="./assets/images/logos/logo.svg" alt="Company Logo">
                            </picture>
                        </a>
                    </div>
                    <!-- begin main-navigation for testing -->
                    <div id="main-navigation-wrapper">
                        <nav>
                            <ul>
                                <li>
                                    <a href="#">
                                        <span class="icon-home"></span>
                                        <span>Entry 1</span>
                                    </a>
                                </li>
                                <li class="has-subentries">
                                    <a href="">
                                        <span>Entry 2</span>
                                        <span class="subentry-icon icon-single-arrow-down"></span>
                                    </a>
                                    <ul aria-expanded="true">
                                        <li>
                                            <a href="">
                                                <span>Entry 2.1</span>
                                                <span class="subentry-icon icon-single-arrow-down"></span>
                                            </a>
                                            <ul aria-expanded="true">
                                                <li>
                                                    <a href="#">
                                                        <span>Entry 2.1.1</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span>Entry 2.1.2</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span>Entry 2.1.3</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span>Entry 2.2</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="has-subentries">
                                    <a href="#">
                                        <span>Entry 3</span>
                                        <span class="subentry-icon icon-single-arrow-down"></span>
                                    </a>
                                    <ul aria-expanded="true">
                                        <li>
                                            <a href="">
                                                <span>Entry 3.1</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span>Entry 3.2</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="http://www.comand-cms.com" target="comand-website">
                                        <span>CoManD-CMS</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <a href="#" class="button" id="toggle-offcanvas">
                            <span class="icon-bars"></span>
                            <span class="hidden">Open navigation</span>
                        </a>
                    </div>
                    <!-- end main-navigation for testing -->
                </header>
            </div>
            <aside :class="['sidebar box', {'open': openSidebar}]">
                <!-- begin inner-sidebar-wrapper -->
                <div v-if="openSidebar" class="inner-sidebar-wrapper">
                    <h3 class="text-align-center">Site Settings</h3>
                    <!-- begin select template -->
                    <div class="box content collapsible stretch-horizontally" @click.prevent="toggleBox('template')">
                        <a href="#" class="box-header" title="Show content">
                            <h4>
                                <span class="icon-home"></span>
                                <span>Template Settings</span>
                            </h4>
                            <span
                                :class="openBoxes.includes('template') ? 'icon-single-arrow-up' : 'icon-single-arrow-down'"></span>
                        </a>
                        <div v-if="openBoxes.includes('template')" class="box-body" aria-expanded="true" role="article">
                            <div class="default-padding">
                                <label for="select-template">
                                    <span>Select template</span>
                                    <select id="select-template" v-model="selectedTemplate">
                                        <option value="blank">Blank/Unstyled</option>
                                        <option value="business">Business</option>
                                        <option value="casual">Casual</option>
                                        <option value="dating">Dating</option>
                                        <option value="influencer">Influencer</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                    </div>
                    <!-- end select template -->

                    <!-- begin table of contents -->
                    <div class="box content collapsible stretch-horizontally">
                        <a href="#" class="box-header" title="Show content" @click.prevent="toggleBox('table')">
                            <h4>
                                <span class="icon-table"></span>
                                <span>Table of contents</span>
                            </h4>
                            <span
                                :class="openBoxes.includes('table') ? 'icon-single-arrow-up' : 'icon-single-arrow-down'"></span>
                        </a>
                        <div v-if="openBoxes.includes('table')" class="box-body" aria-expanded="true" role="article">
                            <div class="default-padding">
                                <ul>
                                    <li>
                                        <a href="#anchor-typography">Typography</a>
                                        <ul>
                                            <li><a href="#anchor-headlines">Headlines</a></li>
                                            <li><a href="#anchor-paragraphs">Paragraphs</a></li>
                                            <li>
                                                <a href="#anchor-lists">Lists</a>
                                                <ul>
                                                    <li><a href="#anchor-unordered-list">Unordered List</a></li>
                                                    <li><a href="#anchor-ordered-list">Ordered List</a></li>
                                                    <li><a href="#anchor-definition-list">Definition List</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#anchor-hyperlinks">Hyperlinks</a></li>
                                            <li><a href="#anchor-miscellaneous">Miscellaneous Typo</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul>
                                    <li><a href="#anchor-tables">Tables</a></li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="#anchor-boxes">Boxes</a>
                                        <ul>
                                            <li><a href="#anchor-stretched-boxes">Stretched Boxes</a></li>
                                            <li><a href="#anchor-boxes-with-centered-content">Boxes with centered
                                                content</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="#anchor-richmedia">Richmedia</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="#anchor-user-interface">User Interface</a>
                                        <ul>
                                            <li><a href="#anchor-system-messages">System Messages</a></li>
                                            <li><a href="#anchor-buttons">Buttons</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="#anchor-forms">Forms</a>
                                        <ul>
                                            <li><a href="#anchor-native-form-elements">Native Form Elements</a></li>
                                            <li><a href="#anchor-form-validation">Form Validation</a></li>
                                            <li><a href="#anchor-advanced-form-elements">Advanced Form Elements</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="#anchor-main-navigation">Main Navigation</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="#anchor-flex-containers">Flex-Containers</a>
                                        <ul>
                                            <li><a href="#anchor-flex-containers-default">Default</a></li>
                                            <li><a href="#anchor-flex-containers-no-gap">No Gap</a></li>
                                            <li><a href="#anchor-flex-containers-no-flex-all">No Flex All items</a></li>
                                            <li><a href="#anchor-flex-containers-no-flex-single-item">No Flex Single
                                                Item</a>
                                            </li>
                                            <li><a href="#anchor-flex-containers-vertical">Vertical</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="#anchor-grid-containers">Grid-Containers</a>
                                        <ul>
                                            <li><a href="#anchor-grid-containers-regular-grid">Regular Grid</a></li>
                                            <li><a href="#anchor-grid-containers-default-classes">Default Classes</a>
                                            </li>
                                            <li><a href="#anchor-grid-containers-two-fractions">Two Fractions</a></li>
                                            <li><a href="#anchor-grid-containers-complex-grid">Complex Grid</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- begin comand-versions -->
                        <dl class="box-footer comand-versions">
                            <dt>Frontend-Framework Version:</dt>
                            <dd>{{ packageJson.version }}</dd>
                        </dl>
                        <!-- end comand-versions -->
                    </div>
                    <!-- end table of contents -->
                </div>
                <div v-else>
                    <div class="closed-sidebar">
                        <a href="#" class="button primary" title="Open Template Settings"
                           @click.prevent="openBox('template')">
                            <span class="icon-home"></span>
                        </a>
                        <a href="#" class="button primary" title="Open Template Settings"
                           @click.prevent="openBox('table')">
                            <span class="icon-cogs"></span>
                        </a>
                    </div>
                </div>
                <a href="#" :title="openSidebar ? 'Collapse sidebar' : 'Expand sidebar'" @click.prevent="toggleSidebar">
                    <span :class="openSidebar ? 'icon-single-arrow-left' : 'icon-single-arrow-right'"></span>
                </a>
            </aside>
            <main id="content">
                <a id="top-of-page"></a>
                <!-- begin typography -->
                <div class="width-limitation-wrapper">
                    <section>
                        <h2 class="headline-demopage" id="anchor-typography">Typography</h2>
                        <h3 class="headline-demopage" id="anchor-headlines">Headlines</h3>
                        <h4>Headlines without icons</h4>
                        <h1>Headline 1</h1>
                        <h2>Headline 2</h2>
                        <h3>Headline 3</h3>
                        <h4>Headline 4</h4>
                        <h5>Headline 5</h5>
                        <h6>Headline 6</h6>
                        <h4>Headlines with icons</h4>
                        <h1><span class="icon-home"></span><span>Headline 1</span></h1>
                        <h2><span class="icon-home"></span><span>Headline 2</span></h2>
                        <h3><span class="icon-home"></span><span>Headline 3</span></h3>
                        <h4><span class="icon-home"></span><span>Headline 4</span></h4>
                        <h5><span class="icon-home"></span><span>Headline 5</span></h5>
                        <h6><span class="icon-home"></span><span>Headline 6</span></h6>
                        <h3 class="headline-demopage" id="anchor-paragraphs">Paragraphs (continuous text)</h3>
                        <p>This is a short paragraph</p>
                        <p>This is continuous text within a paragraph with text-align left (which is default).
                            Longer
                            texts
                            should always
                            be formatted with a &lt;p&gt;-tag. It can contain different further tags, i.e. &lt;br /&gt;,
                            &lt;a&gt;,
                            &lt;span&gt;,
                            &lt;strong&gt;, &lt;em&gt;, &lt;div&gt;. An additional &lt;p&gt;-tag inside a
                            surrounding
                            &lt;p&gt;-tag
                            is not
                            allowed. It should be also avoided placing to &lt;br /&gt; after each other (use a &lt;p&gt;
                            instead),
                            because another paragraph is required if you want to create a blank line (which is no
                            real
                            line, but
                            a
                            margin). Of course a paragraph may not contain tags for headlines, tables or forms.</p>
                        <p class="text-align-justify">This is continuous text within a paragraph with text-align
                            justify. Longer
                            texts
                            should always be formatted with a &lt;p&gt;-tag. It can contain different further tags,
                            i.e.
                            &lt;br
                            /&gt;,
                            &lt;a&gt;, &lt;span&gt;, &lt;strong&gt;, &lt;em&gt;, &lt;div&gt;. An additional &lt;p&gt;-tag
                            inside
                            a
                            surrounding &lt;p&gt;-tag is not allowed. It should be also avoided placing to &lt;br /&gt;
                            after
                            each other
                            (use a &lt;p&gt; instead), because another paragraph is required if you want to create a
                            blank line
                            (which is
                            no real line, but a margin). Of course a paragraph may not contain tags for headlines,
                            tables or
                            forms.</p>
                        <h3 class="headline-demopage" id="anchor-lists">Lists</h3>

                        <h4 id="anchor-unordered-list">Unordered List</h4>
                        <ul>
                            <li>List item</li>
                            <li>List item
                                <ul>
                                    <li>
                                        List item level 2<br/>
                                        with more than line
                                    </li>
                                    <li>List item level 2</li>
                                </ul>
                            </li>
                            <li>List item</li>
                        </ul>
                        <h4 id="anchor-ordered-list">Ordered List</h4>
                        <ol>
                            <li>List item</li>
                            <li>List item
                                <ul>
                                    <li>List item (text only)</li>
                                    <li><a href="#">List item (default link)</a></li>
                                    <li><a href="#" class="active">List item (active link)</a></li>
                                </ul>
                            </li>
                            <li>List item</li>
                        </ol>
                        <h4 id="anchor-definition-list">Definition List</h4>
                        <h5>List with texts as terms</h5>
                        <dl>
                            <dt>Definition term:</dt>
                            <dd>Definition data</dd>
                            <dt>Definition term:</dt>
                            <dd>Definition data</dd>
                            <dt>Definition longer term:</dt>
                            <dd>Definition data with a very long text which will wrap on small devices</dd>
                        </dl>
                        <h5>List with icons as terms</h5>
                        <dl>
                            <dt><span class="icon-company" title="Company"></span></dt>
                            <dd>Definition data</dd>
                            <dt><span class="icon-phone" title="Phone"></span></dt>
                            <dd>Definition data</dd>
                            <dt><span class="icon-mail" title="Email"></span></dt>
                            <dd>Definition data with a very long text which will wrap on small devices</dd>
                        </dl>
                        <hr/>
                        <h3 id="anchor-hyperlinks">Hyperlinks</h3>
                        <h4>Link with text only</h4>
                        <a href="#">Hyperlink</a>
                        <h4>Link with icon only</h4>
                        <a href="#">
                            <span class="icon-user-profile"></span>
                        </a>
                        <h4>Link with icon and text</h4>
                        <a href="#">
                            <span class="icon-user-profile"></span>
                            <span>Hyperlink</span>
                        </a><br/>
                        <a href="#">
                            <span>Hyperlink</span>
                            <span class="icon-user-profile"></span>
                        </a>
                        <hr/>
                        <h3 class="headline-demopage" id="anchor-miscellaneous">Miscellaneous Typo</h3>
                        <h4>Emphasized</h4>
                        <p><em>Emphasized text</em></p>
                        <h4>Strong</h4>
                        <p><strong>Strong text</strong></p>
                        <h4>Superior/Subscript</h4>
                        <p>text<sup>superior</sup></p>
                        <p>text<sub>subscript</sub></p>
                        <h4>Small text</h4>
                        <small>Small text</small>
                        <h4>Horizontal row</h4>
                        <hr/>
                    </section>
                </div>
                <!-- end typography -->

                <!-- begin tables -->
                <div class="width-limitation-wrapper">
                    <section>
                        <h2 class="headline-demopage" id="anchor-tables">Tables</h2>
                        <!--p>
                            <a href="#" id="toggle_stretch_table" title="(add/remove class 'full-width')">Toggle stretched table</a>
                        </p-->
                        <div class="table-wrapper">
                            <table class="full-width">
                                <caption>Tablecaption</caption>
                                <thead>
                                <tr>
                                    <th>Table head</th>
                                    <th>Table head</th>
                                    <th>Table head</th>
                                    <th>Table head</th>
                                    <th>Table head</th>
                                    <th>Table head</th>
                                    <th>Table head</th>
                                    <th>Table head</th>
                                    <th>Table head</th>
                                    <th>Table head</th>
                                    <th>Table head</th>
                                    <th>Table head</th>
                                    <th>Table head</th>
                                    <th>Table head</th>
                                    <th>Table head</th>
                                    <th>Table head</th>
                                    <th>Table head</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Table data (default-align)</td>
                                    <td>
                                        <label class="toggle-switch"
                                               for="toggle-switch-checkbox-in-table"
                                               title="default"
                                        >
                                                <span class="switch-label-wrapper">
                                                  <input type="checkbox" id="toggle-switch-checkbox-in-table"
                                                         name="chechboxgroup3" value="1"/>
                                                  <span class="label-text">Yes</span><span class="label-text">No</span>
                                                </span>
                                            <span>Label #1</span>
                                        </label>
                                    </td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                </tr>
                                <tr class="active">
                                    <td>Table data (default-align)</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                </tr>
                                <tr>
                                    <td>Table data (default-align)</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                </tr>
                                <tr>
                                    <td class="nowrap">Table data (nowrap)</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td class="active">cell (highlighted)</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                </tr>
                                <tr>
                                    <td>Table data (default-align)</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                </tr>
                                <tr>
                                    <td>Table data (default-align)</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                </tr>
                                <tr>
                                    <td>Table data (default-align)</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                    <td>Table data</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <pre><code class="html"></code></pre>
                    </section>
                </div>
                <!-- end tables -->

                <!-- begin boxes -->
                <div class="width-limitation-wrapper" id="section-boxes">
                    <section>
                        <h2 class="headline-demopage" id="anchor-boxes">Boxes</h2>
                        <h3 id="anchor-simple-boxes">Simple Box</h3>
                        <!-- begin simple box -->
                        <div class="box">
                            <p>
                                A simple box is just a &lt;div&gt; with class="box" that sets default padding-,
                                background- and border-style. The box can contain anything.
                                Though the box is a block-element the default width of the box is 100% of its parent.
                            </p>
                        </div>
                        <!-- end simple box -->

                        <h3 id="anchor-stretched-boxes">Stretched boxes with different content</h3>
                        <div class="flex-container">
                            <div class="box">
                                <p>
                                    This is a simple box without headline. The box (and its siblings) are grid-items,
                                    because their parent is defined as a grid-container by using "display: grid."
                                </p>
                            </div>
                            <div class="box">
                                <p>
                                    The default width of all grid-items would be different relating to their individual
                                    content. By defining the width of each item as 1 fraction and defining auto-fit (by
                                    using
                                    (grid-template-columns: repeat(auto-fit, minmax(0, 1fr))) for the grid-container,
                                    all items are stretched equaly.<br/>
                                    Flex-Box can do the same, but the advantage of using CSS-Grid is that you do not
                                    have to set margins for the space between the boxes, because you can define a
                                    specific gap (i.e.: 2rem),
                                    which is used horizontally and vertically.
                                </p>
                                <p>
                                    <strong>Attention:</strong> Do not use fixed widths or heights, because it causes
                                    problems to handle the grid!
                                </p>
                            </div>
                            <div class="box">
                                <div>
                                    <h4>Box with simple headline</h4>
                                </div>
                                <div class="box-body">
                                    <p>
                                        The default width of all grid-items would be different relating to their
                                        individual content. By defining the width of each item as 1 fraction and
                                        defining auto-fit (by using
                                        (grid-template-columns: repeat(auto-fit, minmax(0, 1fr))) for the
                                        grid-container, all items are stretched equaly.<br/>
                                        Flex-Box can do the same, but the advantage of using CSS-Grid is that you do not
                                        have to set margins for the space between the boxes, because you can define a
                                        specific gap (i.e.:
                                        2rem), which is used horizontally and vertically.
                                    </p>
                                    <p>
                                        <strong>Attention:</strong>Do not use fixed widths or heights, because it causes
                                        problems to handle the grid!
                                    </p>
                                </div>
                            </div>
                            <div class="box">
                                <div class="box-header">
                                    <h4>Box with header, body and footer</h4>
                                </div>
                                <div class="box-body" role="article">
                                    <div class="default-padding">
                                        <p>
                                            This box has a separated box-body-part. All boxes/grid-items have the same
                                            height (height of the highest sibling) by default. So no fixed height or
                                            JavaScript is necessary.
                                        </p>
                                    </div>
                                </div>
                                <div class="box-footer">
                                    <a href="#">Link in separate footer</a>
                                </div>
                            </div>
                            <div class="box">
                                <div class="box-header">
                                    <h4><span class="icon-image"></span><span>Box with image</span></h4>
                                </div>
                                <div class="box-body"><img src="/src/assets/images/landscape-medium.jpg"
                                                           alt="landscape medium" title="landscape medium"/></div>
                            </div>
                        </div>
                        <h3 id="anchor-boxes-with-centered-content">Boxes with centered content</h3>
                        <div class="grid-container-auto-columns" id="demopage-boxes">
                            <div class="box center-content">
                                <div>
                                    <p>Centered inside <strong>block-element</strong></p>
                                </div>
                            </div>
                            <div class="box center-content flex-container">
                                <div>
                                    <p>Centered inside <strong>flex-container</strong></p>
                                </div>
                            </div>
                            <div class="box center-content grid-container">
                                <div>
                                    <p>Centered inside <strong>grid-container</strong></p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <!-- end boxes -->

                <!-- begin rich-media -->
                <div class="width-limitation-wrapper">
                    <section>
                        <h2 class="headline-demopage" id="anchor-richmedia">RichMedia</h2>
                        <h3 class="headline-demopage">Images</h3>
                        <div class="flex-container" id="richmedia-wrapper">
                            <figure>
                                <img src="./assets/images/landscape-medium.jpg" alt="Alternative text"
                                     title="Simple image"/>
                            </figure>
                            <a href="#">
                                <img src="./assets/images/landscape-medium.jpg" alt="Alternative text"
                                     title="Image with link (and border)"/>
                            </a>
                            <figure>
                                <img src="./assets/images/landscape-medium.jpg" alt="Alternative text"
                                     title="Image with caption below"/>
                                <figcaption>Caption below image</figcaption>
                            </figure>
                            <figure>
                                <figcaption>Caption above image</figcaption>
                                <img src="./assets/images/landscape-medium.jpg" alt="Alternative text"
                                     title="Image with caption above"/>
                            </figure>
                        </div>
                    </section>
                </div>
                <!-- end rich-media -->

                <!-- begin user-interface -->
                <div class="width-limitation-wrapper">
                    <section>
                        <h2 class="headline-demopage" id="anchor-user-interface">User Interface</h2>
                        <h3 class="headline-demopage" id="anchor-system-messages">System messages</h3>
                        <div class="system-message error full-width">
                            <h4 class="message-headline">
                                <span class="icon-cancel"></span>
                                <span>Error message</span>
                            </h4>
                            <input type="checkbox" title="Close system message">
                        </div>
                        <div class="system-message warning full-width">
                            <h4 class="message-headline">
                                <span class="icon-warning"></span>
                                <span>Warning message</span>
                            </h4>
                            <input type="checkbox" title="Close system message">
                        </div>
                        <div class="system-message success full-width">
                            <h4 class="message-headline">
                                <span class="icon-check"></span>
                                <span>Success message</span>
                            </h4>
                            <input type="checkbox" title="Close system message">
                        </div>
                        <div class="system-message info full-width">
                            <h4 class="message-headline">
                                <span class="icon-info"></span>
                                <span>Info message</span>
                            </h4>
                            <input type="checkbox" title="Close system message">
                        </div>

                        <h3 class="headline-demopage" id="anchor-buttons">Buttons</h3>
                        <h4>Default buttons</h4>
                        <h5>Button types</h5>
                        <div class="button-wrapper align-left">
                            <a href="#" class="button primary" role="button">
                                <span>Primary button with a-tag</span>
                            </a>
                            <button class="button primary">
                                <span>Primary button with button-tag</span>
                            </button>
                            <a href="#" class="button" role="button">
                                <span>Default/Secondary button with a-tag</span>
                            </a>
                            <button class="button">
                                <span>Default/Secondary button with button-tag</span>
                            </button>
                            <a href="#" class="button tertiary" role="button">
                                <span>Tertiary button with a-tag</span>
                            </a>
                            <button class="button tertiary">
                                <span>Tertiary button with button-tag</span>
                            </button>
                        </div>

                        <h5>&lt;a&gt;-tags as buttons (using class="button") aligned left</h5>
                        <div class="button-wrapper align-left">
                            <a class="button" href="#" role="button">
                                <span class="icon-register"></span>
                                <span class="hidden">Hidden label-text</span>
                            </a>
                            <a class="button" href="#" role="button"><span>Button with label-text only</span></a>
                            <a class="button" href="#" role="button">
                                <span class="icon-register"></span>
                                <span>Button with icon and label-text within a-tag</span>
                            </a>
                        </div>

                        <h5>Buttons with no gap (centered)</h5>
                        <div class="button-wrapper align-center">
                            <a class="button" href="#" role="button">
                                <span class="icon-register"></span>
                                <span class="hidden">Hidden label-text</span>
                            </a>
                            <a class="button" href="#" role="button"><span>Button with label-text only</span></a>
                            <a class="button" href="#" role="button">
                                <span>Button with icon and label-text within a-tag</span>
                                <span class="icon-check"></span>
                            </a>
                        </div>

                        <h5>&lt;button&gt;-tags (for forms) aligned right</h5>
                        <div class="button-wrapper align-right">
                            <button class="button">
                                <span class="icon-register"></span>
                                <span class="hidden">Hidden label-text</span>
                            </button>
                            <button class="button"><span>Button with label-text only</span></button>
                            <button class="button">
                                <span class="icon-register"></span>
                                <span>Button with icon and label-text within a-tag</span>
                            </button>
                        </div>

                        <h5>Buttons (space-between)</h5>
                        <div class="button-wrapper space-between">
                            <a class="button" href="#" role="button">
                                <span class="icon-register"></span>
                                <span class="hidden">Hidden label-text</span>
                            </a>
                            <a class="button" href="#" role="button"><span>Button with label-text only</span></a>
                            <a class="button" href="#" role="button">
                                <span class="icon-register"></span>
                                <span>Button with icon and label-text within a-tag</span>
                            </a>
                        </div>

                        <h5>Disabled buttons</h5>
                        <div class="button-wrapper align-left">
                            <button class="button" disabled="disabled" role="button">
                                <span class="icon-register"></span>
                                <span>Button with attribute "disabled"</span>
                            </button>
                            <button class="button disabled" role="button">
                                <span class="icon-register"></span>
                                <span>Button with class "disabled"</span>
                            </button>
                            <a class="button disabled" href="#" role="button">
                                <span class="icon-register"></span>
                                <span>A-tag with class "disabled"</span>
                            </a>
                        </div>

                        <h5>Colored buttons</h5>
                        <div class="button-wrapper align-left">
                            <button class="button cancel">
                                <span class="icon-cancel-circle"></span>
                                <span>Button Cancel</span>
                            </button>
                            <a class="button confirm" href="#" role="button">
                                <span class="icon-check-circle"></span>
                                <span>Button Confirm</span>
                            </a>
                        </div>

                        <h4>Small buttons</h4>
                        <div class="button-wrapper align-left">
                            <a href="#" class="button small primary" role="button">
                                <span class="icon-location-set"></span>
                                <span>Primary button with a-tag</span>
                            </a>
                            <button class="button small primary">
                                <span class="icon-location-set"></span>
                                <span>Primary button with button-tag</span>
                            </button>
                            <a href="#" class="button small" role="button">
                                <span class="icon-cogs"></span>
                                <span>Default/Secondary button with a-tag</span>
                            </a>
                            <button class="button small">
                                <span class="icon-cogs"></span>
                                <span>Default/Secondary button with button-tag</span>
                            </button>
                            <a href="#" class="button small tertiary" role="button">
                                <span class="icon-file-pdf"></span>
                                <span>Tertiary button with a-tag</span>
                            </a>
                            <button class="button small tertiary">
                                <span class="icon-file-pdf"></span>
                                <span>Tertiary button with button-tag</span>
                            </button>
                        </div>

                        <h4>Large buttons</h4>
                        <div class="button-wrapper align-left">
                            <a href="#" class="button large primary" role="button">
                                <span class="icon-location-set"></span>
                                <span>Primary button with a-tag</span>
                            </a>
                            <button class="button large primary">
                                <span class="icon-location-set"></span>
                                <span>Primary button with button-tag</span>
                            </button>
                            <a href="#" class="button large" role="button">
                                <span class="icon-cogs"></span>
                                <span>Default/Secondary button with a-tag</span>
                            </a>
                            <button class="button large">
                                <span class="icon-cogs"></span>
                                <span>Default/Secondary button with button-tag</span>
                            </button>
                            <a href="#" class="button large tertiary" role="button">
                                <span class="icon-file-pdf"></span>
                                <span>Tertiary button with a-tag</span>
                            </a>
                            <button class="button large tertiary">
                                <span class="icon-file-pdf"></span>
                                <span>Tertiary button with button-tag</span>
                            </button>
                        </div>

                        <h4>Buttons with large icons</h4>
                        <div class="button-wrapper align-left">
                            <a href="#" class="button large-icon primary" role="button">
                                <span class="icon-location-set"></span>
                                <span>Primary button with a-tag</span>
                            </a>
                            <button class="button large-icon primary">
                                <span class="icon-location-set"></span>
                                <span>Primary button with button-tag</span>
                            </button>
                            <a href="#" class="button large-icon" role="button">
                                <span class="icon-cogs"></span>
                                <span>Default/Secondary button with a-tag</span>
                            </a>
                            <button class="button large-icon">
                                <span class="icon-cogs"></span>
                                <span>Default/Secondary button with button-tag</span>
                            </button>
                            <a href="#" class="button large-icon tertiary" role="button">
                                <span class="icon-file-pdf"></span>
                                <span>Tertiary button with a-tag</span>
                            </a>
                            <button class="button large-icon tertiary">
                                <span class="icon-file-pdf"></span>
                                <span>Tertiary button with button-tag</span>
                            </button>
                        </div>

                        <h4>Buttons with different shapes (and icons only)</h4>
                        <div class="button-wrapper align-left">
                            <a href="#" class="button primary icon-hexagon use-icon-as-background" role="button">
                                <span class="icon-plus"></span>
                            </a>
                            <a href="#" class="button icon-triangle use-icon-as-background" role="button">
                                <span class="icon-plus"></span>
                            </a>
                            <a href="#" class="button tertiary icon-circle use-icon-as-background" role="button">
                                <span class="icon-plus"></span>
                            </a>
                            <a href="#" class="button tertiary icon-square use-icon-as-background disabled"
                               role="button">
                                <span class="icon-plus"></span>
                            </a>
                            <a href="#" class="button confirm icon-square use-icon-as-background" role="button">
                                <span class="icon-plus"></span>
                            </a>
                            <button href="#" class="button cancel icon-square use-icon-as-background">
                                <span class="icon-plus"></span>
                            </button>
                        </div>
                    </section>
                </div>
                <!-- end user-interface -->

                <!-- begin forms -->
                <div class="width-limitation-wrapper">
                    <section>
                        <h2 class="headline-demopage" id="anchor-forms">Forms</h2>
                        <h3 id="anchor-native-form-elements">Native form elements (fieldset with grid-container)</h3>
                        <form method="post">
                            <fieldset class="grid-container-create-column">
                                <legend>Legend</legend>
                                <div class="label">
                                    <span class="label-text">Enter dates:</span>
                                    <span class="flex-container no-flex">
                                    <label class="inline" for="startdate">
                                        <span class="label-text">Start date:<sup>*</sup></span>
                                        <input type="date" id="startdate"/>
                                    </label>
                                    <label class="inline" for="enddate">
                                        <span class="label-text">End date:</span>
                                        <input type="date" id="enddate"/>
                                    </label>
                                  </span>
                                </div>
                                <label for="single-checkbox">
                                    <input id="single-checkbox" value="1" checked="checked" type="checkbox"/>
                                    <span class="label-text">Label for single checkbox</span>
                                </label>
                                <label for="checkbox-with-long-label">
                                    <input id="checkbox-with-long-label" value="1" type="checkbox"/>
                                    <span class="label-text">Label for single checkbox with very long text that wraps on small devices</span>
                                </label>
                                <div class="label inline">
                                    <span class="label-text">Label for radiobuttons:</span>
                                    <span class="flex-container no-flex">
                                    <label for="radio1">
                                        <input name="radiogroup" id="radio1" value="1" type="radio"/>
                                        <span class="label-text">Radiobutton 1 (default)</span>
                                    </label>
                                    <label for="radio2">
                                        <input name="radiogroup" id="radio2" value="2" type="radio" checked="checked"/>
                                        <span class="label-text">Radiobutton 2 (checked (by default))</span>
                                    </label>
                                    <label for="radio3">
                                        <input name="radiogroup" id="radio3" value="3" type="radio"
                                               disabled="disabled"/>
                                        <span class="label-text">Radiobutton 3 (disabled)</span>
                                    </label>
                                    <label for="radio4">
                                        <input name="radiogroup-disabled" id="radio4" value="4" type="radio"
                                               disabled="disabled" checked="checked"/>
                                        <span class="label-text">Radiobutton 4 (checked and disabled)</span>
                                    </label>
                                  </span>
                                </div>
                                <div class="label inline">
                                    <span class="label-text">Label for checkboxes:</span>
                                    <span class="flex-container no-flex">
                                      <label for="checkbox1">
                                          <input name="checkbox" id="checkbox1" value="1" type="checkbox"/>
                                          <span class="label-text">Checkbox 1 (default)</span>
                                      </label>
                                      <label for="checkbox2">
                                          <input name="checkbox" id="checkbox2" value="2" type="checkbox"
                                                 checked="checked"/>
                                          <span class="label-text">Checkbox 2 (checked (by default))</span>
                                      </label>
                                      <label for="checkbox3">
                                          <input name="checkbox" id="checkbox3" value="3" type="checkbox"
                                                 disabled="disabled"/>
                                          <span class="label-text">Checkbox 3 (disabled)</span>
                                      </label>
                                      <label for="checkbox4">
                                          <input name="checkbox" id="checkbox4" value="4" type="checkbox"
                                                 disabled="disabled" checked="checked"/>
                                          <span class="label-text">Checkbox 4 (checked and disabled)</span>
                                      </label>
                                  </span>
                                </div>
                                <div class="flex-container align-bottom">
                                    <label for="default-inputfield">
                                        <span class="label-text">
                                            <span>Default inputfield:<sup>*</sup></span>
                                            <a href="#" class="icon-questionmark-circle" title="Open help"></a>
                                        </span>
                                        <input name="default-inputfield" id="default-inputfield"
                                               placeholder="Placeholdertext for default inputfield" type="text"/>
                                    </label>
                                    <label for="email-inputfield">
                                        <span class="label-text">
                                            <span>E-Mail inputfield:<sup>*</sup></span>
                                            <a href="#" class="icon-questionmark-circle" title="Open help"></a>
                                        </span>
                                        <input name="email-inputfield" id="email-inputfield"
                                               placeholder="Placeholdertext for email inputfield" type="email"/>
                                    </label>
                                </div>
                                <div class="flex-container align-bottom">
                                    <label for="textfield1">
                                        <span class="label-text">
                                            <span>A very long label for textfield 1 that wraps if there is no available space left:</span>
                                        </span>
                                        <input name="textfield1" id="textfield1"
                                               placeholder="Placeholdertext for textfield 1" type="text"/>
                                    </label>
                                    <label for="textfield_disabled">
                                        <span class="label-text"><span>Label for (disabled) textfield:</span></span>
                                        <input name="textfield" id="textfield_disabled"
                                               value="Some text for disabled textfield" type="text" disabled="disabled"
                                               title="tooltip"/>
                                    </label>
                                    <label for="searchfield">
                                        <span class="label-text"><span>Label for searchfield:</span></span>
                                        <span class="input-wrapper">
                                            <input name="searchfield" id="searchfield" placeholder="Keyword(s)"
                                                   type="search"/>
                                            <a href="#" class="button no-flex"><span class="icon-search"></span></a>
                                        </span>
                                    </label>
                                </div>
                                <label class="inline" for="numberfield">
                                    <span class="label-text"><span>Label for numberfield (inline):</span></span>
                                    <input name="numberfield" id="numberfield" placeholder="1" type="number"/>
                                </label>
                                <label class="inline" for="numberfield2">
                                    <span
                                        class="label-text"><span>Label for numberfield with decimal (inline):</span></span>
                                    <input name="numberfield" id="numberfield2" placeholder="0.0" type="number"
                                           step="0.1"/>
                                </label>
                                <label class="inline" for="colorfield">
                                    <span class="label-text"><span>Label for colorfield (inline):</span></span>
                                    <input name="colorfield" id="colorfield" type="color"/>
                                </label>
                                <label class="inline" for="datefield">
                                    <span class="label-text"><span>Label for (required) datefield (inline):<sup>*</sup></span></span>
                                    <input name="datefield" id="datefield" type="date" required="required"/>
                                </label>
                                <label class="inline" for="rangeslider">
                                    <span
                                        class="label-text"><span>Label for (required) rangeslider (inline):</span></span>
                                    <input name="rangeslider" id="rangeslider" type="range"/>
                                </label>
                                <label class="inline" for="rangeslider2">
                                    <span class="label-text"><span>Label for (required and disabled) rangeslider (inline):</span></span>
                                    <input name="rangeslider" id="rangeslider2" type="range" disabled="disabled"/>
                                </label>
                                <div class="flex-container">
                                    <div class="label">
                                        <span
                                            class="label-text"><span>Label for Zip/City (with hidden labels):</span></span>
                                        <span class="input-wrapper">
                                            <label for="zip" class="no-flex">
                                                <span class="hidden">Zip</span>
                                                <input name="zip" id="zip" placeholder="12345" type="number"/>
                                            </label>
                                            <label for="city">
                                                <span class="hidden">City</span>
                                                <input name="city" id="city" placeholder="City" type="text"/>
                                            </label>
                                        </span>
                                    </div>
                                    <label for="selectbox-required">
                                        <span class="label-text">
                                          <span>Label for selectbox (required):<sup>*</sup></span>
                                        </span>
                                        <select name="selectbox-required" id="selectbox-required" required="required">
                                            <option value="">Bitte wählen</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            <option value="option3">Option 3</option>
                                        </select>
                                    </label>
                                    <label for="selectbox-disabled">
                                        <span class="label-text">
                                          <span>Label for selectbox (disabled):</span>
                                        </span>
                                        <select name="selectbox-disabled" id="selectbox-disabled" disabled="disabled">
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            <option value="option3">Option 3</option>
                                        </select>
                                    </label>
                                    <label for="datalist">
                                        <span class="label-text">
                                          <span>Label for datalist:</span>
                                        </span>
                                        <input type="text" list="options" name="datalist" id="datalist"
                                               autocomplete="off" placeholder="Placeholder text for datalist-input"/>
                                        <datalist id="options">
                                            <option value="Option 1"></option>
                                            <option value="Option 2"></option>
                                            <option value="Option 3"></option>
                                        </datalist>
                                    </label>
                                </div>
                                <label class="textarea" for="textarea">
                                  <span class="label-text">
                                    <span>Label for textarea:<sup>*</sup></span>
                                  </span>
                                    <textarea id="textarea" placeholder="Placeholdertext for textarea"
                                              required="required"></textarea>
                                </label>
                            </fieldset>
                            <div class="button-wrapper align-right">
                                <button type="submit" class="button"><span>Submit-Button</span></button>
                            </div>
                        </form>

                        <h3 id="anchor-form-validation">Form Validation</h3>
                        <h4>No validation</h4>
                        <dl>
                            <dt>Validation:</dt>
                            <dd>None</dd>
                            <dt>Messages:</dt>
                            <dd>None</dd>
                            <dt>Styling:</dt>
                            <dd>Native/Pseudo-classes</dd>
                        </dl>
                        <form novalidate="novalidate">
                            <fieldset class="flex-container">
                                <legend>Form without validation</legend>
                                <div class="flex-container">
                                    <label for="inputfield-without-validation">
                                        <span class="label-text">
                                            <span>Inputfield without validation:<sup>*</sup></span>
                                        </span>
                                        <input name="inputfield-without-validation" id="inputfield-without-validation"
                                               placeholder="Placeholdertext for inputfield with error" type="text"
                                               required="required" minlength="5"/>
                                    </label>
                                    <label>
                                        <span class="label-text">
                                            <span>Inputfield without validation:<sup>*</sup></span>
                                        </span>
                                        <select name="selectbox-without-validation" id="selectbox-without-validation"
                                                required="required">
                                            <option value="">Please select&hellip;</option>
                                            <option value="1">Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                        </select>
                                    </label>
                                </div>
                            </fieldset>
                        </form>
                        <h4>Native validation</h4>
                        <dl>
                            <dt>Validation:</dt>
                            <dd>Native/By browser</dd>
                            <dt>Messages:</dt>
                            <dd>Native/By browser</dd>
                            <dt>Styling:</dt>
                            <dd>Native/Pseudo-classes</dd>
                        </dl>
                        <form method="post" action="#">
                            <fieldset class="flex-container">
                                <legend>Form with native validation</legend>
                                <div class="flex-container">
                                    <label for="inputfield-with-native-validation">
                                        <span class="label-text">
                                            <span>Inputfield with native validation:<sup>*</sup></span>
                                        </span>
                                        <input
                                            name="inputfield-with-native-validation"
                                            id="inputfield-with-native-validation"
                                            placeholder="Placeholdertext for inputfield with native validation"
                                            type="text"
                                            required="required"
                                            minlength="5"
                                        />
                                    </label>
                                    <label>
                                        <span class="label-text">
                                            <span>Selectbox with native validation:<sup>*</sup></span>
                                        </span>
                                        <select name="selectbox-with-native-validation"
                                                id="selectbox-with-native-validation" required="required">
                                            <option value="">Please select&hellip;</option>
                                            <option value="1">Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                        </select>
                                    </label>
                                    <label>
                                        <span class="label-text">
                                            <span>Textarea with native validation:<sup>*</sup></span>
                                        </span>
                                        <textarea
                                            name="textarea-with-native-validation"
                                            id="textarea-with-native-validation"
                                            required="required"
                                            placeholder="Placeholdertext for textarea with native validation">
                                        </textarea>
                                    </label>
                                </div>
                            </fieldset>
                            <button type="submit"><span>Submit</span></button>
                        </form>
                        <h4>Custom validation</h4>
                        <dl>
                            <dt>Validation:</dt>
                            <dd>None</dd>
                            <dt>Messages:</dt>
                            <dd>Custom/Tooltips</dd>
                            <dt>Styling:</dt>
                            <dd>Custom/Classes</dd>
                        </dl>
                        <form data-use-validation="true" novalidate="novalidate">
                            <fieldset class="flex-container">
                                <legend>Form with custom validation</legend>
                                <h5>Inputfields</h5>
                                <div class="flex-container align-bottom">
                                    <label for="inputfield-default">
                                        <span class="label-text">
                                            <span>Inputfield (default with help-icon):<sup>*</sup></span>
                                            <a href="#" class="icon-questionmark-circle" title="Open help!"></a>
                                        </span>
                                        <input
                                            name="inputfield-default"
                                            id="inputfield-default"
                                            placeholder="Placeholdertext for inputfield"
                                            type="text"
                                        />
                                    </label>
                                    <label class="error" for="inputfield-with-error">
                                        <span class="label-text">
                                            <span>Inputfield with error:<sup>*</sup></span>
                                            <a href="#" class="icon-error-circle" title="Please fill field correctly!">
                                            </a>
                                        </span>
                                        <input
                                            name="inputfield-with-error"
                                            id="inputfield-with-error"
                                            placeholder="Placeholdertext for inputfield with error"
                                            type="text"
                                        />
                                    </label>
                                    <label class="warning" for="inputfield-with-warning">
                                        <span class="label-text">
                                            <span>Inputfield with warning:<sup>*</sup></span>
                                            <a href="#" class="icon-exclamation-circle" title="A warning occurred!"></a>
                                        </span>
                                        <input
                                            name="inputfield-with-warning"
                                            id="inputfield-with-warning"
                                            placeholder="Placeholdertext for inputfield with warning"
                                            type="text"
                                        />
                                    </label>
                                    <label class="success" for="inputfield-with-success">
                                        <span class="label-text">
                                            <span>Inputfield with success:<sup>*</sup></span>
                                            <a href="#" class="icon-check-circle" title="Field filled correctly!"></a>
                                        </span>
                                        <input
                                            name="inputfield-with-success"
                                            id="inputfield-with-success"
                                            placeholder="Placeholdertext for inputfield with success"
                                            type="text"
                                        />
                                    </label>
                                    <label class="info" for="inputfield-with-info">
                                        <span class="label-text">
                                            <span>Inputfield with info:<sup>*</sup></span>
                                            <a href="#" class="icon-info-circle" title="Some information!"></a>
                                        </span>
                                        <input
                                            name="inputfield-with-info"
                                            id="inputfield-with-info"
                                            placeholder="Placeholdertext for inputfield with info"
                                            type="text"
                                        />
                                    </label>
                                </div>
                                <h5>Selectboxes</h5>
                                <div class="flex-container align-bottom">
                                    <label for="selectbox-default">
                                        <span class="label-text">
                                            <span>Selectbox with (default with help-icon) and wrapping label-text:<sup>*</sup></span>
                                            <a href="#" class="icon-questionmark-circle" title="Open help!"></a>
                                        </span>
                                        <select name="selectbox-default" id="selectbox-default" required="required">
                                            <option value="">Please select&hellip;</option>
                                            <option value="1">Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                        </select>
                                    </label>
                                    <label class="error" for="selectbox-with-error">
                                        <span class="label-text">
                                            <span>Selectbox with error:<sup>*</sup></span>
                                            <a href="#" class="icon-error-circle"
                                               title="Please fill field correctly!"></a>
                                        </span>
                                        <select name="selectbox-with-error" id="selectbox-with-error"
                                                required="required">
                                            <option value="">Please select&hellip;</option>
                                            <option value="1">Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                        </select>
                                    </label>
                                    <label class="warning" for="selectbox-with-warning">
                                        <span class="label-text">
                                          <span>Selectbox with warning:<sup>*</sup></span>
                                          <a href="#" class="icon-exclamation-circle" title="A warning occurred!"></a>
                                        </span>
                                        <select name="selectbox-with-warning" id="selectbox-with-warning"
                                                required="required">
                                            <option value="">Please select&hellip;</option>
                                            <option value="1">Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                        </select>
                                    </label>
                                    <label class="success" for="selectbox-with-success">
                                        <span class="label-text">
                                            <span>Selectbox with success:<sup>*</sup></span>
                                            <a href="#" class="icon-check-circle" title="Field filled correctly!"></a>
                                        </span>
                                        <select name="selectbox-with-success" id="selectbox-with-success"
                                                required="required">
                                            <option value="">Please select&hellip;</option>
                                            <option value="1">Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                        </select>
                                    </label>
                                    <label class="info" for="selectbox-with-info">
                                        <span class="label-text">
                                          <span>Selectbox with info:<sup>*</sup></span>
                                          <a href="#" class="icon-info-circle" title="Some information!"></a>
                                        </span>
                                        <select name="selectbox-with-info" id="selectbox-with-info" required="required">
                                            <option value="">Please select&hellip;</option>
                                            <option value="1">Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                        </select>
                                    </label>
                                </div>
                            </fieldset>
                        </form>

                        <h3 id="anchor-advanced-form-elements">Advanced form elements (fieldset with
                            flex-container)</h3>
                        <form>
                            <fieldset class="flex-container">
                                <legend>Legend</legend>
                                <label for="textfield01">
                                    <span class="label-text">Label with some Text</span>
                                    <input id="textfield01" placeholder="Placeholder text" type="text"/>
                                </label>
                                <!-- begin replace input-type-radio -->
                                <h4>Replaced Input-Type-Radio</h4>
                                <div class="label inline">
                                    <span class="label-text">
                                        <span>Label for Replaced Input-Type-Radio:<sup>*</sup></span>
                                    </span>
                                    <span class="flex-container no-flex">
                                        <label for="replaced-radio1">
                                            <input type="radio" class="replace-input-type" id="replaced-radio1"
                                                   name="radiogroup" value="1"/>
                                            <span class="label-text">Label 1 (default)</span>
                                        </label>
                                        <label for="replaced-radio2">
                                            <input type="radio" class="replace-input-type" id="replaced-radio2"
                                                   name="radiogroup" value="2" checked="checked"/>
                                            <span class="label-text">Label 2 (checked (by default))</span>
                                        </label>
                                        <label for="replaced-radio3">
                                            <input type="radio" class="replace-input-type" id="replaced-radio3"
                                                   name="radiogroup" value="3" disabled="disabled"/>
                                            <span class="label-text">Label 3 (disabled)</span>
                                        </label>
                                        <label for="replaced-radio4">
                                            <input type="radio" class="replace-input-type" id="replaced-radio4"
                                                   name="radiogroup-disabled" value="4" disabled="disabled"
                                                   checked="checked"/>
                                            <span class="label-text">Label 4 (checked and disabled)</span>
                                        </label>
                                    </span>
                                </div>
                                <!-- end replace input-type-radio -->

                                <!-- begin replace-input-type-checkbox -->
                                <h4>Replaced Input-Type-Checkboxes</h4>
                                <div class="label inline">
                                    <span class="label-text">Label for Replaced Input-Type-Checkboxes:</span>
                                    <span class="flex-container no-flex">
                                        <label for="replaced-checkbox1">
                                            <input type="checkbox" class="replace-input-type" id="replaced-checkbox1"
                                                   name="checkboxgroup" value="1"/>
                                            <span class="label-text">Label 1 (default)</span>
                                        </label>
                                        <label for="replaced-checkbox2">
                                            <input type="checkbox" class="replace-input-type" id="replaced-checkbox2"
                                                   name="checkboxgroup" value="2" checked="checked"/>
                                            <span class="label-text">Label 2 (checked (by default))</span>
                                        </label>
                                        <label for="replaced-checkbox3">
                                            <input type="checkbox" class="replace-input-type" id="replaced-checkbox3"
                                                   name="checkboxgroup" value="3" disabled="disabled"/>
                                            <span class="label-text">Label 3 (disabled)</span>
                                        </label>
                                        <label for="replaced-checkbox4">
                                            <input type="checkbox" class="replace-input-type" id="replaced-checkbox4"
                                                   name="checkboxgroup" value="4" disabled="disabled"
                                                   checked="checked"/>
                                            <span class="label-text">Label 4 (checked and disabled)</span>
                                        </label>
                                    </span>
                                </div>
                                <!-- end replace-input-type-checkbox -->

                                <hr/>

                                <!-- begin toggle-switch-radio -->
                                <h4>Toggle-Switch-Radio</h4>
                                <div class="label inline">
                                    <span class="label-text">Label for Toggle-Switch-Radio-Group:</span>
                                    <span class="flex-container no-flex">
                                        <label class="toggle-switch" for="radio5">
                                            <input type="radio" id="radio5" name="toggle-switch-radiogroup-1"
                                                   value="1"/>
                                            <span class="label-text">Label 1 (default)</span>
                                        </label>
                                        <label class="toggle-switch" for="radio6">
                                            <input type="radio" id="radio6" name="toggle-switch-radiogroup-1" value="2"
                                                   checked="checked"/>
                                            <span class="label-text">Label 2 (checked (by default))</span>
                                        </label>
                                        <label class="toggle-switch" for="radio7">
                                            <input type="radio" id="radio7" name="toggle-switch-radiogroup-2" value="3"
                                                   disabled="disabled"/>
                                            <span class="label-text">Label 3 (disabled)</span>
                                        </label>
                                        <label class="toggle-switch" for="radio8">
                                            <input type="radio" id="radio8" name="toggle-switch-radiogroup-2" value="4"
                                                   disabled="disabled" checked="checked"/>
                                            <span class="label-text">Label 4 (checked and disabled)</span>
                                        </label>
                                    </span>
                                </div>

                                <div class="label inline">
                                    <span class="label-text">Label for Toggle-Switch-Radio-Group (colored):</span>
                                    <span class="flex-container no-flex">
                                        <label class="toggle-switch colored" for="radio9">
                                            <input type="radio" id="radio9" name="toggle-switch-radiogroup-3"
                                                   value="5"/>
                                            <span class="label-text">Label 5 (colored)</span>
                                        </label>
                                        <label class="toggle-switch colored" for="radio10">
                                            <input type="radio" id="radio10" name="toggle-switch-radiogroup-3" value="6"
                                                   checked="checked"/>
                                            <span class="label-text">Label 6 (checked and colored)</span>
                                        </label>
                                    </span>
                                </div>
                                <!-- end toggle-switch-radio -->

                                <!-- begin toggle-switch-checkbox -->
                                <h4>Toggle-Switch-Checkbox</h4>
                                <div class="flex-container no-flex">
                                    <label class="toggle-switch" for="toggle-switch-with-icon">
                                        <input type="checkbox" class="icon-cancel-circle" id="toggle-switch-with-icon"
                                               value="1"/>
                                        <span class="label-text">Toggle-Switch with Icon</span>
                                    </label>
                                    <label class="toggle-switch" for="toggle-switch-with-icon-disabled">
                                        <input type="checkbox" class="icon-cancel-circle" disabled="disabled"
                                               id="toggle-switch-with-icon-disabled" value="1"/>
                                        <span class="label-text">Toggle-Switch with Icon (disabled)</span>
                                    </label>
                                    <label class="toggle-switch" for="toggle-switch-with-icon-disabled-checked">
                                        <input type="checkbox" class="icon-check-circle" disabled="disabled"
                                               checked="checked" id="toggle-switch-with-icon-disabled-checked"
                                               value="1"/>
                                        <span class="label-text">Toggle-Switch with Icon (disabled and checked)</span>
                                    </label>
                                </div>
                                <div class="label inline">
                                    <span class="label-text">Label for Toggle-Switch-Checkbox-Group:<sup>*</sup></span>
                                    <span class="flex-container no-flex">
                                        <label class="toggle-switch" for="checkbox5">
                                            <input type="checkbox" id="checkbox5" name="toggle-switch-chechboxgroup-1"
                                                   value="1"/>
                                            <span class="label-text">Label 1 (default)</span>
                                        </label>
                                        <label class="toggle-switch" for="checkbox6">
                                            <input type="checkbox" id="checkbox6" name="toggle-switch-chechboxgroup-1"
                                                   value="2" checked="checked"/>
                                            <span class="label-text">Label 2 (checked (by default))</span>
                                        </label>
                                        <label class="toggle-switch" for="checkbox7">
                                            <input type="checkbox" id="checkbox7" name="toggle-switch-chechboxgroup-2"
                                                   value="3" disabled="disabled"/>
                                            <span class="label-text">Label 3 (disabled)</span>
                                        </label>
                                        <label class="toggle-switch" for="checkbox8">
                                            <input type="checkbox" id="checkbox8" name="toggle-switch-chechboxgroup-2"
                                                   value="4" disabled="disabled" checked="checked"/>
                                            <span class="label-text">Label 4 (checked and disabled)</span>
                                        </label>
                                    </span>
                                </div>
                                <div class="label inline">
                                    <span
                                        class="label-text">Label for Toggle-Switch-Checkbox-Group (colored):<sup>*</sup></span>
                                    <span class="flex-container no-flex">
                                        <label class="toggle-switch colored" for="checkbox9">
                                            <input type="checkbox" id="checkbox9" name="toggle-switch-chechboxgroup-3"
                                                   value="5"/>
                                            <span class="label-text">Label 5 (colored)</span>
                                        </label>
                                        <label class="toggle-switch colored" for="checkbox10">
                                            <input type="checkbox" id="checkbox10" name="toggle-switch-chechboxgroup-3"
                                                   value="6" checked="checked"/>
                                            <span class="label-text">Label 6 (checked and colored)</span>
                                        </label>
                                    </span>
                                </div>
                                <!-- end toggle-switch-checkbox -->

                                <!-- begin toggle-switch-radio with switch-label -->
                                <h4>Toggle-Switch-Radio with Switch-Label</h4>
                                <div class="label inline">
                                    <span
                                        class="label-text">Label for Toggle-Switch-Radio-Group with Switch-Label:</span>
                                    <span class="flex-container no-flex">
                                        <label class="toggle-switch" for="toggle-switch-radio1" title="default">
                                            <span class="switch-label-wrapper">
                                              <input type="radio" id="toggle-switch-radio1"
                                                     name="toggle-switch-switch-label-radiogroup-1" value="1"/>
                                              <span class="label-text">Yes</span><span class="label-text">No</span>
                                            </span>
                                            <span>Label #1</span>
                                        </label>
                                        <label class="toggle-switch" for="toggle-switch-radio2"
                                               title="checked (by default)">
                                            <span class="switch-label-wrapper">
                                              <input type="radio" id="toggle-switch-radio2"
                                                     name="toggle-switch-switch-label-radiogroup-1" value="2"
                                                     checked="checked"/>
                                              <span class="label-text">Yes</span><span class="label-text">No</span>
                                            </span>
                                            <span>Label #2</span>
                                        </label>
                                        <label class="toggle-switch disabled" for="toggle-switch-radio3"
                                               title="disabled">
                                          <span class="switch-label-wrapper">
                                            <input type="radio" id="toggle-switch-radio3"
                                                   name="toggle-switch-switch-label-radiogroup-2" value="3"
                                                   disabled="disabled"/>
                                            <span class="label-text">Yes</span><span class="label-text">No</span>
                                          </span>
                                          <span>Label #3</span>
                                        </label>
                                        <label class="toggle-switch disabled" for="toggle-switch-radio4"
                                               title="checked and disabled">
                                            <span class="switch-label-wrapper">
                                              <input type="radio" id="toggle-switch-radio4"
                                                     name="toggle-switch-switch-label-radiogroup-2" value="4"
                                                     disabled="disabled" checked="checked"/>
                                              <span class="label-text">Yes</span><span class="label-text">No</span>
                                            </span>
                                            <span>Label #4</span>
                                        </label>
                                        <label class="toggle-switch colored" for="toggle-switch-radio5"
                                               title="checked and disabled">
                                            <span class="switch-label-wrapper">
                                              <input type="radio" id="toggle-switch-radio5"
                                                     name="toggle-switch-switch-label-radiogroup-3" value="5"/>
                                              <span class="label-text">Yes</span><span class="label-text">No</span>
                                            </span>
                                            <span>Label #5</span>
                                        </label>
                                        <label class="toggle-switch colored" for="toggle-switch-radio6"
                                               title="checked and disabled">
                                            <span class="switch-label-wrapper">
                                              <input type="radio" id="toggle-switch-radio6"
                                                     name="toggle-switch-switch-label-radiogroup-3" value="6"
                                                     checked="checked"/>
                                              <span class="label-text">Yes</span><span class="label-text">No</span>
                                            </span>
                                            <span>Label #6</span>
                                        </label>
                                      </span>
                                </div>
                                <!-- end toggle-switch-radio with switch-label -->

                                <!-- begin toggle-switch-checkbox with switch-label -->
                                <h4>Toggle-Switch-Checkbox with Switch-Label</h4>
                                <div class="label inline">
                                    <span class="label-text">
                                        <span>Label for Toggle-Switch-Checkbox with Switch-Label:</span>
                                        <a href="#" class="icon-questionmark-circle" title="Open help"></a>
                                    </span>
                                    <span class="flex-container no-flex">
                                        <label class="toggle-switch" for="toggle-switch-checkbox1" title="default">
                                            <span class="switch-label-wrapper">
                                              <input type="checkbox" id="toggle-switch-checkbox1" name="chechboxgroup3"
                                                     value="1"/>
                                              <span class="label-text">Yes</span><span class="label-text">No</span>
                                            </span>
                                            <span>Label #1</span>
                                        </label>
                                        <label class="toggle-switch" for="toggle-switch-checkbox2"
                                               title="checked (by default)">
                                            <span class="switch-label-wrapper">
                                              <input type="checkbox" id="toggle-switch-checkbox2" name="chechboxgroup3"
                                                     value="2" checked="checked"/>
                                              <span class="label-text">Yes</span><span class="label-text">No</span>
                                            </span>
                                          <span>Label #2</span>
                                        </label>
                                        <label class="toggle-switch disabled" for="toggle-switch-checkbox3"
                                               title="disabled">
                                          <span class="switch-label-wrapper">
                                            <input type="checkbox" id="toggle-switch-checkbox3" name="chechboxgroup3"
                                                   value="3" disabled="disabled"/>
                                            <span class="label-text">Yes</span><span class="label-text">No</span>
                                          </span>
                                          <span>Label #3</span>
                                        </label>
                                        <label class="toggle-switch disabled" for="toggle-switch-checkbox4"
                                               title="checked and disabled">
                                          <span class="switch-label-wrapper">
                                            <input type="checkbox" id="toggle-switch-checkbox4" name="chechboxgroup3"
                                                   value="4" disabled="disabled" checked="checked"/>
                                            <span class="label-text">Yes</span><span class="label-text">No</span>
                                          </span>
                                          <span>Label #4</span>
                                        </label>
                                    </span>
                                </div>
                                <!-- end toggle-switch-checkbox with switch-label -->

                                <h4>Toggle-Switch-Radio with Switch-Label</h4>
                                <div class="label inline">
                                    <span class="label-text">Label for Toggle-Switch-Radio with Switch-Label:</span>
                                    <span class="flex-container no-flex">
                                            <label class="toggle-switch colored" for="toggle-switch-radio-colored1"
                                                   title="default">
                                                <span class="switch-label-wrapper">
                                                  <input type="radio" id="toggle-switch-radio-colored1"
                                                         name="radiogroup-colored" value="1"/>
                                                  <span class="label-text">Yes</span><span class="label-text">No</span>
                                                </span>
                                                <span>Label #1</span>
                                            </label>
                                            <label class="toggle-switch colored" for="toggle-switch-radio-colored2"
                                                   title="checked (by default)">
                                                <span class="switch-label-wrapper">
                                                  <input type="radio" id="toggle-switch-radio-colored2"
                                                         name="radiogroup-colored" value="2" checked="checked"/>
                                                  <span class="label-text">Yes</span><span class="label-text">No</span>
                                                </span>
                                              <span>Label #2</span>
                                            </label>
                                   </span>
                                </div>

                                <h4>Toggle-Switch-Checkbox with Switch-Label</h4>
                                <div class="label inline">
                                    <span class="label-text">Label for Toggle-Switch-Checkbox with Switch-Label:</span>
                                    <span class="flex-container no-flex">
                                        <label class="toggle-switch colored" for="toggle-switch-checkbox-colored1"
                                               title="default">
                                            <span class="switch-label-wrapper">
                                              <input type="checkbox" id="toggle-switch-checkbox-colored1"
                                                     name="chechboxgroup-colored" value="1"/>
                                              <span class="label-text">Yes</span><span class="label-text">No</span>
                                            </span>
                                            <span>Label #1</span>
                                        </label>
                                        <label class="toggle-switch colored" for="toggle-switch-checkbox-colored2"
                                               title="checked (by default)">
                                            <span class="switch-label-wrapper">
                                              <input type="checkbox" id="toggle-switch-checkbox-colored2"
                                                     name="chechboxgroup-colored" value="2" checked="checked"/>
                                              <span class="label-text">Yes</span><span class="label-text">No</span>
                                            </span>
                                          <span>Label #2</span>
                                        </label>
                                    </span>
                                </div>
                                <hr/>
                                <!-- begin multiple-switch (radio) -->
                                <h4>Multiple-Switch</h4>
                                <div class="cmd-input-group label multiple-switch">
                                    <span class="label-text" id="label-multiple-switch-radio"
                                          aria-labelledby="label-multiple-switch-radio">
                                        <span>Grouplabel for radio-group  given by property styled as multiple-switch</span>
                                        <a href="#" class="icon-questionmark-circle" title="Open help"></a>
                                    </span>
                                    <span class="flex-container no-flex no-gap">
                                        <label for="radio-id-1-multi">
                                          <input type="radio" id="radio-id-1-multi" name="input-group-radio-multi"
                                                 value="website">
                                          <span class="icon-globe"></span>
                                            <span>Website</span>
                                        </label>
                                        <label for="radio-id-2-multi">
                                          <input type="radio" id="radio-id-2-multi" name="input-group-radio-multi"
                                                 value="email">
                                          <span class="icon-mail"></span>
                                            <span>E-Mail</span>
                                        </label>
                                        <label for="radio-id-3-multi">
                                          <input type="radio" id="radio-id-3-multi" name="input-group-radio-multi"
                                                 value="phone">
                                          <span class="icon-phone"></span>
                                          <span>Phone</span>
                                        </label>
                                      </span>
                                </div>
                                <!-- end multiple-switch (radio) -->

                                <!-- begin multiple-switch (checkbox) -->
                                <div class="cmd-input-group label multiple-switch">
                                    <span class="label-text" id="label-multiple-switch-checkbox"
                                          aria-labelledby="label-multiple-switch-checkbox">
                                        <span>Grouplabel for checkbox-group  given by property styled as multiple-switch (stretched)</span>
                                        <a href="#" class="icon-questionmark-circle" title="Open help"></a>
                                    </span>
                                    <span class="flex-container no-gap">
                                        <label for="checkbox-id-1-multi">
                                            <input type="checkbox" id="checkbox-id-1-multi"
                                                   name="input-group-checkbox-multi" value="website">
                                            <span class="icon-globe"></span>
                                            <span>Website</span>
                                        </label>
                                        <label for="checkbox-id-2-multi">
                                            <input type="checkbox" id="checkbox-id-2-multi"
                                                   name="input-group-checkbox-multi" value="email">
                                            <span class="icon-mail"></span>
                                            <span>E-Mail</span>
                                        </label>
                                        <label for="checkbox-id-3-multi">
                                            <input type="checkbox" id="checkbox-id-3-multi"
                                                   name="input-group-checkbox-multi" value="phone">
                                            <span class="icon-phone"></span>
                                            <span>Phone</span>
                                        </label>
                                    </span>
                                </div>
                                <!-- end multiple-switch (checkbox) -->

                                <!-- begin inputfields with icon -->
                                <h4>Inputfields with Icon</h4>
                                <div class="flex-container align-bottom">
                                    <label for="username">
                                        <span class="label-text"><span>Username (default):</span></span>
                                        <span class="flex-container">
                                            <span class="place-inside icon-user-profile"></span>
                                            <input type="text" name="username" id="username" maxlength="50"
                                                   placeholder="Username" title="Please type in username"/>
                                        </span>
                                    </label>
                                    <label for="password">
                                        <span class="label-text">
                                          <span>Password (required):<sup>*</sup></span>
                                        </span>
                                        <span class="flex-container">
                                            <span class="place-inside icon-security-settings"></span>
                                            <input type="password"
                                                   name="password" id="password" minlength="6" maxlength="50"
                                                   placeholder="Password" required="required"
                                                   title="Please type in password"/>
                                        </span>
                                    </label>
                                    <label for="email">
                                    <span class="label-text">
                                      <span>Email (with pattern):</span></span>
                                        <span class="flex-container">
                                            <span class="place-inside icon-mail"></span>
                                            <input type="email" name="email" id="email" minlength="7" maxlength="50"
                                                   required="required" placeholder="Email address"/>
                                        </span>
                                    </label>
                                    <label for="phone" class="disabled">
                                        <span class="label-text"><span>Phone (disabled):</span></span>
                                        <span class="flex-container">
                                            <span class="place-inside icon-phone"></span>
                                            <input type="tel" name="phone" id="phone" minlength="6" maxlength="50"
                                                   placeholder="Phone number" disabled="disabled"/>
                                        </span>
                                    </label>
                                </div>
                                <!-- end inputfields with icon-->
                            </fieldset><!-- end fieldset -->
                        </form>
                    </section>
                </div>
                <!-- end forms -->

                <!-- begin main-navigation -->
                <div class="width-limitation-wrapper">
                    <section>
                        <h2 class="headline-demopage" id="anchor-main-navigation">Main Navigation</h2>
                        <div id="main-navigation-wrapper">
                            <nav>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <span class="icon-home"></span>
                                            <span>Entry 1</span>
                                        </a>
                                    </li>
                                    <li class="has-subentries">
                                        <a href="#">
                                            <span class="icon-user-profile"></span>
                                            <span>Entry 2</span>
                                            <span class="subentry-icon icon-single-arrow-down"></span>
                                        </a>
                                        <ul>
                                            <li class="has-subentries">
                                                <a href="#">
                                                    <span>Entry 2.1</span>
                                                    <span class="subentry-icon icon-single-arrow-down"></span>
                                                </a>
                                                <ul>
                                                    <li><a href="#">Entry 2.1.1</a></li>
                                                    <li><a href="#">Entry 2.1.2</a></li>
                                                    <li><a href="#">Entry 2.1.3</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Entry 2.2</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="http://www.comand-cms.com" target="_blank">CoManD-CMS</a></li>
                                </ul>
                            </nav>
                        </div>
                    </section>
                </div>
                <!-- end main-navigation -->

                <!-- begin flex-containers -->
                <div class="width-limitation-wrapper">
                    <section id="flex-section">
                        <h2 class="headline-demopage" id="anchor-flex-containers">Flex-Containers</h2>
                        <h3 id="anchor-flex-containers-default">Default</h3>
                        <div class="flex-container">
                            <div>flex-item</div>
                            <div>flex-item</div>
                            <div>flex-item</div>
                        </div>
                        <h3 id="anchor-flex-containers-no-gap">No-gap</h3>
                        <div class="flex-container no-gap">
                            <div>flex-item</div>
                            <div>flex-item</div>
                            <div>flex-item</div>
                        </div>
                        <h3 id="anchor-flex-containers-no-flex-all">No-flex (for all items)</h3>
                        <div class="flex-container no-flex">
                            <div>flex-item</div>
                            <div>flex-item</div>
                            <div>flex-item</div>
                        </div>
                        <h3 id="anchor-flex-containers-no-flex-single-item">No-flex (for single item)</h3>
                        <div class="flex-container">
                            <div>flex-item</div>
                            <div class="no-flex">flex-item (no-flex)</div>
                            <div>flex-item</div>
                        </div>
                        <h3 id="anchor-flex-containers-vertical">Vertical</h3>
                        <div class="flex-container vertical">
                            <div>flex-item</div>
                            <div>flex-item</div>
                            <div>flex-item</div>
                        </div>
                    </section>
                </div>
                <!-- end flex-containers -->

                <!-- begin grid-containers -->
                <div class="width-limitation-wrapper">
                    <section id="grid-section">
                        <h2 class="headline-demopage" id="anchor-grid-containers">Grid-Containers</h2>
                        <!--h3 class="headline-demopage">Simple Grid</h3>
                        <form novalidate="novalidate">
                            <div class="fieldset grid-container-create-columns">
                                <div class="grid-container-create-columns"  data-columns-large="4">
                                    <label for="grid-columns">
                                        <span>Grid-Columns (Fractions):</span>
                                        <input type="number" id="grid-columns" value="12" maxlength="2" />
                                    </label>
                                    <label for="grid-rows">
                                        <span>Grid-Rows (Fractions):</span>
                                        <input type="number" id="grid-rows" value="1" maxlength="2"  />
                                    </label>
                                    <label for="grid-gap">
                                        <span>Grid-Gap (Pixels):</span>
                                        <input type="number" id="grid-gap" value="10" maxlength="3" />
                                    </label>
                                    <label for="grid-reset">
                                        <span>Reset grid values:</span>
                                        <button id="grid-reset">Reset</button>
                                    </label>
                                </div>
                            </div>
                        </form-->
                        <h3 id="anchor-grid-containers-regular-grid">Regular Grid</h3>
                        <div class="grid-container-create-columns" id="grid-regular">
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                            <div>4</div>
                            <div>5</div>
                            <div>6</div>
                            <div>7</div>
                            <div>8</div>
                            <div>9</div>
                            <div>10</div>
                            <div>11</div>
                            <div>12</div>
                        </div>

                        <h3 id="anchor-grid-containers-default-classes">Grid based on default classes</h3>
                        <div class="grid-container-create-columns" id="grid-default">
                            <div class="grid-small-item">Small item</div>
                            <div class="grid-large-item">Large item</div>
                        </div>

                        <h3 id="anchor-grid-containers-layout-columns">Grid layout columns (based on
                            "small-item-class")</h3>
                        <div class="grid-container-create-columns" id="layout-columns">
                            <div class="grid-small-item">layout column/small item</div>
                            <div class="grid-small-item">layout column/small item</div>
                            <div class="grid-small-item">layout column/small item</div>
                            <div class="grid-small-item">layout column/small item</div>
                        </div>

                        <h3 id="anchor-grid-containers-two-fractions">Grid two fractions (with same width)</h3>
                        <div class="grid-container-create-columns">
                            <div class="grid-item-half-width">grid-item</div>
                            <div class="grid-item-half-width">grid-item</div>
                        </div>

                        <h3 id="anchor-grid-containers-complex-grid">Complex Grid</h3>
                        <div class="grid-container" id="grid-complex">
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                            <div>4</div>
                            <div>5</div>
                            <div>6</div>
                            <div>7</div>
                            <div>8</div>
                            <div>9</div>
                            <div>10</div>
                            <div>11</div>
                            <div>12</div>
                        </div>
                    </section>
                </div>
                <!-- end grid-containers -->

                <!-- begin back-to-top-button -->
                <a class="button" id="back-to-top-button" href="#top-of-page" title="Back to top">
                    <span class="icon-single-arrow-up"></span>
                </a>
                <!-- end back-to-top-button -->
            </main>

            <!-- begin copyright-information -->
            <div class="cmd-copyright-information" role="contentinfo">
                <a href="http://www.comand-cms.com" target="_blank" lang="en" title="CoManD-Website">© CoManD</a>
            </div>
            <!-- end copyright-information -->
        </div> <!-- end main-wrapper -->
    </div> <!-- #frontend-demo -->
</template>

<script>
// imports
import packageJson from "../package.json"

export default {
    data() {
        return {
            selectedTemplate: "blank",
            openBoxes: ["template", "table"],
            openSidebar: true,
            packageJson
        }
    },
    computed: {
        templateId() {
            return "template-" + this.selectedTemplate
        }
    },
    methods: {
        toggleSidebar() {
            this.openSidebar = !this.openSidebar
        },
        openBox(boxName) {
            this.openSidebar = true

            if (!this.openBoxes.includes(boxName)) {
                this.openBoxes.push(boxName)
            }
        },
        toggleBox(boxName) {
            if (this.openBoxes.includes(boxName)) {
                this.openBoxes.splice(boxName, 1)
            } else {
                this.openBoxes.push(boxName)
            }
        }
    },
    watch: {
        selectedTemplate() {
            let linkTag = document.querySelector('link')

            if (linkTag) {
                linkTag.parentNode.removeChild(linkTag)
            }

            if (this.selectedTemplate !== "blank") {
                let newLink = document.createElement('link');
                newLink.rel = 'stylesheet';
                newLink.href = '/templates/' + this.selectedTemplate + '.css';

                document.head.appendChild(newLink);
            }
        }
    }
}
</script>

<style>
</style>
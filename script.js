const contentData = {
    'home': {
        title: 'Our Scripts',
        html: `
            <div class="home-page content-fade-in">
                <img src="assets/logo.png?v=2.1" alt="Logo" class="home-logo" onerror="this.src='https://via.placeholder.com/120/1e293b/ffffff?text=OS'">
                <h1 class="home-title">Our Scripts</h1>
                <p class="home-subtitle">High-end FiveM ESX scripts engineered for performance, security, and the ultimate player experience.</p>
                <div class="social-links">
                    <a href="https://www.instagram.com/our_scripts" target="_blank" class="social-btn instagram">
                        <i data-lucide="instagram"></i>
                        <span>Instagram</span>
                    </a>
                    <a href="https://our-scripts-store.tebex.io" target="_blank" class="social-btn store">
                        <i data-lucide="shopping-bag"></i>
                        <span>Store</span>
                    </a>
                    <a href="https://discord.gg/9DbRGCts5W" target="_blank" class="social-btn discord">
                        <i data-lucide="message-square"></i>
                        <span>Discord</span>
                    </a>
                </div>

                <div class="feature-grid">
                    <div class="feature-card">
                        <i data-lucide="zap"></i>
                        <h3>Optimized</h3>
                        <p>Highly optimized code with minimal resource impact and efficient networking for smooth gameplay.</p>
                    </div>
                    <div class="feature-card">
                        <i data-lucide="headphones"></i>
                        <h3>Fast Support</h3>
                        <p>Questions? Our dedicated support team is ready to help you on our Discord community.</p>
                    </div>
                    <div class="feature-card">
                        <i data-lucide="download"></i>
                        <h3>Easy Installation</h3>
                        <p>Quick setup with our pre-configured installers and clear documentation. Get your server running in minutes.</p>
                    </div>
                </div>
            </div>
        `
    },
    'our_escmenu-intro': {
        title: 'ESC Menu - Introduction',
        html: `
            <div class="page-header content-fade-in">
                <div class="badge badge-warning">ESX Only</div>
                <h1>ESC Menu / Dashboard</h1>
                <p>A professional and high-end Dashboard that replaces the default ESC menu with a modern, feature-rich interface.</p>
                
                <div class="quick-links">
                    <a href="https://www.youtube.com/watch?v=your-video" target="_blank" class="btn-link youtube">
                        <i data-lucide="play-circle"></i> Video Showcase
                    </a>
                    <a href="https://our-scripts-store.tebex.io" target="_blank" class="btn-link store">
                        <i data-lucide="shopping-bag"></i> Buy Now
                    </a>
                    <a href="https://discord.gg/9DbRGCts5W" target="_blank" class="btn-link discord">
                        <i data-lucide="message-circle"></i> Community Discord
                    </a>
                </div>
            </div>
            
            <div class="section-title content-fade-in">
                <h2>📸 Visual Showcase</h2>
                <p>Clean, minimal, and fully customizable to match your server's branding.</p>
            </div>

            <div class="card content-fade-in shadow-accent flagship-card">
                <div class="flagship-content">
                    <div class="flagship-text">
                        <div class="badge">Professional Dashboard</div>
                        <h3>Integrated Experience</h3>
                        <p>Our ESC menu isn't just a list of buttons. It's a complete <strong>Dashboard</strong> with real-time player stats, a functional map preview, and quick access to all your server's social links.</p>
                        <ul class="feature-list-check small">
                            <li>Real-time Player Statistics</li>
                            <li>Integrated Map Preview</li>
                            <li>Fully Responsive Design</li>
                        </ul>
                    </div>
                    <div class="flagship-media no-bg">
                        <img src="assets/escmenu1.png" class="content-img" alt="ESC Menu Showcase">
                    </div>
                </div>
            </div>

            <div class="feature-grid-simple content-fade-in">
                <div class="card">
                    <h3>🎨 Total Customization</h3>
                    <p>Easily change every color in the menu, from primary accents to hover effects and border glows, via the <code>config.lua</code>.</p>
                </div>
                <div class="card">
                    <h3>📱 Social Integration</h3>
                    <p>Support for Discord, TikTok, and Tebex links with custom icons. Buttons automatically adjust width if some are hidden.</p>
                </div>
                <div class="card">
                    <h3>📜 Smart Rules System</h3>
                    <p>Choose between an in-game rules modal or a direct external link to your Discord/website rules page.</p>
                </div>
            </div>
        `
    },
    'our_escmenu-install': {
        title: 'ESC Menu - Installation',
        html: `
            <div class="page-header content-fade-in">
                <h1>Installation</h1>
                <p>Follow these simple steps to deploy the ESC Menu on your server.</p>
            </div>

            <div class="card content-fade-in">
                <h3>1. Prerequisites</h3>
                <p>Ensure you have the following dependencies installed and running (ESX requirement):</p>
                <ul class="feature-list-check small">
                    <li><strong>es_extended</strong> - Core framework</li>
                </ul>
            </div>

            <div class="card content-fade-in">
                <h3>2. Deployment</h3>
                <p>Extract the <code>our_escmenu</code> folder into your server's <code>resources</code> directory.</p>
                <p>Add the following line to your <code>server.cfg</code>:</p>
                <pre class="selectable"><code>ensure our_escmenu</code></pre>
            </div>

            <div class="card content-fade-in">
                <h3>3. Configuration</h3>
                <p>Open <code>config.lua</code> to customize your colors, social links, and rule system to match your server's style.</p>
            </div>
        `
    },
    'our_escmenu-config': {
        title: 'ESC Menu - Configuration',
        html: `
            <div class="page-header content-fade-in">
                <h1>Configuration</h1>
                <p>Detailed breakdown of <code>config.lua</code> settings.</p>
            </div>

            <div class="card content-fade-in">
                <h3>Color Themes</h3>
                <pre class="selectable"><code>Config.PrimaryColor = "#5c93c4"
Config.BoxColor = "#1a2029"
Config.HoverColor = "#1a2029"
Config.BorderHover = "#5c93c4"
Config.BorderGlow = "rgba(79, 170, 223, 0.77)"</code></pre>
            </div>

            <div class="card content-fade-in">
                <h3>Social Buttons</h3>
                <p>Customize your links and icons (FontAwesome v6 supported).</p>
                <pre class="selectable"><code>Config.SocialButtons = {
    {
        label = "Discord",
        icon = "fa-brands fa-discord",
        url = "https://discord.gg/9DbRGCts5W",
        enabled = true
    },
    {
        label = "Instagram",
        icon = "fa-brands fa-instagram",
        url = "https://www.instagram.com/our_scripts",
        enabled = true
    },
    -- ... more buttons
}</code></pre>
            </div>

            <div class="card content-fade-in">
                <h3>Rules System</h3>
                <pre class="selectable"><code>Config.RuleMode = 'url' -- 'text' or 'url'
Config.RuleUrl = "https://discord.gg/9DbRGCts5W"
Config.Rules = {
    "1. No RDM/VDM",
    "2. Respect Players",
    -- ...
}</code></pre>
            </div>

            <div class="card content-fade-in">
                <h3>Map Background Image</h3>
                <p>You can easily replace the map image by replacing the file <code>html/img/mapa.png</code> with your own (use the same filename or update it in <code>html/style.css</code>).</p>
            </div>
        `
    },
    'our_playerhud-intro': {
        title: 'Player HUD - Introduction',
        html: `
            <div class="page-header content-fade-in">
                <div class="badge badge-warning">ESX Only</div>
                <h1>Player HUD</h1>
                <p>A flagship, highly customizable and modern HUD system for ESX, designed for maximum performance and a premium feel.</p>
                
                <div class="quick-links">
                    <a href="https://www.youtube.com/watch?v=your-video" target="_blank" class="btn-link youtube">
                        <i data-lucide="play-circle"></i> Video Showcase
                    </a>
                    <a href="https://our-scripts-store.tebex.io" target="_blank" class="btn-link store">
                        <i data-lucide="shopping-bag"></i> Buy Now
                    </a>
                    <a href="https://discord.gg/9DbRGCts5W" target="_blank" class="btn-link discord">
                        <i data-lucide="message-circle"></i> Community Discord
                    </a>
                </div>
            </div>
            
            <div class="section-title content-fade-in">
                <h2>📸 Visual Showcase</h2>
                <p>Designed for every playstyle. Choose the layout that fits your server's identity.</p>
            </div>

            <div class="card content-fade-in shadow-accent flagship-card">
                <div class="flagship-content">
                    <div class="flagship-text">
                        <div class="badge">Most Popular</div>
                        <h3>Dynamic HUD Layouts</h3>
                        <p>Our HUD offers two distinct visual styles that can be toggled by players in real-time. Whether you prefer the classic <strong>Horizontal Bars</strong> for precision or the modern <strong>Circular Style</strong> for a clean aesthetic, we've got you covered.</p>
                        <ul class="feature-list-check small">
                            <li>Real-time style switching</li>
                            <li>Adaptive color themes</li>
                            <li>Smooth animations</li>
                        </ul>
                    </div>
                    <div class="flagship-media">
                        <img src="assets/playerhud4.png" class="content-img" alt="Circular HUD">
                        <img src="assets/playerhud3.png" class="content-img" alt="Bar HUD">
                    </div>
                </div>
            </div>

            <div class="feature-grid-simple content-fade-in">
                <div class="card">
                    <h3>⚙️ Personalization</h3>
                    <p>Every player can customize their status colors and element visibility through our high-end interactive settings menu.</p>
                    <img src="assets/playerhud1.png" class="content-img" alt="Settings Menu">
                </div>
                <div class="card">
                    <h3>💎 Smart Top Bar</h3>
                    <p>Intelligent display for Job, Cash, and Bank status. Includes a server name centerpiece and auto-hide logic.</p>
                    <img src="assets/playerhud2.png" class="content-img" alt="Top Bar">
                </div>
                <div class="card">
                    <h3>✨ Pro Features</h3>
                    <ul class="feature-list-check small">
                        <li><strong>Adaptive Minimap</strong> - Rounded corners and auto-hide while walking.</li>
                        <li><strong>Cinematic Mode</strong> - Hide everything with <code>/hudhide</code> for photos.</li>
                        <li><strong>Optimized Performance</strong> - High-frequency updates with minimal resource impact.</li>
                    </ul>
                    <div class="image-showcase"></div>
                </div>
            </div>
        `
    },
    'our_playerhud-install': {
        title: 'Player HUD - Installation',
        html: `
            <div class="page-header content-fade-in">
                <h1>Installation</h1>
                <p>Follow these quick steps to get the HUD running on your server.</p>
            </div>

            <div class="card content-fade-in">
                <h3>1. Prerequisites</h3>
                <p>Ensure you have the following dependencies installed and running (ESX requirement):</p>
                <ul class="feature-list-check small">
                    <li><strong>es_extended</strong> - Core framework</li>
                    <li><strong>esx_status</strong> - Status handling</li>
                    <li><strong>oxmysql</strong> - Database requirements</li>
                    <li><strong>ox_inventory</strong> (optional, but compatible)</li>
                </ul>
            </div>

            <div class="card content-fade-in">
                <h3>2. Deployment</h3>
                <p>Extract the <code>our_playerhud</code> folder into your server's <code>resources</code> directory.</p>
                <p>Add the following line to your <code>server.cfg</code>:</p>
                <pre><code>ensure our_playerhud</code></pre>
            </div>

            <div class="card content-fade-in">
                <h3>3. Initial Setup</h3>
                <p>Open <code>config.lua</code> and adjust the <code>Config.InventorySystem</code> to match your server's inventory (e.g., <code>ox_inventory</code>, <code>qs-inventory</code>).</p>
            </div>
        `
    },
    'our_playerhud-config': {
        title: 'Player HUD - Configuration',
        html: `
            <div class="page-header content-fade-in">
                <h1>Configuration</h1>
                <p>Customize every aspect of the HUD in <code>config.lua</code>.</p>
            </div>

            <div class="card content-fade-in">
                <h3>General Settings</h3>
                <pre><code>Config.Locale = 'en'              -- 'en', 'cs', 'de', 'fr', 'es', 'it'
Config.NotifySystem = 'esx'       -- 'esx', 'okok', 'custom'
Config.InventorySystem = 'ox_inventory' -- 'ox_inventory', 'qs-inventory', 'ps-inventory', 'esx'
Config.UpdateInterval = 500       -- Refresh rate in ms</code></pre>
            </div>

            <div class="card content-fade-in">
                <h3>Interaction & Visibility</h3>
                <pre><code>Config.AllowHudCustomization = true
Config.HudSettingsCommand = "phud"  -- Command to open settings
Config.HudSettingsKeybind = "K"     -- Default keybind (can be changed in game settings)

Config.MapOnlyInVehicle = true      -- Hide minimap when walking
Config.HideHudOnDeath = false       -- Hide when player dies
Config.EnableCinematicMode = true   -- Enable /hudhide command</code></pre>
            </div>

            <div class="card content-fade-in">
                <h3>Visual Customization</h3>
                <p>Set the default look. Players can personalize these if customization is enabled.</p>
                <pre><code>Config.StatusBarStyle = 'circle'    -- 'circle' or 'bar'
Config.ColorTheme = 'black'         -- 'gray', 'white', 'black'
Config.ShowServerName = true
Config.ServerName = "Our Server"
Config.CurrencySymbol = '$'</code></pre>
            </div>

            <div class="card content-fade-in">
                <h3>Default Status Colors</h3>
                <p>Modify the default hex colors for status indicators:</p>
                <pre><code>Config.DefaultColors = {
    health  = '#ff0000',
    armor   = '#71F967',
    hunger  = '#FD58C6',
    thirst  = '#2DB6FB',
    stamina = '#C95CFF'
}</code></pre>
            </div>
        `
    },
    'our_garage-intro': {
        title: 'Garage - Introduction',
        html: `
            <div class="page-header content-fade-in">
                <div class="badge badge-warning">ESX Only</div>
                <h1>Garage System</h1>
                <p>A modern, secure and feature-rich vehicle management system for ESX servers. Drop it in, point your players at it, and you're done — no SQL editing, no console commands, no resource restarts to add a garage.</p>
                
                <div class="quick-links">
                    <a href="https://our-scripts-store.tebex.io" target="_blank" class="btn-link store">
                        <i data-lucide="shopping-bag"></i> Buy Now
                    </a>
                    <a href="https://discord.gg/9DbRGCts5W" target="_blank" class="btn-link discord">
                        <i data-lucide="message-circle"></i> Community Discord
                    </a>
                </div>
            </div>

            <div class="section-title content-fade-in">
                <h2>📸 Visual Showcase</h2>
                <p>A clean, modern interface for managing player vehicles.</p>
            </div>

            <div class="card content-fade-in shadow-accent flagship-card">
                <div class="flagship-content">
                    <div class="flagship-text">
                        <div class="badge">Player UI</div>
                        <h3>Complete Vehicle Management</h3>
                        <p>Players get a full overview of their vehicles with real-time engine, body and fuel stats. Filter by All / Cars / Motorcycles / Favorites, search by name, see live status badges (Outside, Impounded, On the way) and request a paid valet delivery.</p>
                        <ul class="feature-list-check small">
                            <li>Real-time Engine, Body &amp; Fuel bars</li>
                            <li>Search + category filters + Favorites</li>
                            <li>Live status indicators</li>
                            <li>Valet delivery service</li>
                            <li>Showroom 360° preview</li>
                            <li>Rename &amp; Transfer</li>
                            <li>Mileage (km / mi) tracking</li>
                        </ul>
                    </div>
                    <div class="flagship-media">
                        <img src="assets/garage1.png?v=2.1" class="content-img" alt="Garage Player UI">
                    </div>
                </div>
            </div>

            <div class="card content-fade-in shadow-accent flagship-card">
                <div class="flagship-content">
                    <div class="flagship-text">
                        <div class="badge">Admin Panel</div>
                        <h3>Full In-Game Admin Control</h3>
                        <p>Open with <code>/garageadmin</code>. The right pane shows a live Server Overview. The left sidebar gives you four sections: Players, Factions, Garages and Logs — all without restarting the resource.</p>
                        <ul class="feature-list-check small">
                            <li>Live server stats (total / stored / out / impounded)</li>
                            <li>Teleport, return or delete any vehicle</li>
                            <li>Add &amp; edit garages live with coordinate capture</li>
                            <li>Searchable transaction logs (last 500 entries)</li>
                            <li>Per-action permission groups</li>
                        </ul>
                    </div>
                    <div class="flagship-media">
                        <img src="assets/garage2.png?v=2.1" class="content-img" alt="Admin Panel">
                    </div>
                </div>
            </div>

            <div class="feature-grid-simple content-fade-in">
                <div class="card">
                    <h3>🚗 3 Garage Types</h3>
                    <p><strong>Personal</strong> — any player. <strong>Faction</strong> — job-restricted, shared among members. <strong>Private</strong> — specific identifiers / whitelist.</p>
                </div>
                <div class="card">
                    <h3>🚤 All Vehicle Types</h3>
                    <p>Cars &amp; motorcycles, <strong>boats</strong> (with water spawn point), <strong>helicopters</strong> and <strong>planes</strong> — each with their own blip, marker and storage flow.</p>
                </div>
                <div class="card">
                    <h3>🔌 Fuel &amp; Notify Bridge</h3>
                    <p>Auto-detects <code>ox_fuel</code>, <code>LegacyFuel</code>, <code>ps-fuel</code>, <code>cdn-fuel</code> or falls back to GTA native. Works with <code>our_notify</code>, <code>okokNotify</code> or ESX notify.</p>
                </div>
                <div class="card">
                    <h3>🌍 Multi-Language</h3>
                    <p>English, Czech, German, French, Spanish and Italian included out of the box. All player-facing strings are keyed — add a new language with one file.</p>
                </div>
                <div class="card">
                    <h3>🛡 Hardened Security</h3>
                    <p>Server-side ownership checks on every event. Server-trusted valet quotes — clients cannot forge price/time. Race-locked impound retrieval. Lua-injection-safe admin garage editor.</p>
                </div>
                <div class="card">
                    <h3>📡 Discord Logging</h3>
                    <p>Colour-coded embeds for spawn, store, transfer, repair, valet, admin actions and new-vehicle detection. Configure via <code>Config.DiscordLogs</code>.</p>
                </div>
            </div>
        `
    },
    'our_garage-install': {
        title: 'Garage - Installation',
        html: `
            <div class="page-header content-fade-in">
                <h1>Installation</h1>
                <p>Quick setup in under 5 minutes. The script reuses the standard ESX <code>owned_vehicles</code> table — no extra schema needed for existing vehicles.</p>
            </div>

            <div class="card content-fade-in">
                <h3>1. Dependencies</h3>
                <p>Make sure these are running on your server before adding <code>our_garage</code>:</p>
                <ul class="feature-list-check small">
                    <li><strong>es_extended</strong> — ESX Legacy or compatible fork</li>
                    <li><strong>oxmysql</strong> — used for all DB I/O</li>
                    <li><strong>our_notify</strong> — optional, configurable notify backend</li>
                    <li><strong>our_textui</strong> — optional, configurable text-UI backend</li>
                    <li>Any fuel resource — <code>ox_fuel</code>, <code>LegacyFuel</code>, <code>ps-fuel</code>, <code>cdn-fuel</code> (optional, auto-detected)</li>
                </ul>
            </div>

            <div class="card content-fade-in">
                <h3>2. Copy the resource</h3>
                <p>Drop the <code>our_garage</code> folder into your <code>resources/</code> directory.</p>
            </div>

            <div class="card content-fade-in">
                <h3>3. Import the database</h3>
                <p>Run the bundled SQL file once to create the audit-log table:</p>
                <pre><code>SOURCE garage_logs.sql;</code></pre>
            </div>

            <div class="card content-fade-in">
                <h3>4. Add to server.cfg</h3>
                <p>Add <code>our_garage</code> <strong>after</strong> <code>es_extended</code> and <code>oxmysql</code>:</p>
                <pre><code>ensure oxmysql
ensure es_extended
ensure our_garage</code></pre>
            </div>

            <div class="card content-fade-in">
                <h3>5. Verify startup</h3>
                <p>Restart your server. Confirm this line appears in the console:</p>
                <pre><code>[our_garage] - Script initialized successfully! Version: X.Y.Z</code></pre>
                <p>Then open the admin panel with <code>/garageadmin</code> and add your first garage live — no restart needed.</p>
            </div>
        `
    },
    'our_garage-config': {
        title: 'Garage - Configuration',
        html: `
            <div class="page-header content-fade-in">
                <h1>Configuration</h1>
                <p>All settings live in <code>config.lua</code>. The file is fully editable and never overwritten by updates.</p>
            </div>

            <div class="card content-fade-in">
                <h3>Basic Settings</h3>
                <pre class="selectable"><code>Config.Locale = 'en'             -- 'en','cs','de','es','fr','it'
Config.Theme = 'grey'            -- 'grey','white','black','clean'
Config.GreyModeColor = '#00b7ff' -- accent colour for grey theme
Config.NotifySystem = 'our_notify'  -- 'okok','esx','our_notify','custom'
Config.TextUI = 'our_textui'        -- 'our_textui','esx'
Config.FuelSystem = 'auto'          -- auto / ox_fuel / legacyfuel / ps-fuel / cdn-fuel / native
Config.SmartImpound = false         -- lock retrieval to the impound that towed the vehicle</code></pre>
            </div>

            <div class="card content-fade-in">
                <h3>Fees</h3>
                <pre class="selectable"><code>Config.TransferFee = 5000        -- transfer vehicle to another player
Config.ImpoundFee = 1000         -- retrieve directly from impound
Config.ImpoundToGarageFee = 2500 -- move impounded vehicle back to garage without spawning

Config.RenameFee = {
    Enabled = true,
    Price = 2500
}

Config.RepairSystem = {
    Enabled = true,
    Price = 500
}</code></pre>
            </div>

            <div class="card content-fade-in">
                <h3>Valet Service</h3>
                <pre class="selectable"><code>Config.Valet = {
    Enable = true,
    MinPrice = 100,
    MaxPrice = 5000,
    MinTime = 1,       -- minutes
    MaxTime = 10,
    AirMultiplier = 5, -- aircraft/heli multiply price & time by 5
    BoatMultiplier = 3 -- boats multiply price & time by 3
}</code></pre>
            </div>

            <div class="card content-fade-in">
                <h3>Admin Panel &amp; Permissions</h3>
                <pre class="selectable"><code>Config.Admin = {
    Command = 'garageadmin',
    Permissions = {
        OpenMenu       = { 'admin', 'superadmin' },
        ManageGarages  = { 'superadmin' },
        ManageVehicles = { 'admin', 'superadmin' },
        ViewLogs       = { 'admin', 'superadmin' },
        AddVehicles    = { 'superadmin' }
    }
}</code></pre>
            </div>

            <div class="card content-fade-in">
                <h3>Discord Logging</h3>
                <pre class="selectable"><code>Config.DiscordLogs = {
    Enabled = true,
    Webhook = "",          -- paste your Discord webhook URL here
    BotName = "Our Garage Logs",
    Color = 3447003
}</code></pre>
            </div>

            <div class="card content-fade-in">
                <h3>Garage Locations</h3>
                <p>Define each garage in <code>Config.Garages</code>. Supported fields:</p>
                <pre class="selectable"><code>Config.Garages = {
    {
        label = "Garage",          -- name shown in UI / on map
        type = "car",              -- 'car' | 'boat' | 'aircraft' | 'heli'
        marker = vector3(x, y, z), -- on-foot interaction point
        spawnPoints = {
            vector4(x, y, z, heading)
        },
        -- Optional:
        job = "police",            -- faction garage (ESX job name)
        isPrivate = false,         -- private garage
        ownerIdentifier = nil,     -- CSV of identifiers (private only)
        showBlip = true,
        showMarker = nil           -- overrides GlobalMarkerVisibility
    }
}</code></pre>
                <p>Garages can also be added <strong>live in-game</strong> via <code>/garageadmin</code> → Garages → Add, using coordinate capture with <code>[E]</code>.</p>
            </div>

            <div class="card content-fade-in">
                <h3>Mileage Unit</h3>
                <pre class="selectable"><code>Config.MileageSystem = {
    Enabled = true,
    Unit = 'km'  -- 'km' or 'mi'
}</code></pre>
            </div>
        `
    }
};

// Flattened order for Next/Back navigation
const allTargets = [
    'home',
    'our_playerhud-intro',
    'our_playerhud-install',
    'our_playerhud-config',
    'our_escmenu-intro',
    'our_escmenu-install',
    'our_escmenu-config',
    'our_garage-intro',
    'our_garage-install',
    'our_garage-config'
];

let currentTarget = 'home';

// DOM Elements
const contentViewport = document.getElementById('content-viewport');
const btnBack = document.getElementById('btn-back');
const btnNext = document.getElementById('btn-next');
const scriptList = document.getElementById('script-list');
const headerLogo = document.getElementById('header-logo');

// Initialize
function init() {
    loadContent(currentTarget);
    setupEventListeners();
}

function loadContent(target) {
    currentTarget = target;
    const data = contentData[target];
    
    // Update Content
    contentViewport.innerHTML = data.html;
    lucide.createIcons();
    
    // Update Navigation UI (Sidebar)
    updateSidebarUI(target);
    
    // Update Footer Buttons
    updateFooterButtons();
    
    // Scroll to top
    document.querySelector('.content-area').scrollTop = 0;
}

function updateSidebarUI(target) {
    // Clear all active classes
    document.querySelectorAll('.nav-item, .nav-category, .subcategories li').forEach(el => {
        el.classList.remove('active', 'active-sub');
    });

    // Close all categories first, then we'll open the right one
    document.querySelectorAll('.nav-category').forEach(cat => cat.classList.remove('open'));

    // Find the element with this target
    const targetEl = document.querySelector(`[data-target="${target}"]`);
    if (targetEl) {
        if (targetEl.tagName === 'LI' && targetEl.parentElement.classList.contains('subcategories')) {
            // It's a subcategory
            targetEl.classList.add('active-sub');
            const category = targetEl.closest('.nav-category');
            category.classList.add('active', 'open');
        } else {
            // It's a main nav item (like Home or How-to)
            targetEl.classList.add('active');
        }
    }
}

function updateFooterButtons() {
    const currentIndex = allTargets.indexOf(currentTarget);
    const currentCategory = getCategoryOfTarget(currentTarget);
    
    // Check if previous target exists and is in the same category
    if (currentIndex > 0) {
        const prevTarget = allTargets[currentIndex - 1];
        if (getCategoryOfTarget(prevTarget) === currentCategory) {
            btnBack.disabled = false;
            btnBack.querySelector('span').innerText = getButtonLabel(prevTarget);
        } else {
            btnBack.disabled = true;
            btnBack.querySelector('span').innerText = "Previous";
        }
    } else {
        btnBack.disabled = true;
        btnBack.querySelector('span').innerText = "Previous";
    }
    
    // Check if next target exists and is in the same category
    if (currentIndex < allTargets.length - 1) {
        const nextTarget = allTargets[currentIndex + 1];
        if (getCategoryOfTarget(nextTarget) === currentCategory) {
            btnNext.disabled = false;
            btnNext.querySelector('span').innerText = getButtonLabel(nextTarget);
        } else {
            btnNext.disabled = true;
            btnNext.querySelector('span').innerText = "Next";
        }
    } else {
        btnNext.disabled = true;
        btnNext.querySelector('span').innerText = "Next";
    }
}

function getCategoryOfTarget(target) {
    if (target === 'home') return 'none';
    return target.split('-')[0];
}

function getButtonLabel(target) {
    // Return a short label or just the title
    const fullTitle = contentData[target].title;
    if (fullTitle.includes(' - ')) {
        return fullTitle.split(' - ')[1];
    }
    return fullTitle;
}

function setupEventListeners() {
    // Home click (Logo/Name)
    headerLogo.addEventListener('click', () => loadContent('home'));

    // Sidebar Items
    scriptList.addEventListener('click', (e) => {
        const targetEl = e.target.closest('[data-target]');
        const categoryHeader = e.target.closest('.category-header');
        
        if (targetEl) {
            loadContent(targetEl.getAttribute('data-target'));
        } else if (categoryHeader) {
            const category = categoryHeader.closest('.nav-category');
            toggleCategory(category);
        }
    });

    // Navigation Buttons
    btnBack.addEventListener('click', () => {
        const currentIndex = allTargets.indexOf(currentTarget);
        if (currentIndex > 0) loadContent(allTargets[currentIndex - 1]);
    });

    btnNext.addEventListener('click', () => {
        const currentIndex = allTargets.indexOf(currentTarget);
        if (currentIndex < allTargets.length - 1) loadContent(allTargets[currentIndex + 1]);
    });
}

function toggleCategory(category) {
    const isOpen = category.classList.contains('open');
    
    // Close other categories
    document.querySelectorAll('.nav-category').forEach(cat => {
        if (cat !== category) cat.classList.remove('open');
    });
    
    if (!isOpen) {
        category.classList.add('open');
        // Logic: when clicking category, automatically go to first subcategory
        const firstSub = category.querySelector('.subcategories li');
        if (firstSub) {
            loadContent(firstSub.getAttribute('data-target'));
        }
    } else {
        category.classList.remove('open');
    }
}

// Start app
init();

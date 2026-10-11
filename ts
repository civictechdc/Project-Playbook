[33mcommit c03c936247af6f349d5e184cc831aa44627d2fb9[m
Author: H Glover <86892232+HelenGlover@users.noreply.github.com>
Date:   Sat Oct 10 20:29:34 2026 -0400

    Update Civic Tech Playbook

[1mdiff --git a/src/content/docs/index.mdx b/src/content/docs/index.mdx[m
[1mindex 254ae84..314a137 100644[m
[1m--- a/src/content/docs/index.mdx[m
[1m+++ b/src/content/docs/index.mdx[m
[36m@@ -1,92 +1,87 @@[m
 ---[m
[31m-title: Civic Tech for Community[m
[32m+[m[32mtitle: ""[m
 description: A guide to building, joining, and understanding civic tech in the DC community.[m
 template: splash[m
 ---[m
 [m
[31m-<p style={{[m
[31m-  fontSize: '1.15rem',[m
[31m-  lineHeight: '1.8',[m
[31m-  maxWidth: '800px',[m
[31m-  opacity: 0.8,[m
[31m-  marginBottom: '3rem'[m
[31m-}}>[m
[31m-Civic Tech DC has spent over a decade building civic technology, organizing volunteers, and partnering with groups to address real community needs. This playbook captures what we've learned.[m
[31m-</p>[m
[32m+[m[32m<div class="playbook-intro">[m
 [m
[31m-import { Card, CardGrid } from '@astrojs/starlight/components'[m
[32m+[m[32m  <h1>Build technology<br />that serves people.</h1>[m
[32m+[m
[32m+[m[32m  <h5><i> Civic tech brings people together to use technology to address public problems. This playbook draws on Civic Tech DC's[m
[32m+[m[32m  experience organizing volunteers and building civic tech solutions to help you find your place in the[m
[32m+[m[32m  community and turn ideas into project.</i></h5>[m
 [m
 <img[m
[31m-  src="/images/frontpage.jpg"[m
[32m+[m[32m  src="/images/meetup.jpg"[m
   alt="Civic Tech DC community"[m
[31m-  style={{[m
[31m-    width: '100%',[m
[31m-    height: '420px',[m
[31m-    objectFit: 'cover',[m
[31m-    borderRadius: '18px',[m
[31m-    marginTop: '1rem',[m
[31m-    marginBottom: '2.5rem'[m
[31m-  }}[m
[32m+[m[32m  class="hero-image"[m
[32m+[m[32m  style="margin-bottom: 10px;"[m
 />[m
 [m
[32m+[m[32m</div>[m
 [m
[31m-<p style={{[m
[31m-  fontSize: '1.15rem',[m
[31m-  lineHeight: '1.8',[m
[31m-  maxWidth: '800px',[m
[31m-  opacity: 0.8,[m
[31m-  marginBottom: '3rem'[m
[31m-}}>[m
[31m-</p>[m
[32m+[m[32m<section class="playbook-paths">[m
 [m
[31m-## Introducing Civic Tech DC[m
[32m+[m[32m  <div class="resources-heading">[m
[32m+[m[32m    <div>[m
[32m+[m[32m      <h2>Where do you want to start?</h2>[m
[32m+[m[32m    </div>[m
 [m
[31m-<CardGrid>[m
[31m-  <a href="/civictech/" style={{ textDecoration: 'none' }}>[m
[31m-    <Card title="What is Civic Tech" icon="users">[m
[31m-      A shared definition of civic tech.[m
[31m-    </Card>[m
[31m-  </a>[m
[32m+[m[32m    <p>[m
[32m+[m[32m      Whether you're learning about civic tech, looking to contribute,[m
[32m+[m[32m      or have an idea for a project, start with the path that fits you.[m
[32m+[m[32m    </p>[m
[32m+[m[32m  </div>[m
 [m
[31m-  <a href="/history/" style={{ textDecoration: 'none' }}>[m
[31m-    <Card title="History of Civic Tech DC" icon="rocket">[m
[31m-      The evolution of the community from 2012 to today.[m
[31m-    </Card>[m
[31m-  </a>[m
[31m-</CardGrid>[m
[32m+[m[32m  <div class="path-grid">[m
 [m
[31m----[m
[32m+[m[32m    <a href="/learn/" class="path-card">[m
[32m+[m[32m      <span class="card-number">01</span>[m
[32m+[m[32m      <h3>Learn</h3>[m
[32m+[m[32m      <p>Understand what civic tech is, how it works, and why it matters.</p>[m
[32m+[m[32m      <span class="card-link">Explore →</span>[m
[32m+[m[32m    </a>[m
 [m
[31m-## Choose Your Path[m
[32m+[m[32m    <a href="/join/" class="path-card">[m
[32m+[m[32m      <span class="card-number">02</span>[m
[32m+[m[32m      <h3>Join</h3>[m
[32m+[m[32m      <p>Find a project that matches your interests and skills.</p>[m
[32m+[m[32m      <span class="card-link">Explore →</span>[m
[32m+[m[32m    </a>[m
 [m
[31m-<CardGrid>[m
[31m-  <a href="/contributors/" style={{ textDecoration: 'none' }}>[m
[31m-    <Card title="Join A Project" icon="users">[m
[31m-      Join a project, meet others, and start contributing.[m
[31m-    </Card>[m
[31m-  </a>[m
[32m+[m[32m    <a href="/build/" class="path-card">[m
[32m+[m[32m      <span class="card-number">03</span>[m
[32m+[m[32m      <h3>Build</h3>[m
[32m+[m[32m      <p>Turn an idea into a Civic Tech DC project.</p>[m
[32m+[m[32m      <span class="card-link">Explore →</span>[m
[32m+[m[32m    </a>[m
 [m
[31m-  <a href="/builders/" style={{ textDecoration: 'none' }}>[m
[31m-    <Card title="Start A Project" icon="rocket">[m
[31m-      Turn ideas into civic tools with community support.[m
[31m-    </Card>[m
[31m-  </a>[m
[31m-</CardGrid>[m
[32m+[m[32m  </div>[m
[32m+[m[32m</section>[m
[32m+[m
[32m+[m[32m<section class="resources-section">[m
[32m+[m
[32m+[m[32m  <div class="resources-heading">[m
[32m+[m[32m    <div>[m
[32m+[m[32m      <h2>Project Resources</h2>[m
[32m+[m[32m    </div>[m
[32m+[m
[32m+[m[32m    <p>[m
[32m+[m[32m      Practical guidance for organizing a team, building community, and keeping your project moving forward.[m
[32m+[m[32m    </p>[m
[32m+[m[32m  </div>[m
[32m+[m
[32m+[m[32m  <div class="path-grid">[m
[32m+[m
[32m+[m[32m    <a href="/history/" class="path-card">[m
[32m+[m[32m      <h3>History of Civic Tech DC</h3>[m
[32m+[m[32m      <p>[m
[32m+[m[32m        Exploring our roots[m[41m [m
[32m+[m[32m      </p>[m
[32m+[m[32m      <span class="card-link">Explore →</span>[m
[32m+[m[32m    </a>[m
 [m
[31m----[m
 [m
[31m-## Resources[m
[31m-[m
[31m-<CardGrid>[m
[31m-  <a href="/projects/" style={{ textDecoration: 'none' }}>[m
[31m-    <Card title="Project Resources" icon="users">[m
[31m-      Guides for building and sustaining civic tech projects.[m
[31m-    </Card>[m
[31m-  </a>[m
[31m-[m
[31m-  <a href="" style={{ textDecoration: 'none' }}>[m
[31m-    <Card title="Civic Tech and AI" icon="rocket">[m
[31m-      Learning resources and workshops (coming soon).[m
[31m-    </Card>[m
[31m-  </a>[m
[31m-</CardGrid>[m
\ No newline at end of file[m
[32m+[m[32m  </div>[m
[32m+[m[32m</section>[m

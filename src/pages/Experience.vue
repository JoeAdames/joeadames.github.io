<template>
  <section class="p-6">
    <h2 class="text-2xl font-semibold mb-6">Experience</h2>
    <div v-for="role in roles" :key="role.company" class="mb-4">
      <h3 class="text-xl font-semibold">{{ role.position }} - {{ role.company }}</h3>
      <p class="text-sm text-gray-500 mb-1">{{ role.duration }}</p>
      <ul class="list-disc list-inside text-gray-700">
        <li v-for="duty in role.duties" :key="duty">{{ duty }}</li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
const roles = [
  {
    position: 'Front-End Developer',
    company: 'Storis Inc.',
    duration: '2021 - 2024',
    duties: [
      'Boosted client engagement by 15% and secured recurring revenue with a Monthly Maintenance Plan offering goal reviews, code checks, and issue resolution hours.',
      'Cut pre-dev time by 8 hours and sped up delivery by 50% through a reusable HTML/CSS/Bootstrap/JS component library.',
      'Increased client independence with object-editable templates, improving satisfaction and validating the maintenance plan’s value.',
      'Reduced support tickets by 10% by co-developing a customer portal for billing, orders, and shipping info.',
      'Managed $70K/year projects using Agile, Jira Kanban, and Git/GitHub for streamlined tracking and version control.',
      'Improved site performance with browser dev tools, speeding up load times and UX.',
      'Raised code quality via peer reviews and paired programming, promoting standards and team collaboration.',
    ],
  },
  {
    position: 'Junior Front-End Engineer',
    company: 'WeatherWorks Inc.',
    duration: '2020 - 2021',
    duties: [
      'Improved maintainability and scalability of legacy codebases by modernizing and optimizing jQuery/PHP applications, including thorough documentation for long-term sustainability.',
      'Enhanced the accuracy and usability of weather forecasting tools by partnering with meteorologists to analyze critical data flows and visualization requirements.',
      'Reduced visual clutter by 40% and improved output accuracy by developing and implementing an optimized data visualization tool using Vue.js and RESTful API integration.',
      'Delivered seamless user interactions and intuitive alerts by designing and developing interactive components in Vue.js to enhance an existing tasking tool.',
    ],
  },
  {
    position: 'Intern',
    company: 'Selective Insurance',
    duration: '2017 - 2019',
    duties: [
      'Ensured SQL query accuracy and compliance via QA reviews in Informatica.',
      'Improved report clarity by documenting predictive algorithm outputs.',
      'Enhanced team insights through presentations on key findings.',
    ],
  },
]
</script>

<style scoped></style>

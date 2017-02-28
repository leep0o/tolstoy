import React from 'react'
import { PRIVACY_POLICY_URL, TERMS_OF_SERVICE_URL } from 'config/client_config'

export default class LandingFooter extends React.Component {

  render() {
    const menuHeaders = ['Правовые документы', 'Сообщества']
    const columnsAlign = ['left', 'right']
    const menuItems = [
      [
        // {name: 'Условия проведения краудфандинга' },
        {name: 'Политика конфиденциальности', url: PRIVACY_POLICY_URL},
        {name: 'Правила пользования', url: TERMS_OF_SERVICE_URL}
      ],
      [
        {name: 'Chat', url: 'https://chat.golos.io/', icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAKMUlEQVR4XtVba3RU1RX+9rnkAQFmAioKBQkFmlR5SVUQqSK2iyUtYjEKajI3KlhQarWIWheVUrUVyqNiXRYbclNTFIO8fFClLSJPtZUoWhQChkYQpCQzgRBJmLO7zp0kZpJ5nDszieGslT8533599557zt5nD6EVBwNUmZvbWxjGSDAPJSCLpewLIXpIwA0pk23zQtQKwAspj5IQZcz8HwAlfiF2dC8oKG9FF0GJVs5z54rKsrJRBGSz3z9eGEa/eGxI5lKD6DViLu6SkbGD5s6V8ehrLpswAnx33NGN/f6pAO4CkJFIJxt0SWC/YF6Gurrn3CtWVCbCRtwEVOXmdpeGMRt+/z0QolMinNLQUQ1gKRnGAld+foUGPiwkZgI4O9uoSkubwcA8qPX8DQwpZYUhxJyu1dV/ouJifywuxERAlWlm+oFCAi6LxWjCZYh2ELPHZVn7nOp2TEBlXl4eMf8RQEenxloVL+UpEuKnLst63okdbQJ47twO3rKyJQTc7cRAW2MJWNK1unqW7pLQIoBNM7WKaCUzT2jrgGKyR7TG1bnzFFq69HQ0+agEqOArgXUC+GE0Ze1s/m+uLl0mRiMhIgHqta86ePDls+bJN38CUq521dTcFGk5RCSg0uNZSkT3tLMn68gdYl7sKiy8P5xQWALqv/bLHVlrp2AiynEVFBSFci8kAWqfl8D77W6ri53gajKMoa78/NKouYA64XnT0ra3m0NO7EEHSbKU2939+o1unky1eAN8pjmTgacSYrdzR6B/L6DnOUB6F3ByB5AQWqpZSlDtGaDyBHD4f0DpIeBkjZZsBNB0t2U923Q+iAA7sRFCvSZxne0560Jg9GBgwLcAirrT6gXFDOz9HNj6IWjPQT2ZZigJHBe1tQOaZpJB3nnz8p4E8+yYtAPgHunAjVcDGRfEqkJP7sBhYNVm0JfOM2Jmfiy9sHBOg6FGAux8vq6uPNaUli8ZCGRfDSR10AsiXlRtHfDSW6ASh/kP80km6p1uWV7lQiMBXtN8EMDvYvJr9GDw9VfGJBqXkFoWa7eCtu12qma227IWNBKgyli+sjK19h1XcnjoAODWaxO31p2GwgwqehP4YL+2pCqzpRcWDiSA7TegwjRHC+BtbQ0NwHPd4PuygeQkx6IJFThdB1q4Eqio0lZLwEiXZe20Cag0zacImKktXQ/kuyYEvvTtYNg7Q/5r2p4QsMhlWb8gu3Sdk1PquHr77V7g6ddrG2wT4NOrQWVHdE194rasLKrIze0jhHC8sbJnHDAoroq3rqPaOHtHKNqoja8Tohd58/JuBvOL2lIKmJwEnnc70MFwJNbq4LozwJx80BnN+ihRNnlN87cAHnLiHGf2Ae78kRORNsPSs+sCx2aNoQ5F5DPNtQw4W8xjhoHHj4xo4nD5MezetQ9SSmQN7oe+/XqGxOvgmBmf7P4MB0o/R2rHFAy7NBPdznGF1EfrtgJbPtQIH4CUq8mbm1sCIYboSdSjJo4GXzkorMg/NryDtS/+M2j+B+NHYMJNY4L+p4Pzn5EoeGYNPvj33kbZDkkGzOkTMWT4wJY+bC4BvbJdLxyiXWoJfAHgfD2JAIpVIJdlhRQpP3gE839VEHLu7gcmI/PiwFlLF7fpjfewesXfW+hLSUnGrxfNQJrKOJuOnR+DVm3WDecQVZhmjQBSdSVsAiaPBb73nZAir6/Zgg1rt4acGzVmGCab4+w5XdwfnihC6aehL4jNGRMx/PJmD+KdPaDiTbrh1Kht0C+EZpJerzYSAeuL38LGV3eEdGDE6MG49c7x9pwubuFvClFWejikvpxpP8Zloy4OnnNAgJRSJpyATz8uw9PzXwjpsDl9AoaPuMie08W9+vJmvLG+5Zo2DIFHF0xHeveucRIQyxLIHgM0f/Ua3g5mvLB8A3a8/UGQY4OGDcDUeyeB6gsk6suug/uq5jSWPF6EQ+VfBumbOGUsxo5reTVpZ4ZrtugtAXWdFtNHUG2BY4aFNaKCe//dT/DRrr1gycga1A+XjhoEIYKrQ7q42tO12LqpBAf2fY6OHVNsXQOz+oS0T2++B6g/vXEotm3w0kzwzdfomWhr1F83gnZpFkmY34/pIMTnpQOzp7R1aFr26PHnA4VUvfEyeT2eJ0D0sB7+axQ/dCsQ5jTmVFfC8EcqQL/XT2vso7DX47kJRCudOsHXXAJcN8KpWKviaf02oNnHN6JB5hvpeF5eb4P5v449S00G/zIH6JTiWLRVBKprQI8XAapYqjmSzpzpGSiJeTz7BFF/TblGGI+8CJh0lVOxVsHTS5uAd/do61a9iOmFhRfZBPhMcwkD92pLNwD79AD/bJJjsYQLfPQZyNrgTC3RQndBwSybgCqPZ5QkCn2Aj6DWTokjnAeceRQj+tAx0DNrgdP6r76yFFQUtbs79+/f57QuyA/eApwb1y1ajFEHxOz63/LXgFNRO2GC7KhLNrdlZTaWxdWs1+OZDaIndT2yr8Ee+IbOAuouYNtHwKvbAd3yV5PAmHlWemHhwvo3ITDjveWWdCQnq7wzTYcEvnY4MO5yHWhiMarctWEn6ODR2PRKeUKmpvbutmyZL4gAmwQH9UH7QqTXuS2dOFkDUk/mSAV4aP/AvcH53QFD71q8hUK/H/iiArS3HFBV38PHYwu8XoqJ5qUXFDzaoCQoO1EXpP66un1CiG4Rrai7/kdygiGSgW27QW+8C3xVGzynkqCuaeCUpMZsMFoUKokipefEKUDdASZgSCmPITV1QMPTb/EGqH/4TFP1/6pO0PDj+0PAE0Z9PX/gMEiloF/E93QSEGM0FdPclvVcU1CL7gXVIuPr3HkLmMOWfXnGREBVeX3VwCvbnV9RR3OzFeaJeWvXjIyrorbIKNtVubkDJbArZK9AWkdgTi54y4egjf9ydPRshbj0VDKfhGEMcS9ffqC5QNj+FZ9p5jDwlxYWLuge2HqO2f0FZ8UgYIrLskKmiREbeHymuZiBn58VUYZ3coHbssK2/URulQ18D4rBfMNZSkKxq2/fyZF+ZxS1hYtnzkzxnTixFkCgoH+2DClfd9XU3EDFxc325OAAohKg4DYJPt8KCPGTsyT+Yld19W3RglexaBFgk6B+I9Sp0wImuq9dk0A033XhhQ/r/rxOm4CGoH15ebcxs+q21MoZ2ows5pNENDXc1z6cH44JUIp8pjlASmmREFe0WYARDKlDDhuGJ9Q+H82/mAiwl0SgtW6aBB4TQPdohlpjXp3thRCPuPr2zdd95bUPQroOqzSak5LuJ3VeIOqsKxcXTsoTbBiLOSlpUdPEJhadMb8BzY1VmqabgKmSeVosBVYd51UlB8zLOCXlz/EG3mAvYQQ0KFRtd1WmqSol2QxcByBTJ7hwGFW9JSE2EPOqrpb1jipjxaMv4UsgmjPHbr+9ZxLzFSzlEGL+LgwjA8znAegmpbQvFQTwFYSoBPNREH3GzHsIKEny+7enFRWpDpZWG/8H0Gr50TCbaOoAAAAASUVORK5CYII='},
        {name: 'Facebook', url: 'https://www.facebook.com/www.golos.io', icon: 'data:image/png;base64,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'},
        {name: 'VK', url: 'https://vk.com/goloschain', icon: 'data:image/png;base64,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'},
        {name: 'Twitter', url: 'https://twitter.com/goloschain', icon: 'data:image/png;base64,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'},
        {name: 'Bitcointalk', url: 'https://bitcointalk.org/index.php?topic=1624364.0', icon: 'data:image/png;base64,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'},
      ]
    ]

    function renderMenus(align) {
      return menuHeaders.map((header, index) => {
        return  <div key={index} className={`small-12 medium-6 columns text-${columnsAlign[index]}`}>
              <strong>{header}</strong>
              <ul>
                {menuItems[index][0].icon ?
                  <li key="0" className="social-icons">{menuItems[index].map((item, i) => { return <a href={item.url} target="blank"><img src={item.icon}/></a> })}</li>
                  :
                  menuItems[index].map((item, i) => { return <li key={i}><a href={item.url} target="blank">{item.name}</a></li> })
                }
              </ul>
            </div>
      })
    }

    return (
      <section className="LandingFooter">
        <div className="row LandingFooter__menus" id="footer">
          {renderMenus()}
        </div>
        <div className="row text-left LandingFooter__description">
          <div className="small-12 medium-12 columns">
            <span className="text-left">2016 GOLOS.io - социальная платформа, сообщество блогеров, медиасеть - разработанная на Медиаблокчейне ГОЛОС</span>
          </div>
        </div>
      </section>
    )
  }
}

<template>
  <div class="main">
    <div class="container-fluid bg-white p-3">
      <div class="row">
        <div class="col-md-12">
          <h2 class="mb-3">MailBox</h2>
        </div>
        <div class="col-md-6 row">
          <div class="col-md-4 row">
            <div class="col-md-12 border-end">
              <button class="btn btn-danger col-12 mb-4">New mail</button>
              <h6>Folders</h6>
              <div class="list-group list-group-flush">
                <a
                  href="#"
                  class="
                    list-group-item list-group-item-action
                    active
                    border-white
                  "
                  aria-current="true"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <p class="mb-1">
                      <font-awesome-icon
                        :icon="['fas', 'envelope']"
                      />&nbsp;Inbox
                    </p>
                  </div>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action border-white"
                  aria-current="true"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <p class="mb-1">
                      <font-awesome-icon
                        :icon="['fas', 'paper-plane']"
                      />&nbsp;Sent
                    </p>
                    <small></small>
                  </div>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action border-white"
                  aria-current="true"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <p class="mb-1">
                      <font-awesome-icon
                        :icon="['fas', 'star']"
                      />&nbsp;Favories
                    </p>
                    <small></small>
                  </div>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action border-white"
                  aria-current="true"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <p class="mb-1">
                      <font-awesome-icon :icon="['fas', 'file']" />&nbsp;Draft
                    </p>
                    <small></small>
                  </div>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action border-white"
                  aria-current="true"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <p class="mb-1">
                      <font-awesome-icon :icon="['fas', 'trash']" />&nbsp;Trash
                    </p>
                    <small></small>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-8 border-end">
            <div class="col-md-12 input-group mb-3">
              <span id="basic-addon1" class="input-group-text">@</span>
              <input type="text" class="form-control" placeholder="Search" />
            </div>
            <div class="col-md-12">
              <h3>Inbox</h3>
            </div>
            <div class="list-group list-group-flush mt-6">
              <!-- ____ EMAIL ____ -->
              <div v-for="(item, index) in data.email" :key="index">
                <a
                  v-if="item.isVisible"
                  href="#"
                  class="list-group-item list-group-item-action"
                  style="
                    border-top: none;
                    border-left: none;
                    border-right: none;
                  "
                  @click="setPreview(item)"
                >
                  <div class="row d-flex flex-wrap align-items-center">
                    <div class="col-1 align-middle">
                      <img
                        :src="item.avatarImage"
                        class="rounded-circle pr-4"
                        alt="avatar"
                        style="position: relative; left: -10px"
                      />
                    </div>
                    <div class="col-11">
                      <div class="d-flex w-100 justify-content-between">
                        <h6 class="mb-1">
                          <span>{{ item.from }}</span>
                        </h6>
                        <small class="text-muted">5 mins</small>
                      </div>
                      <small class="text-muted mb-1">
                        {{ item.content }}
                      </small>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <button class="btn btn-sm btn-dark mr-2">
              <font-awesome-icon :icon="['fas', 'thumbtack']" />
            </button>
            <button class="btn btn-sm btn-dark">
              <font-awesome-icon :icon="['fas', 'envelope-open']" />
            </button>
            <button class="btn btn-sm btn-dark">
              <font-awesome-icon :icon="['fas', 'clock']" />
            </button>
            <button class="btn btn-sm btn-dark">
              <font-awesome-icon :icon="['fas', 'archive']" />
            </button>
            <button class="btn btn-sm btn-danger">
              <font-awesome-icon :icon="['fas', 'trash']" />
            </button>
          </div>
          <div
            v-if="preview"
            class="row d-flex flex-wrap align-items-center mb-2 border-bottom"
          >
            <div class="col-1 align-middle">
              <img :src="avatar" class="rounded-circle" alt="avatar" />
            </div>
            <div class="col-11">
              <div class="d-flex w-100 justify-content-between">
                <h6 class="mb-1">{{ preview.from }}</h6>
              </div>
              <div class="float-end">
                <span class="badge bg-dark mb-2"
                  ><font-awesome-icon :icon="['fas', 'reply']"
                /></span>
                <span class="badge bg-dark mb-2"
                  ><font-awesome-icon :icon="['fas', 'arrow-up']"
                /></span>
                <span class="badge bg-dark mb-2"
                  ><font-awesome-icon :icon="['fas', 'bars']"
                /></span>
              </div>
              <small class="text-muted mb-1"> To: Me</small>
            </div>
          </div>
          <div v-if="preview" class="text-center">
            <div class="card-body">
              <h5 class="card-title">
                {{ preview.object }}
              </h5>
              <p class="card-text">
                {{ preview.content }}
              </p>
              <div v-if="preview.download" class="download">
                <a href="/Systeme_Vocal.zip" download rel="noopener noreferrer" target="_blank">
                  Download
                </a>
              </div>
              <img
                class="rounded mx-auto d-block img-thumbnail mb-3"
                :src="preview.image"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      avatar: 'https://i.pravatar.cc/35',
      preview: null,
      email: [],
    }
  },
  methods: {
    setPreview(mail) {
      this.preview = mail
    },
  },
}
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 1rem;
}
</style>

<style lang="scss">
@import '~/assets/bootstrap.css';
.main {
  height: 100%;
  width: 100%;
  overflow: scroll;
  border-radius: 0 0 8px 8px;
  .container-fluid {
    min-height: 100%;
  }
  .download {
    padding: 5px 10px;
    background: gray;
    border-radius: 4px;
    color: white;
    width: max-content;
    margin: auto;
    margin-bottom: 5px;
    a {
      text-decoration: none;
      color: white;
    }
  }
}
</style>
